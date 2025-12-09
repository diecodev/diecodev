export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto mt-4 max-w-4xl border-border/50 border-t py-8">
      <div className="flex flex-col flex-wrap items-center justify-center gap-2 text-muted-foreground text-sm tracking-wide md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="opacity-75"
            fill="none"
            height="18"
            role="graphics-symbol"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <p>Crafting digital experiences with purpose</p>
        </div>
        <p>Diego Díaz - {currentYear}</p>
      </div>
    </footer>
  );
};
