import Image from "next/image";
import { HeroTile, SmallIcon } from "@/components/graphics";
import { Header } from "@/components/header";
import { LandingSections } from "@/components/landing-sections";
type Character = {
  role: string;
  image: "creator" | "teacher" | "writer" | "researcher";
  alt: string;
  decorative?: boolean;
};
const characters: readonly Character[] = [
  {
    role: "Content Teams",
    image: "creator",
    alt: "Cheerful curly-haired creative in a yellow sweater celebrating with both arms raised",
    decorative: true,
  },
  {
    role: "Teachers",
    image: "teacher",
    alt: "Friendly teacher in a coral cardigan holding books and a teaching pointer",
  },
  {
    role: "Writers",
    image: "writer",
    alt: "Thoughtful writer in a yellow sweater looking at a phone",
  },
  {
    role: "Researchers",
    image: "researcher",
    alt: "Smiling researcher in an ivory lab coat holding a blue flask",
  },
  {
    role: "Content Teams",
    image: "creator",
    alt: "Cheerful curly-haired creative in a yellow sweater celebrating with both arms raised",
  },
  {
    role: "Teachers",
    image: "teacher",
    alt: "Friendly teacher in a coral cardigan holding books and a teaching pointer",
    decorative: true,
  },
];
export default function Home() {
  return (
    <div className="site-shell" id="home">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-haze" aria-hidden="true" />
          <div className="hero-content">
            <div className="hello">
              <Image
                src="/brand/verilo-mark.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>HI, I'M VERILO.</span>
            </div>
            <h1 id="hero-title">
              <span className="headline-line">
                I find the AI
                <HeroTile variant="spark" />
              </span>
              <span className="headline-line">
                <HeroTile variant="leaf" />
                hiding in your
              </span>
              <span className="headline-line">
                content.
                <HeroTile variant="orbit" />
              </span>
            </h1>
            <p className="hero-description">
              I check your writing in seconds, spot the robotic bits,
              <br />
              and help you make them feel more human.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#routine">
                Let Verilo Check It
              </a>
              <a className="secondary-action" href="#extension">
                Get Chrome Extension
              </a>
            </div>
          </div>
          <ul className="benefits" aria-label="Designed for your writing">
            <li>
              <SmallIcon name="bolt" />
              Fast check
            </li>
            <li>
              <SmallIcon name="chart" />
              Simple results
            </li>
            <li>
              <SmallIcon name="heart" />
              Built for humans
            </li>
          </ul>
        </section>
        <section
          className="audience"
          aria-label="Made for teachers, writers, researchers, and content teams"
        >
          <div className="audience-track">
            {characters.map((character, index) => (
              <article
                className={`character-card ${index % 2 === 1 ? "card-lowered" : ""}`}
                key={`${character.image}-${index}`}
                aria-hidden={character.decorative || undefined}
              >
                <h2>{character.role}</h2>
                <div className={`character-art character-${character.image}`}>
                  <Image
                    src={`/characters/${character.image}.webp`}
                    alt={character.decorative ? "" : character.alt}
                    fill
                    sizes="(max-width:600px) 190px, (max-width:1100px) 230px, 280px"
                    priority={index >= 1 && index <= 4}
                    quality={90}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
        <LandingSections />
      </main>
    </div>
  );
}
