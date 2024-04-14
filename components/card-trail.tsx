import Link from "next/link";
import { Trail } from "@/data";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = {
  trail: Trail;
};

export function CardTrail({
  trail: { title, description, content, avatar, slug, lessons },
}: Props) {
  return (
    <Link href={`/${slug}/${lessons?.[0].slug}`} className="flex">
      <Card className="flex flex-col justify-between w-full transition cursor-pointer select-none hover:scale-105">
        <CardHeader>
          <div className="flex items-center gap-x-2">
            <Avatar className="size-12">
              <AvatarImage src={avatar} />
              <AvatarFallback>{title.at(0)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-y-1">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{content}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="link" className="flex gap-x-2">
            Ver trilha <ArrowRight className="size-5" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
