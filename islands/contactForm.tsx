import { useSignal, useSignalEffect } from "@preact/signals";
import { ComponentChildren } from "preact";
import { sendEmail } from "../utils/index.ts";

export const ContactFormWrapper = (
  { children, SERVICE_ID, TEMPLATE_ID, USER_ID }: {
    children: ComponentChildren;
    TEMPLATE_ID: string;
    USER_ID: string;
    SERVICE_ID: string;
  },
) => {
  const status = useSignal<{ ok: boolean; message: string }>({
    ok: true,
    message: "",
  });

  useSignalEffect(() => {
    if (status.value.message) {
      setTimeout(() => {
        status.value = {
          message: "",
          ok: false,
        };
      }, 1500);
    }
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("customerName")?.toString();
        const email = form.get("customerEmail")?.toString();
        const message = form.get("customerMessage")?.toString();

        if (!name || !email || !message) {
          return status.value = {
            ok: false,
            message: "Please fill all the fields.",
          };
        }

        const messageData = await sendEmail(name, email, message, {
          SERVICE_ID,
          TEMPLATE_ID,
          USER_ID,
        });

        status.value = {
          ok: true,
          message: messageData,
        };

        // @ts-expect-error reset form
        e.target!.reset();
      }}
      class="flex flex-col gap-3 w-full"
    >
      {children}
      <p
        class={`text-sm rounded-md text-gray-900 transition-all ${
          status.value.ok ? "bg-green-200" : "bg-rose-200"
        } ${status.value.message ? "h-auto px-4 py-2" : "h-0"}`}
      >
        {status.value.message}
      </p>
    </form>
  );
};
