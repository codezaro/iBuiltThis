import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant={"outline"}
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 " />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-muted-foreground ">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const StatsData = [
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared",
  },
  {
    icon: UsersIcon,
    value: "10K+",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "50K+",
    label: "Monthly Visitors",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b  overflow-hidden from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center ">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl ">
            Share What You've Built, Discover What's Launching
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl mb-10 max-w-2xl leading-relaxed ">
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild className="text-base px-8 shadow-lg" size={"lg"}>
              <Link href="/submit">
                <SparklesIcon className="size-5" />
                Share your project
              </Link>
            </Button>
            <Button
              asChild
              className="text-base px-8 shadow-lg"
              variant={"secondary"}
              size={"lg"}
            >
              <Link href="/explore">
                Explore projects <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {StatsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
