import { Calendar1Icon, CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { get } from "http";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const RecentlyLaunchedProduct = await getRecentlyLaunchedProducts();
  return (
    <section className="py-20 ">
      <div className="wrapper space-y-8">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {RecentlyLaunchedProduct.length > 0 ? (
          <div className="grid-wrapper">
            {RecentlyLaunchedProduct.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No recently launched products found.Check back later!"
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
