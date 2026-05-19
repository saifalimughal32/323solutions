import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import {
  CalendarIcon,
  CheckCircle2,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Clock,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { SERVICES, BRAND } from "@/lib/site/data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().min(1, "Choose a service"),
  address: z.string().trim().min(4, "Address is required").max(160),
  date: z.date().optional(),
  timeWindow: z.enum(["Morning", "Afternoon", "Evening", "Any time"]).optional(),
  notes: z.string().max(800).optional(),
});

type FormValues = z.infer<typeof schema>;

const TIME_WINDOWS = ["Morning", "Afternoon", "Evening", "Any time"] as const;

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      address: "",
      notes: "",
    },
  });

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Free Quote Request — ${values.service}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `Service: ${values.service}`,
        `Address: ${values.address}`,
        `Preferred Date: ${values.date ? format(values.date, "PPP") : "Flexible"}`,
        `Preferred Time: ${values.timeWindow ?? "Any time"}`,
        "",
        "Project notes:",
        values.notes || "(none)",
      ].join("\n"),
    );
    // Open the user's mail client with a prefilled message to the business.
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-3xl shadow-card p-8 md:p-10 text-center ring-1 ring-brand-navy/10">
        <div className="mx-auto size-14 rounded-full bg-brand-navy/10 flex items-center justify-center">
          <CheckCircle2 className="size-7 text-brand-navy" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-brand-navy">Quote Request Sent</h3>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          Thanks! Your email client should open with your quote request prefilled. We'll respond
          within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-brand-navy underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-card rounded-3xl shadow-card p-6 md:p-8 space-y-5 ring-1 ring-brand-navy/10"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-navy text-white">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-extrabold text-brand-navy leading-tight">
              Free Quote Request
            </h3>
            <p className="text-xs text-muted-foreground">No obligation. 24-hour response.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-navy">
                  <User className="inline size-3.5 mr-1.5 -mt-0.5" /> Full name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-navy">
                  <Phone className="inline size-3.5 mr-1.5 -mt-0.5" /> Phone
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(616) 555-0123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-navy">
                <Mail className="inline size-3.5 mr-1.5 -mt-0.5" /> Email
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-navy">
                <MapPin className="inline size-3.5 mr-1.5 -mt-0.5" /> Property address
              </FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, Grand Rapids, MI" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-navy">
                <Sparkles className="inline size-3.5 mr-1.5 -mt-0.5" /> Service needed
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Multiple services">Multiple services</SelectItem>
                  <SelectItem value="Not sure yet">Not sure yet — help me decide</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-brand-navy">
                  <CalendarIcon className="inline size-3.5 mr-1.5 -mt-0.5" /> Preferred date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "h-11 justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {field.value ? format(field.value, "PPP") : "Pick a date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeWindow"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-navy">
                  <Clock className="inline size-3.5 mr-1.5 -mt-0.5" /> Preferred time
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick a window" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TIME_WINDOWS.map((w) => (
                      <SelectItem key={w} value={w}>
                        {w}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-navy">Project details (optional)</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Square footage, number of stories, problem spots, gate codes, anything else helpful..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy text-white px-6 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition disabled:opacity-60"
        >
          Request My Free Quote <Send className="size-4" />
        </button>
        <p className="text-xs text-muted-foreground text-center">
          We respond within 24 hours. No spam, ever.
        </p>
      </form>
    </Form>
  );
}