import { createServerFn } from "@tanstack/react-start";
import { REVIEWS } from "./site/data";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  photo?: string;
  source: string;
  location?: string;
};

export type GoogleReviewsResult = {
  reviews: GoogleReview[];
  rating?: number;
  total?: number;
  live: boolean;
};

const FALLBACK: GoogleReviewsResult = {
  reviews: REVIEWS.map((r) => ({
    author: r.name,
    rating: r.rating,
    text: r.quote,
    photo: r.photo,
    source: r.source ?? "Google",
    location: r.location,
  })),
  rating: 4.9,
  total: 200,
  live: false,
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !lovableKey || !mapsKey) {
      return FALLBACK;
    }

    try {
      const res = await fetch(
        `https://connector-gateway.lovable.dev/google_maps/places/v1/places/${encodeURIComponent(
          placeId,
        )}`,
        {
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": mapsKey,
            "X-Goog-FieldMask":
              "id,displayName,rating,userRatingCount,reviews",
          },
        },
      );

      if (!res.ok) {
        console.error("Places API error", res.status, await res.text());
        return FALLBACK;
      }

      const data = (await res.json()) as {
        rating?: number;
        userRatingCount?: number;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const reviews: GoogleReview[] = (data.reviews ?? [])
        .filter((r) => (r.rating ?? 0) >= 4)
        .slice(0, 8)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google User",
          rating: r.rating ?? 5,
          text: r.text?.text ?? r.originalText?.text ?? "",
          relativeTime: r.relativePublishTimeDescription,
          photo: r.authorAttribution?.photoUri,
          source: "Google",
        }));

      if (!reviews.length) return FALLBACK;

      return {
        reviews,
        rating: data.rating,
        total: data.userRatingCount,
        live: true,
      };
    } catch (err) {
      console.error("getGoogleReviews failed", err);
      return FALLBACK;
    }
  },
);