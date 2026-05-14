import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import ProductCard from "../products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
  const FeaturedProduct = await getFeaturedProducts();
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
