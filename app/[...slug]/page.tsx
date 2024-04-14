import Image from "next/image";
import { redirect } from "next/navigation";

import { Player } from "@/components/player";

import { getTrailBySlug } from "@/lib/actions";

type Params = {
  params: { slug: string[] };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const trail = await getTrailBySlug(slug[0]);
  return {
    title: trail?.description,
  };
}

export default async function Page({ params: { slug } }: Params) {
  const [trailSlug, lessonSlug] = slug;

  const trail = await getTrailBySlug(trailSlug);

  if (!trail) {
    redirect("/");
  }

  const lesson = trail?.lessons.find((l) => l.slug === lessonSlug);

  if (!lesson) {
    redirect(`/${trail?.slug}/${trail?.lessons[0].slug}`);
  }

  return (
    <section className="container flex items-center justify-center pt-6 overflow-hidden sm:pt-8">
      <div className="flex flex-col w-full h-auto max-w-5xl gap-y-6">
        <div className="flex items-center select-none gap-x-2">
          <Image
            src={`/${trail?.avatar}`}
            alt=""
            width={100}
            height={100}
            priority
            className="size-14"
          />
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl">
              {trail?.title}
            </h1>
            <p className="text-sm text-gray-500 sm:text-base">
              {trail.description} Ι {`${lesson.title}`}
            </p>
          </div>
        </div>

        <Player trail={trail} lesson={lesson} lessonSlug={lessonSlug} />
      </div>
    </section>
  );
}
