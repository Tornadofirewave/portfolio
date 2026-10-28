import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  mediaImage: string;
  videoUrl: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: "flamebound",
    title: "Flamebound",
    role: "Game Designer · Programmer · UI/UX",
    description:
      "A story-driven RPG combining turn-based combat with real-time parrying and rhythm-inspired challenges. I work across gameplay programming, interface design, world building, and visual effects.",
    image:
      "https://www.image2url.com/r2/default/images/1792389770042-0967b1d9-4f28-4169-b49a-f28c1fff9f05.png",
    mediaImage: "",
    videoUrl:
      "https://www.image2url.com/r2/default/videos/1792390510382-8ccec2ea-ba2d-4194-8991-87c32ce24a74.mp4",
    accent: "#168BFF",
  },
  {
    id: "glass-soldier",
    title: "You're Going To Be Famous!",
    role: "Software Engineer",
    description:
      "Developed a physics-based baseball minigame inside an existing turn-based combat system, including timing-based scoring and randomized pitch behaviors.",
    image:
      "https://www.image2url.com/r2/default/images/1792389896341-9fd90646-993c-4e06-9a74-0412dff8eff1.png",
    mediaImage:
      "https://www.image2url.com/r2/default/images/1792391240532-36937af7-4886-40dd-a8e5-ec413126731c.png",
    videoUrl: "",
    accent: "#36A36B",
  },
  {
    id: "blink-paralysis",
    title: "Blink Paralysis",
    role: "Game Developer",
    description:
      "Developed and led a team of six to create a multi-phase Five Nights at Freddy's-esque anomaly game within a 48-hour game jam, from conceptualization to finalization.",
    image:
      "https://www.image2url.com/r2/default/images/1792390032214-bedbd6cc-3f39-42cb-976c-1fa72f0a4716.png",
    mediaImage: "",
    videoUrl: "",
    accent: "#D96B43",
  },
];

const shortcuts = [
  {
    label: "GitHub",
    icon: "github",
    url: "https://github.com/Tornadofirewave",
    action: "link",
  },
  {
    label: "Email",
    icon: "mail",
    url: "lawrenceminle@gmail.com",
    action: "copy",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/lawrence-le-2852a931b/",
    action: "link",
  },
];

