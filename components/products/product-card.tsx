import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
  const hasVoted = true;
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px]">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge className="gap-1">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            <div className="flex items-center flex-col gap-1 shrink-0 ">
              <Button
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
                {product.voteCount}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "h-8 w-8 text-primary",
                  hasVoted
                    ? "hover:text-destructive"
                    : "opacity-20 cursor-not-allowed",
                )}
              >
                <ChevronDownIcon className="size-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
