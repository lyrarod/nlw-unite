//..
"use server ";

import { data } from "@/data";
import { generateSlug } from "./generate-slug";

export async function getTrails() {
  return data.map((trail) => {
    let slug: string = trail.title.toLowerCase();

    switch (slug) {
      case "c#":
        slug = "csharp";
        break;

      case "html+css+js":
        slug = "html-css-js";
        break;

      default:
        slug = generateSlug(slug);
        break;
    }

    return {
      ...trail,
      slug,
      lessons: trail.lessons.map((lesson) => {
        return {
          ...lesson,
          slug: generateSlug(lesson.title),
        };
      }),
    };
  });
}

export async function getTrailBySlug(slug: string) {
  const trails = await getTrails();
  const findTrail = trails.find((trail) => trail.slug === slug);
  return findTrail;
}
