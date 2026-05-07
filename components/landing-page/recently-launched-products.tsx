import { Calendar1Icon, CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

// const RecentlyLaunchedProduct = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: " a toolkit for creating parity products",
//     tags: ["SAAS", "Pricing", "Global"],
//     votes: 615,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "ParityKit",
//     description: " a toolkit for creating parity products",
//     tags: ["SAAS", "Pricing", "Global"],
//     votes: 615,
//     isFeatured: true,
//   },
//   {
//     id: 3,
//     name: "ParityKit",
//     description: " a toolkit for creating parity products",
//     tags: ["SAAS", "Pricing", "Global"],
//     votes: 615,
//     isFeatured: true,
//   },
//   {
//     id: 4,
//     name: "ParityKit",
//     description: " a toolkit for creating parity products",
//     tags: ["SAAS", "Pricing", "Global"],
//     votes: 615,
//     isFeatured: true,
//   },
// ];
const RecentlyLaunchedProduct = [];
export default function RecentlyLaunchedProducts() {
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
