import { ComponentChildren } from "preact";

export const ContactFormWrapper = (
  { children }: { children: ComponentChildren },
) => {
  return (
    <form method="post" class="flex flex-col gap-3 w-full">
      {children}
    </form>
  );
};
