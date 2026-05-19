import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews.functions";

const PER_PAGE = 3;
const ROTATE_MS = 7000;
const FALLBACK_PHOTOS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
];

function fallbackPhotoFor(name: string) {
  const index = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % FALLBACK_PHOTOS.length;
  return FALLBACK_PHOTOS[index];
}

export function GoogleReviewsCarousel() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 30,
  });

  const reviews: GoogleReview[] = data?.reviews ?? [];
  const pageCount = Math.max(1, Math.ceil(reviews.length / PER_PAGE));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pageCount), ROTATE_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  const visible = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  // pad with placeholders if not enough on last page
  while (visible.length < PER_PAGE && reviews.length >= PER_PAGE) {
    visible.push(reviews[visible.length % reviews.length]);
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-3 gap-3"
        >
          {visible.map((r, i) => (
            <ReviewCard key={`${page}-${i}`} review={r} />
          ))}
        </motion.div>
      </AnimatePresence>

      {pageCount > 1 && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
            className="flex size-8 items-center justify-center rounded-full bg-white/90 text-brand-navy ring-1 ring-brand-navy/10 hover:bg-white shadow-soft transition"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-brand-gold" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % pageCount)}
            className="flex size-8 items-center justify-center rounded-full bg-white/90 text-brand-navy ring-1 ring-brand-navy/10 hover:bg-white shadow-soft transition"
            aria-label="Next reviews"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-elevated ring-1 ring-brand-navy/5 flex flex-col h-full">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-3.5 ${
              i < Math.round(review.rating)
                ? "fill-brand-gold stroke-brand-gold"
                : "stroke-brand-navy/20"
            }`}
          />
        ))}
        <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-brand-navy/45">
          {review.source}
        </span>
      </div>
      <Quote className="mt-2 size-3.5 text-brand-navy/30" />
      <p className="mt-1 text-[12.5px] text-brand-navy/80 leading-relaxed line-clamp-4 flex-1">
        {review.text}
      </p>
      <div className="mt-3 flex items-center gap-2.5">
        <img
          src={review.photo ?? fallbackPhotoFor(review.author)}
          alt={review.author}
          referrerPolicy="no-referrer"
          className="size-8 rounded-full object-cover ring-1 ring-brand-navy/10"
          loading="lazy"
          width={64}
          height={64}
        />
        <div className="leading-tight">
          <p className="text-[12.5px] font-bold text-brand-navy">{review.author}</p>
          <p className="text-[11px] text-brand-navy/55">
            {review.relativeTime ?? review.location ?? "Verified review"}
          </p>
        </div>
      </div>
    </article>
  );
}
