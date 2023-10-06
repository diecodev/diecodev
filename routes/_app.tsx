// @ts-nocheck fetchpriority error
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="scroll-smooth" land="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Diecodev</title>
        <meta
          name="description"
          content="Diecodev is a web developer who feel passion for minimal design, development, customization and web techs."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta name="apple-mobile-web-app-title" content="Diecodev" />
        <meta name="robots" content="index, follow" />
        <link href="https://diecodev.vercel.app/" rel="canonical" />

        {/* theme color */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#242424"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#242424"
        />
        <meta
          name="msapplication-TileColor"
          media="(prefers-color-scheme: light)"
          content="#242424"
        />
        <meta
          name="msapplication-TileColor"
          media="(prefers-color-scheme: dark)"
          content="#242424"
        />

        {/* social media cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@diecodev" />
        <meta
          name="twitter:image"
          content="https://diecodev.vercel.app/diecodev.png"
        />
        <meta property="og:url" content="https://diecodev.vercel.app/" />
        <meta property="og:title" content="Diecodev" />
        <meta
          property="og:image"
          content="https://diecodev.vercel.app/diecodev.png"
        />
        <meta
          property="og:description"
          content="Diecodev is a web developer who feel passion for minimal design, development, customization and web techs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://diecodev.vercel.app/logo57.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://diecodev.vercel.app/logo60.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://diecodev.vercel.app/logo72.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://diecodev.vercel.app/logo76.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://diecodev.vercel.app/logo114.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://diecodev.vercel.app/logo120.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://diecodev.vercel.app/logo144.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://diecodev.vercel.app/logo152.png"
          fetchpriority="low"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://diecodev.vercel.app/logo180.png"
          fetchpriority="low"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
