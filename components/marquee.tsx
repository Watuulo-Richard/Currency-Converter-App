import { Marquee } from "./magicui/marquee";

const reviews = [
    "💰 Convert Currencies 🌍 Instantly with ease!",
    "🔄 Exchange rates 📊 at your fingertips!",
    "Sponsored by Desishub Community.",
    "💱 Fast ⚡, accurate 🎯, and reliable!",
    "Built by Watuulo Richard",
    "🚀 No more ❌ guesswork! Convert currencies 🔄 with confidence using Watuulo Richard’s efficient tool. Sponsored by Desishub Community.",
    "🌎 Global exchange 💱, local precision 🎯",
    "🔢 Currency conversion 💰 made easy!"
      
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover vertical className="[--duration:8s] h-7">
        {firstRow.map((review, i) => (
            <div key={i} className="">
              <p className="text-sm">{review}</p>
            </div>
        ))} 
      </Marquee>
    </div>
  );
}
