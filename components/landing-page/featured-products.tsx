import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import ProductCard from "../products/product-card";

const FeaturedProduct = [
  {
    id: 1,
    name: "ParityKit",
    description: " a toolkit for creating parity products",
    tags: ["SAAS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "ParityKit",
    description: " a toolkit for creating parity products",
    tags: ["SAAS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 3,
    name: "ParityKit",
    description: " a toolkit for creating parity products",
    tags: ["SAAS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 4,
    name: "ParityKit",
    description: " a toolkit for creating parity products",
    tags: ["SAAS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Check out our most popular products today!"
          />
          <Button asChild variant="outline" className="sm:flex hidden">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {FeaturedProduct.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
