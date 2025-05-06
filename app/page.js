import { Button } from "../components/ui/button";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Genaa AI</h2>
      <Button > subscribe</Button>

      <UserButton />
    </div>
  );
}
