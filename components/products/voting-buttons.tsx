"use client";
import { ChevronDownIcon, ChevronUpIcon, Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  downvoteProductAction,
  upvoteProductAction,
} from "@/lib/products/product-actions";
import { useOptimistic, useTransition } from "react";

export default function VotingButtons({
  hasVoted,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted: boolean;
  voteCount: number;
  productId: number;
}) {
  //because updating vote count is taking too mich time we will use useOptimistic
  const [optimisticVotecount, setOptimisticVotecount] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(0, currentCount + change),
  );
  const [isPending, startTransition] = useTransition();
  const handleUpvote = async () => {
    startTransition(async () => {
      setOptimisticVotecount(1); // immediately update the UI
      const result = await upvoteProductAction(productId);
      console.log(result, "upvote working");
    });
  };
  const handleDownvote = async () => {
    startTransition(async () => {
      setOptimisticVotecount(-1); // immediately update the UI
      const result = await downvoteProductAction(productId);
      console.log(result, "downvote working");
    });
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="flex items-center flex-col gap-1 shrink-0 "
    >
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/10 hover:text-primary",
        )}
      >
        <ChevronUpIcon className="size-4" />
      </Button>
      <span className="text-sm font-semibold text-foreground transition-colors">
        {optimisticVotecount}
      </span>
      <Button
        disabled={isPending}
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted ? "hover:text-destructive" : "opacity-20 cursor-not-allowed",
        )}
      >
        <ChevronDownIcon className="size-4" />
      </Button>
    </div>
  );
}
