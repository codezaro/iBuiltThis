import { SparkleIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="justify-center size-8 rounded-lg items-center bg-primary flex">
        <SparkleIcon className="text-indigo-50 size-4 " />
      </div>
      <span className="font-bold text-lg ">
        i<span className="text-primary">Built</span>
        This
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header>
      <Logo />
    </header>
  );
}
