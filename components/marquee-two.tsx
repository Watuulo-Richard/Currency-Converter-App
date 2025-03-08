import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "UGANDA",
    body: "1 UG = 0.00027$",
    img: "/flag-uganda.jpg",
  },
  {
    name: "KENYA",
    body: "1 KE = 0.0077$",
    img: "/flag-kenya.jpg",
  },
  {
    name: "TANZANIA",
    body: "1 TZ = 0.00038$",
    img: "/flag-tanzania.jpg",
  },
  {
    name: "RWANDA",
    body: "1 RW = 0.00071$",
    img: "/flag-rwanda.jpg",
  },
  {
    name: "BURUNDI",
    body: "1 BI = 0.00034$",
    img: "flag-burundi.jpg",
  },
  {
    name: "DRC",
    body: "1 DRC = 0.00035$",
    img: "flag-democratic-republic-congo.jpg",
  },
];

const firstRow = reviews;
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center">
        <div className="w-1/2 flex flex-row">
          <div className="w-60 h-20">
            <img className="rounded-md h-full w-full" alt="" src={img} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-medium dark:text-white/40">{name}</p>
            <blockquote className="mt-2 text-sm">{body}</blockquote> 
          </div>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s] w-96">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
