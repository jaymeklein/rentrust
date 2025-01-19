import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from '../components/ToggleTheme';

export default function Home() {
  return (
    <div>
      <ToggleTheme></ToggleTheme>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline">
            Sign In
          </Button>
        </SignInButton>

      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
