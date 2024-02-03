import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.davidhouse.dev",
  author: "David House",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "davidhouse.dev",
  ogImage: "base-og-image.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/davidhousedev",
    linkTitle: ` Find me on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/davidhousedev",
    linkTitle: `Find me on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:davidhousedev@gmail.com",
    linkTitle: `Send an email to Find me`,
    active: true,
  },
];
