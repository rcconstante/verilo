import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Feather,
  BookOpen,
  Users,
} from "lucide-react";
import { FAQ } from "./faq";
const features = [
  {
    title: "Spotting robotic writing",
    description:
      "Look closer at copy that feels generic, repetitive, or a little too polished.",
    art: "search",
  },
  {
    title: "Keeping things simple",
    description:
      "A clear signal to help you read between the lines. Less noise, more perspective.",
    art: "chart",
  },
  {
    title: "Finding awkward bits",
    description:
      "Notice where a sentence starts losing its natural rhythm and voice.",
    art: "highlight",
  },
  {
    title: "Helping you polish it",
    description:
      "Keep the good stuff. Make room for writing that sounds a little more like you.",
    art: "polish",
  },
];
function BotArt({ variant = "search" }: { variant?: string }) {
  return (
    <div className={`bot-art bot-${variant}`}>
      <Image
        src="/illustrations/verilo-bot.webp"
        alt="Friendly lime-green Verilo mascot examining a page with a magnifying glass"
        fill
        sizes="(max-width:700px) 80vw, 500px"
        quality={90}
      />
      {variant === "chart" && (
        <div className="art-chart" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      )}
      {variant === "highlight" && (
        <span className="art-spark" aria-hidden="true">
          ✦
        </span>
      )}
      {variant === "polish" && (
        <span className="art-check" aria-hidden="true">
          <Check size={30} />
        </span>
      )}
    </div>
  );
}
export function LandingSections() {
  return (
    <>
      <section
        className="product-section content-panel"
        id="product"
        aria-labelledby="product-title"
      >
        <div className="product-intro">
          <div>
            <span className="section-tag">MEET VERILO</span>
            <h2 id="product-title">
              A little bot with
              <br />
              one good job.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Find the stuff that sounds like a robot wrote it. A clearer look
              at your content, the parts that feel unnatural, and the voice that
              makes it yours.
            </p>
            <p>“You wrote the good stuff. Let’s find the robotic bits.”</p>
          </div>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div
              className={`feature-row ${index % 2 ? "feature-reversed" : ""}`}
              key={feature.title}
            >
              <div className="feature-copy">
                <span className="step-number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <BotArt variant={feature.art} />
            </div>
          ))}
        </div>
      </section>
      <section
        className="routine-section content-panel"
        id="routine"
        aria-labelledby="routine-title"
      >
        <span className="section-tag">VERILO’S ROUTINE</span>
        <h2 id="routine-title">
          A little perspective.
          <br />
          That’s all you need.
        </h2>
        <div className="routine-arc" aria-hidden="true">
          <ArrowDown />
        </div>
        <div className="routine-grid">
          {[
            {
              name: "Read",
              title: "Let me have a look.",
              text: "Start with the words you want to take a closer look at.",
            },
            {
              name: "Spot",
              title: "Something feels robotic.",
              text: "Notice generic phrasing and places where your voice gets lost.",
            },
            {
              name: "Polish",
              title: "Let’s make this sound human.",
              text: "Review with care. Keep the changes that feel right to you.",
            },
          ].map((item, index) => (
            <article className="routine-step" key={item.name}>
              <div className="routine-orb">
                <BotArt variant={index === 2 ? "polish" : "search"} />
                <span>{item.name}</span>
              </div>
              <span className="step-number">0{index + 1}</span>
              <h3>“{item.title}”</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="voices-section" aria-labelledby="voices-title">
        <span className="section-tag">HUMAN FIRST. ALWAYS.</span>
        <h2 id="voices-title">
          For the humans
          <br />
          behind the words.
        </h2>
        <p className="section-description">
          Different work. The same wish to sound like yourself.
        </p>
        <div className="voices-grid">
          {[
            {
              icon: BookOpen,
              role: "For teachers",
              title: "A conversation starter, never a verdict.",
              text: "Bring curiosity to the page. Make room for context, original thinking, and a student’s own voice.",
            },
            {
              icon: Feather,
              role: "For writers",
              title: "Your voice is the whole point.",
              text: "Find the phrases that could belong to anyone, and turn them into something only you would say.",
            },
            {
              icon: Users,
              role: "For content teams",
              title: "A second look before you hit publish.",
              text: "Keep a shared standard for clear, thoughtful copy without losing the people behind the brand.",
            },
          ].map((item) => (
            <article className="voice-card" key={item.role}>
              <item.icon size={30} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="closing-section"
        id="extension"
        aria-labelledby="closing-title"
      >
        <div className="closing-copy">
          <span className="section-tag">NO JUDGMENT. JUST A NUDGE.</span>
          <h2 id="closing-title">
            A small check before a<br />
            big decision.
          </h2>
          <p>
            Whether you’re reviewing a page, polishing a story, or checking a
            brief,
            <br />a little perspective makes room for your own judgment.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#routine">
              Explore the workflow
            </a>
            <a className="secondary-action" href="#chrome">
              About the browser concept
            </a>
          </div>
        </div>
        <div className="desk-art">
          <Image
            src="/illustrations/verilo-desk.webp"
            alt="Curly-haired editor at a wooden desk with a laptop, notebook, plants, and magnifying glass"
            fill
            sizes="(max-width:700px) 100vw, 1100px"
            quality={90}
          />
        </div>
      </section>
      <FAQ />
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          <Image src="/brand/verilo-mark.svg" alt="" width={32} height={32} />
          <span>Verilo</span>
        </a>
        <p>A little more human. A little more you.</p>
        <nav aria-label="Footer navigation">
          <a href="#product">Meet Verilo</a>
          <a href="#faq">Questions?</a>
          <a href="#home">
            Back to top <ArrowUpRight size={15} />
          </a>
        </nav>
        <span className="footer-note">
          A writing companion concept. Made for humans.
        </span>
      </footer>
    </>
  );
}
