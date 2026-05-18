import SectionHeader from "@/components/common/section-header";
import { SparklesIcon } from "lucide-react";
import Product from "../products/[id]/page";
import ProductSubmitForm from "@/components/products/product-submit-form";

export default function Submit() {
  return (
    <section className="py-20 ">
      <div className="wrapper  flex-col items-center max-w-2xl mx-auto">
        <SectionHeader
          title="Submit Your Project"
          description="Share your creation with the community. Your submission will be reviewed before going live.

"
          icon={SparklesIcon}
        />
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}
