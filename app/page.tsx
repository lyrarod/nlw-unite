import { getTrails } from "@/lib/actions";
import { CardTrail } from "@/components/card-trail";

export default async function Home() {
  const trails = await getTrails();

  return (
    <section className="container grid grid-cols-1 gap-6 py-8 overflow-hidden xl:grid-cols-3 md:grid-cols-2 place-content-center">
      {trails?.map((trail) => {
        return <CardTrail key={trail.id} trail={trail} />;
      })}
    </section>
  );
}
