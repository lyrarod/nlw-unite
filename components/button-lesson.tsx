//...

import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  isDisabled: boolean;
  handleClick: () => Promise<void>;
};

export function ButtonLesson({ title, isDisabled, handleClick }: Props) {
  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}
      className={"w-full select-none"}
    >
      <Video className="mr-2" /> {title}
    </Button>
  );
}
