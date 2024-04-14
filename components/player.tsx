"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { ButtonLesson } from "./button-lesson";
import ReactPlayer from "react-player/youtube";

import { Lesson, Trail } from "@/data";

type Props = {
  trail: Trail;
  lesson: Lesson;
  lessonSlug: string;
};

export function Player({ trail, lesson, lessonSlug }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = async (
    trail: string | undefined,
    lesson: string | undefined
  ): Promise<void> => {
    //...
    setIsLoading(true);
    let timer: NodeJS.Timeout;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push(`/${trail}/${lesson}`);

    timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    clearTimeout(timer);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="player-wrapper">
        {isLoading ? (
          <div className="absolute flex items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 shadow top-1/2 left-1/2 bg-secondary">
            <Loader2 className="animate-spin md:size-12 size-8 text-primary" />
          </div>
        ) : (
          <>
            {isClient ? (
              <ReactPlayer
                url={lesson.video}
                width="100%"
                height="100%"
                controls
                className="flex items-center justify-center shadow react-player bg-secondary"
                light
                fallback={
                  <Loader2 className="animate-spin md:size-12 size-8 text-primary" />
                }
              />
            ) : null}
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 md:flex">
        {trail?.lessons.map((lesson, i) => {
          const isDisabled = lesson.slug === lessonSlug;

          return (
            <ButtonLesson
              key={i}
              title={lesson.title}
              isDisabled={isDisabled || isLoading}
              handleClick={() => handleClick(trail.slug, lesson.slug)}
            />
          );
        })}
      </div>
    </div>
  );
}