function ShortcutIcon({ type }: { type: string }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M9 19c-4.3 1.4-4.3-2.4-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.4 14 4a13 13 0 0 0-7 0C3.5 1.4 2.3 1.7 2.3 1.7a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 8.9c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(2 0) scale(.85)"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 8v11M5 5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 9v10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="5" cy="5" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  if (theme === "light") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.6 8.6 0 1 0 20.2 15.4Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function ArrowIcon({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        transform:
          direction === "left" ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MediaPlaceholder({ title }: { title: string }) {
  return (
    <div className="media-placeholder">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="9" r="1.5" fill="currentColor" />
        <path
          d="m4 18 6-6 4 4 3-3 3 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
      <p>
        Add a screenshot or video for
        <br />
        {title}
      </p>
    </div>
  );
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notice, setNotice] = useState("");

  const activeProject = projects[activeIndex];

  function moveCarousel(step: number) {
    setActiveIndex(
      (current) =>
        (current + step + projects.length) % projects.length,
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowLeft") moveCarousel(-1);
      if (event.key === "ArrowRight") moveCarousel(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  async function handleShortcut(
    shortcut: (typeof shortcuts)[number],
  ) {
    if (shortcut.action !== "copy") return;

    try {
      await navigator.clipboard.writeText(shortcut.url);
      setNotice("Email copied!");
    } catch {
      setNotice("Copy unavailable. Email: " + shortcut.url);
    }

    window.setTimeout(() => setNotice(""), 2500);
  }

  function getProjectAtOffset(offset: number) {
    return projects[
      (activeIndex + offset + projects.length) % projects.length
    ];
  }

  // Show three unique cards with three projects.
  // Automatically expand to five unique cards as the project list grows.
  const radius = Math.min(
    2,
    Math.floor((projects.length - 1) / 2),
  );
  const offsets = Array.from(
    { length: radius * 2 + 1 },
    (_, index) => index - radius,
  );

  return (
    <main className="portfolio-root" data-theme={theme}>
      <style>{`
        .portfolio-root {
          --ink: #000000;
          --paper: #ffffff;
          --muted: #777777;
          --line: #222222;
          --surface: #ffffff;
          --surface-secondary: #eeeeee;
          --body-text: #333333;
          background: var(--paper);
          color: var(--ink);
          width: 100%;
          min-height: 100%;
          font-family: Inter, Arial, sans-serif;
          box-sizing: border-box;
          overflow: hidden;
          transition: background-color 220ms ease, color 220ms ease;
        }

        .portfolio-root[data-theme="dark"] {
          --ink: #f2f2f2;
          --paper: #111111;
          --muted: #a0a0a0;
          --line: #666666;
          --surface: #111111;
          --surface-secondary: #222222;
          --body-text: #d0d0d0;
        }

        .portfolio-root *,
        .portfolio-root *::before,
        .portfolio-root *::after {
          box-sizing: border-box;
        }

        .portfolio-root button,
        .portfolio-root a {
          font: inherit;
        }

        .portfolio-root button:focus-visible,
        .portfolio-root a:focus-visible {
          outline: 2px solid var(--ink);
          outline-offset: 4px;
        }

        /* Hero */

        .portfolio-root .hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 54px 32px 46px;
          text-align: center;
        }

        .portfolio-root .hero-name {
          margin: 0;
          font-size: clamp(32px, 3.5vw, 46px);
          line-height: 1.15;
          font-weight: 500;
          letter-spacing: -1.6px;
          animation: portfolio-rise 650ms cubic-bezier(.22, 1, .36, 1) both;
        }

        .portfolio-root .hero-blurb {
          max-width: 620px;
          margin: 12px 0 0;
          color: var(--body-text);
          font-size: 18px;
          line-height: 1.6;
          animation: portfolio-rise 650ms cubic-bezier(.22, 1, .36, 1) 140ms both;
        }

        /* Theme toggle */

        .portfolio-root .theme-toggle {
          position: absolute;
          top: 22px;
          right: 28px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--surface);
          color: var(--ink);
          cursor: pointer;
          transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
        }

        .portfolio-root .theme-toggle:hover {
          background: var(--ink);
          color: var(--paper);
          transform: translateY(-2px);
        }

        .portfolio-root .theme-toggle svg {
          display: block;
          width: 20px;
          height: 20px;
        }

        /* Social shortcuts */

        .portfolio-root .shortcuts {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
          animation: portfolio-rise 650ms cubic-bezier(.22, 1, .36, 1) 260ms both;
        }

        .portfolio-root .shortcut {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 42px;
          padding: 0 14px;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--surface);
          color: var(--ink);
          text-decoration: none;
          font-size: 13px;
          cursor: pointer;
          transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
        }

        .portfolio-root .shortcut:hover {
          background: var(--ink);
          color: var(--paper);
          transform: translateY(-2px);
        }

        .portfolio-root .shortcut svg {
          flex-shrink: 0;
          width: 17px;
          height: 17px;
        }

        .portfolio-root .copy-notice {
          min-height: 15px;
          margin-top: 10px;
          color: var(--muted);
          font-size: 12px;
        }

        /* Carousel */


        /* Carousel */

        .portfolio-root .projects-section {
          padding: 30px clamp(24px, 4vw, 64px) 30px;
          animation: portfolio-rise 700ms cubic-bezier(.22, 1, .36, 1) 300ms both;
        }

        .portfolio-root .carousel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .portfolio-root .carousel-track {
          position: relative;
          width: 100%;
          max-width: 1240px;
          height: clamp(220px, 25vw, 320px);
          margin-inline: auto;
          isolation: isolate;
        }

        .portfolio-root .project-card {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 27%;
          height: 76%;
          padding: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--surface-secondary);
          color: var(--ink);
          cursor: pointer;
          transform-origin: center center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition:
            transform 420ms cubic-bezier(.22, 1, .36, 1),
            opacity 420ms ease,
            filter 420ms ease,
            box-shadow 420ms ease;
          will-change: transform, opacity;
        }

        .portfolio-root .project-card[data-position="center"] {
          z-index: 3;
          opacity: 1;
          filter: none;
          transform: translate3d(-50%, -50%, 0) scale(1);
          box-shadow: 0 0 0 1px var(--ink);
          pointer-events: auto;
        }

        .portfolio-root .project-card[data-position="left"] {
          z-index: 2;
          opacity: .6;
          filter: brightness(.9);
          transform: translate3d(-150%, -50%, 0) scale(.84);
          box-shadow: none;
        }

        .portfolio-root .project-card[data-position="right"] {
          z-index: 2;
          opacity: .6;
          filter: brightness(.9);
          transform: translate3d(50%, -50%, 0) scale(.84);
          box-shadow: none;
        }

        .portfolio-root .project-card[data-position="far-left"] {
          z-index: 1;
          opacity: .25;
          filter: brightness(.8);
          transform: translate3d(-245%, -50%, 0) scale(.68);
          box-shadow: none;
        }

        .portfolio-root .project-card[data-position="far-right"] {
          z-index: 1;
          opacity: .25;
          filter: brightness(.8);
          transform: translate3d(145%, -50%, 0) scale(.68);
          box-shadow: none;
        }

        .portfolio-root .project-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: var(--surface-secondary);
          background-position: center;
          background-size: cover;
        }

        .portfolio-root .project-art::before {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 35%,
            rgba(0, 0, 0, .06)
          );
          content: "";
          pointer-events: none;
        }

        .portfolio-root .project-art-title {
          position: relative;
          z-index: 1;
          padding: 12px;
          text-align: center;
          font-size: clamp(17px, 2.3vw, 29px);
          line-height: 1.2;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .portfolio-root .arrow-button {
          position: absolute;
          top: 50%;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--surface);
          color: var(--ink);
          cursor: pointer;
          transform: translateY(-50%);
          transition:
            background-color 180ms ease,
            color 180ms ease;
        }

        .portfolio-root .arrow-button:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .portfolio-root .arrow-button svg {
          width: 21px;
          height: 21px;
        }

        .portfolio-root .arrow-button.previous {
          left: 0;
        }

        .portfolio-root .arrow-button.next {
          right: 0;
        }

        .portfolio-root .carousel-caption {
          margin-top: 16px;
          color: var(--muted);
          text-align: center;
          font-size: 12px;
        }

        /* Project details */

        .portfolio-root .project-details {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: start;
          gap: clamp(28px, 4vw, 64px);
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 36px clamp(28px, 5vw, 80px) 64px;
        }

        .portfolio-root .details-copy {
          min-width: 0;
          animation: portfolio-details-in 350ms cubic-bezier(.22, 1, .36, 1) both;
        }

        .portfolio-root .project-role {
          margin: 0 0 22px;
          color: var(--ink);
          font-size: clamp(22px, 2.3vw, 30px);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -.5px;
        }

        .portfolio-root .project-description {
          max-width: 560px;
          margin: 0;
          color: var(--body-text);
          font-size: 16px;
          line-height: 1.8;
          white-space: pre-line;
        }

        .portfolio-root .project-index {
          margin-top: 24px;
          color: var(--muted);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .portfolio-root .project-index strong {
          color: var(--ink);
          font-weight: 500;
        }

        /* Media */

        .portfolio-root .media-frame {
          position: relative;
          width: 100%;
          min-width: 0;
          min-height: 220px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          border: 1px solid var(--line);
          background: var(--surface-secondary);
          animation: portfolio-details-in 400ms cubic-bezier(.22, 1, .36, 1) 60ms both;
        }

        .portfolio-root .media-frame img,
        .portfolio-root .media-frame video,
        .portfolio-root .media-frame iframe {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          object-fit: contain;
        }

        .portfolio-root .media-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          height: 100%;
          min-height: 220px;
          padding: 24px;
          color: var(--muted);
          text-align: center;
        }

        .portfolio-root .media-placeholder svg {
          width: 34px;
          height: 34px;
        }

        .portfolio-root .media-placeholder p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Animations */

        @keyframes portfolio-rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes portfolio-details-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Large desktop */

        @media (min-width: 1500px) {
          .portfolio-root .projects-section {
            padding-right: 72px;
            padding-left: 72px;
          }

          .portfolio-root .carousel-track {
            max-width: 1400px;
            height: 340px;
          }

          .portfolio-root .project-card {
            width: 25%;
          }

          .portfolio-root .project-details {
            max-width: 1520px;
          }
        }

        /* Tablet */

        @media (max-width: 900px) {
          .portfolio-root .hero {
            padding: 48px 24px 36px;
          }

          .portfolio-root .theme-toggle {
            top: 16px;
            right: 18px;
          }

          .portfolio-root .projects-section {
            padding: 26px 32px 24px;
          }

          .portfolio-root .carousel-track {
            height: 250px;
          }

          .portfolio-root .project-card {
            width: 32%;
          }

          .portfolio-root .project-card[data-position="left"] {
            transform: translate(-135%, -50%) scale(.82);
          }

          .portfolio-root .project-card[data-position="right"] {
            transform: translate(35%, -50%) scale(.82);
          }

          .portfolio-root .project-card[data-position="far-left"] {
            transform: translate(-220%, -50%) scale(.65);
          }

          .portfolio-root .project-card[data-position="far-right"] {
            transform: translate(120%, -50%) scale(.65);
          }

          .portfolio-root .project-details {
            gap: 28px;
            padding: 32px 5% 48px;
          }

          .portfolio-root .project-description {
            font-size: 15px;
          }
        }

        /* Mobile */

        @media (max-width: 600px) {
          .portfolio-root .hero {
            padding: 64px 20px 30px;
          }

          .portfolio-root .theme-toggle {
            top: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
          }

          .portfolio-root .theme-toggle svg {
            width: 18px;
            height: 18px;
          }

          .portfolio-root .hero-name {
            font-size: 32px;
            letter-spacing: -1px;
          }

          .portfolio-root .hero-blurb {
            margin-top: 10px;
            font-size: 16px;
            line-height: 1.6;
          }

          .portfolio-root .shortcuts {
            gap: 7px;
            margin-top: 22px;
          }

          .portfolio-root .shortcut {
            gap: 7px;
            min-height: 39px;
            padding: 0 10px;
            font-size: 12px;
          }

          .portfolio-root .shortcut svg {
            width: 15px;
            height: 15px;
          }

          .portfolio-root .projects-section {
            padding: 24px 16px 24px;
          }

          .portfolio-root .carousel-track {
            height: 220px;
          }

          .portfolio-root .project-card {
            width: 67%;
            height: 78%;
          }

          .portfolio-root .project-card[data-position="left"] {
            opacity: .28;
            transform: translate(-120%, -50%) scale(.78);
          }

          .portfolio-root .project-card[data-position="right"] {
            opacity: .28;
            transform: translate(20%, -50%) scale(.78);
          }

          .portfolio-root .project-card[data-position="far-left"],
          .portfolio-root .project-card[data-position="far-right"] {
            opacity: 0;
            pointer-events: none;
          }

          .portfolio-root .project-art-title {
            font-size: 21px;
          }

          .portfolio-root .arrow-button {
            width: 34px;
            height: 38px;
          }

          .portfolio-root .arrow-button svg {
            width: 18px;
            height: 18px;
          }

          .portfolio-root .carousel-caption {
            margin-top: 12px;
          }

          .portfolio-root .project-details {
            grid-template-columns: minmax(0, 1fr);
            gap: 26px;
            padding: 28px 20px 44px;
          }

          .portfolio-root .project-role {
            margin-bottom: 16px;
            font-size: 24px;
          }

          .portfolio-root .project-description {
            font-size: 15px;
            line-height: 1.75;
          }

          .portfolio-root .media-frame {
            min-height: 180px;
            aspect-ratio: 16 / 10;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-root *,
          .portfolio-root *::before,
          .portfolio-root *::after {
            animation-duration: .01ms !important;
            animation-delay: 0ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <section className="hero">
        <button
          type="button"
          className="theme-toggle"
          onClick={() =>
            setTheme((current) =>
              current === "light" ? "dark" : "light",
            )
          }
          aria-label={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          title={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
        >
          <ThemeIcon theme={theme} />
        </button>

        <h1 className="hero-name">Lawrence Le</h1>
        <p className="hero-blurb">
          Waiting for something to happen?
        </p>

        <nav className="shortcuts" aria-label="Social links">
          {shortcuts.map((shortcut) =>
            shortcut.action === "copy" ? (
              <button
                key={shortcut.label}
                type="button"
                className="shortcut"
                onClick={() => handleShortcut(shortcut)}
                aria-label="Copy email address"
              >
                <ShortcutIcon type={shortcut.icon} />
                <span>{shortcut.label}</span>
              </button>
            ) : (
              <a
                key={shortcut.label}
                className="shortcut"
                href={shortcut.url}
                target="_blank"
                rel="noreferrer"
              >
                <ShortcutIcon type={shortcut.icon} />
                <span>{shortcut.label}</span>
              </a>
            ),
          )}
        </nav>

        <div
          className="copy-notice"
          role="status"
          aria-live="polite"
        >
          {notice}
        </div>
      </section>

      <section
        className="projects-section"
        aria-label="Selected projects"
      >
        <div className="carousel">
          <button
            className="arrow-button previous"
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous project"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="carousel-track">
            {offsets.map((offset) => {
              const project = getProjectAtOffset(offset);
              const position =
                offset === 0
                  ? "center"
                  : offset === -1
                    ? "left"
                    : offset === 1
                      ? "right"
                      : offset < 0
                        ? "far-left"
                        : "far-right";

              return (
                <button
                  key={project.id}
                  type="button"
                  className="project-card"
                  data-position={position}
                  aria-label={`Select ${project.title}`}
                  aria-current={
                    offset === 0 ? "true" : undefined
                  }
                  onClick={() => {
                    if (offset !== 0) moveCarousel(offset);
                  }}
                >
                  <div
                    className="project-art"
                    style={{
                      backgroundColor: "#eeeeee",
                      backgroundImage: project.image
                        ? `url("${project.image}")`
                        : undefined,
                    }}
                  >
                    {!project.image && (
                      <span className="project-art-title">
                        {project.title}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <button
            className="arrow-button next"
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Next project"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className="carousel-caption">
          Use the arrows to explore projects
        </div>
      </section>

      <section className="project-details" aria-live="polite">
        <div
          className="details-copy"
          key={activeProject.id + "-details"}
        >
          <h2 className="project-role">{activeProject.role}</h2>
          <p className="project-description">
            {activeProject.description}
          </p>
          <div className="project-index">
            <strong>
              {String(activeIndex + 1).padStart(2, "0")}
            </strong>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        <div
          className="media-frame"
          key={activeProject.id + "-media"}
        >
          {activeProject.videoUrl ? (
            <video
              src={activeProject.videoUrl}
              controls
              playsInline
              preload="metadata"
              aria-label={activeProject.title + " video"}
            />
          ) : activeProject.mediaImage ? (
            <img
              src={activeProject.mediaImage}
              alt={activeProject.title + " project preview"}
            />
          ) : (
            <MediaPlaceholder title={activeProject.title} />
          )}
        </div>
      </section>
    </main>
  );
}