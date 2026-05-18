import {
  HomeIcon,
  LoaderIcon,
  SparkleIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Show,
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Suspense } from "react";

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
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 flex items-center gap-2 px-3 py-2"
            >
              <HomeIcon className="size-5 " />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 flex items-center gap-2 px-3 py-2"
            >
              <HomeIcon className="size-5 " />
              <span>Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size-4 animate-spin" />
                </div>
              }
            >
              <Show when="signed-out">
                <SignInButton mode="modal" />
                <SignUpButton mode="modal">
                  <Button> Sign Up</Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Button asChild>
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
                <UserButton />
              </Show>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
