import { useSignal, useSignalEffect } from "@preact/signals";
import { HeaderLinks } from "../components/headerLinks.tsx";

export const MobileNavWrapper = () => {
  const isOpen = useSignal<boolean>(false);
  const hamburguer = isOpen.value ? "translate-x-10" : "trasnlate-x-0";
  const cross = isOpen.value ? "translate-x-0" : "-translate-x-10";

  useSignalEffect(() => {
    if (isOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <>
      <button
        class="relative group lg:hidden"
        aria-label="menu button"
        onClick={() => isOpen.value = !isOpen.value}
      >
        <div class="relative flex overflow-hidden items-center justify-center transform transition-all duration-200">
          <div class="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
            <div
              class={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamburguer}`}
            >
            </div>
            <div
              class={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${hamburguer}`}
            >
            </div>
            <div
              class={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${hamburguer}`}
            >
            </div>

            <div
              class={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                isOpen ? "w-5" : "w-0"
              } ${cross}`}
            >
              <div
                class={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                  isOpen ? "rotate-45 " : "rotate-0"
                }`}
              >
              </div>
              <div
                class={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 ${
                  isOpen ? "-rotate-45" : "rotate-0"
                } delay-300`}
              >
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen.value && (
        <nav class="absolute top-[53px] w-full h-custom left-0 bg-white/40 backdrop-blur backdrop-saturate-50 flex justify-center items-center">
          <ul class="flex gap-6 flex-col items-center">
            <HeaderLinks />
          </ul>
        </nav>
      )}
    </>
  );
};
