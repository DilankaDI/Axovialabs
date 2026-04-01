import ScrollStory from "./components/ScrollStory";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-bold tracking-tight">
          Welcome
        </h1>
      </section>

      {/* SCROLL STORY */}
      <ScrollStory />

      {/* END */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl">End Section</h1>
      </section>
    </main>
  );
}