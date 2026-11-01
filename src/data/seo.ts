import { experience } from "./experience";
import { otherProfiles, profile, socials } from "./profile";

// Structured data (schema.org JSON-LD) so search engines can tell who the site is about
// and connect it to the same person's other profiles.

type Schema = Record<string, unknown>;

const home = `${profile.site}/`;
const personId = `${profile.site}/#person`;
const websiteId = `${profile.site}/#website`;
const [currentJob] = experience;

const person: Schema = {
  "@id": personId,
  "@type": "Person",
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  alternateName: ["Diego Diaz", profile.handle],
  description: profile.description,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Astro",
    "Qwik",
    "Swift",
  ],
  name: profile.name,
  sameAs: [...socials.map((social) => social.href), ...otherProfiles],
  url: home,
  worksFor: {
    "@type": "Organization",
    name: currentJob.company,
    url: currentJob.website,
  },
};

const personRef = { "@id": personId };

const website: Schema = {
  "@id": websiteId,
  "@type": "WebSite",
  alternateName: [profile.handle, "dieco.dev"],
  inLanguage: "en",
  name: profile.name,
  publisher: personRef,
  url: home,
};

export const homeSchema = (title: string): Schema => ({
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@id": `${profile.site}/#profile`,
      "@type": "ProfilePage",
      isPartOf: { "@id": websiteId },
      mainEntity: personRef,
      name: title,
      url: home,
    },
    person,
  ],
});

interface CaseSchemaInput {
  description: string;
  image: string;
  name: string;
  title: string;
  url: string;
}

export const caseSchema = ({
  description,
  image,
  name,
  title,
  url,
}: CaseSchemaInput): Schema => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": url,
      "@type": "WebPage",
      author: personRef,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      name: title,
      primaryImageOfPage: image,
      url,
    },
    {
      "@id": `${url}#breadcrumb`,
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", item: home, name: profile.name, position: 1 },
        {
          "@type": "ListItem",
          item: url,
          name: `${name} case study`,
          position: 2,
        },
      ],
    },
    { ...personRef, "@type": "Person", name: profile.name, url: home },
  ],
});
