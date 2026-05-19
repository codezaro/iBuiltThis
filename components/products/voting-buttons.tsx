"use client";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  downvoteProductAction,
  upvoteProductAction,
} from "@/lib/products/product-actions";

export default function VotingButtons({
  hasVoted,
  voteCount,
  productId,
}: {
  hasVoted: boolean;
  voteCount: number;
  productId: number;
}) {
  const handleUpvote = async () => {
    const result = await upvoteProductAction(productId);
    console.log(result, "upvote working");
  };
  const handleDownvote = async () => {
    const result = await downvoteProductAction(productId);
    console.log(result, "downvote working");
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
        {voteCount}
      </span>
      <Button
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
