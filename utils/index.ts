import { send } from "@emailjs/browser";
import { Github, Instagram, Linkedin } from "../components/icons.tsx";
import { FunctionComponent } from "preact";

interface IExperience {
  id: string;
  position: string;
  company: string;
  date: string;
  url?: string;
  requirements: string[];
}

interface ISocial {
  id: string;
  url: string;
  icon: FunctionComponent<{ class: string }>;
  title: string;
}

export const experienceArray: IExperience[] = [
  {
    id: "2",
    position: "Full Stack Developer",
    company: "Energías Naturales",
    url: "https://solarvolt.energiasnaturales.com/",
    date: "February 2023 - Present. [Santiago de Chile, Chile]",
    requirements: [
      "Design all the screens that appear in the application, applying knowledge of UX and UI.",
      "Develop API for client-server communication. implement password encrypt, database management (MongoDB) and error handler (HTTP status code).",
      "Create a mobile app using React Native to automate the processes that are carried out internally in the company.",
    ],
  },
  {
    id: "1",
    position: "Mobile Developer",
    company: "Unico Logística",
    date: "January 2022 - November 2023. [Buenos Aires, Argentina]",
    requirements: [
      "Design all the screens that appear in the application, applying knowledge of UX and UI.",
      "Develop API for client-server communication. implement password encrypt, database management (MongoDB) and error handler (HTTP status code).",
      "Create a mobile app using React Native to automate the processes that are carried out internally in the company.",
    ],
  },
  {
    id: "0",
    position: "Front-end Developer",
    company: "estuarg.com",
    url: "https://estuarg.com/",
    date: "June 2021 - December 2021. [Buenos Aires, Argentina]",
    requirements: [
      "Design the web page using Figma and create all the necessary files and assets to share with customers.",
      "Create the web page using Next.js and TypeScript.",
      "Deploy git project in Vercel platform, configure domain and DNS.",
    ],
  },
];

export const sendEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  const SERVICE_ID = Deno.env.get("SERVICE_ID")?.toString()!;
  const TEMPLATE_ID = Deno.env.get("TEMPLATE_ID")?.toString()!;
  const USER_ID = Deno.env.get("USER_ID")?.toString()!;

  const response = await send(
    SERVICE_ID,
    TEMPLATE_ID,
    { name, email, message },
    USER_ID,
  );

  const data = response.status === 200
    ? "Email sent successfully"
    : "Something went wrong. Please try again later";

  return data;
};

export const socialArray: ISocial[] = [
  {
    id: "0",
    url: "https://github.com/diecodev",
    icon: Github,
    title: "/diecodev",
  },
  {
    id: "1",
    url: "https://www.linkedin.com/in/diecodev/",
    icon: Linkedin,
    title: "/diecodev",
  },
  {
    id: "2",
    url: "https://www.instagram.com/diegodiazcol/",
    icon: Instagram,
    title: "/diegodiazcol",
  },
];
