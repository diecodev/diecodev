import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

import {} from "twind";

export default {
  ...defineConfig({
    theme: {
      extend: {
        colors: {
          black: {
            DEFAULT: "#242424",
          },
        },
        animation: {
          wheel: "wheel 1s infinite",
          borders: "borders 20s infinite",
        },
        height: {
          custom: "calc(100vh - 52px)",
        },
        dropShadow: {
          custom: "0 0 100px #BCF2C1",
        },
        keyframes: {
          wheel: {
            "0%, 100%": {
              transform: "translateY(-5%)",
              "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
            },
            "50%": {
              transform: "translateY(10%)",
              "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
            },
          },
          borders: {
            "0%, 100%": {
              "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
            },
            "50%": {
              "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
            },
          },
        },
      },
    },
    presets: [presetTailwind() as Preset, presetAutoprefix()],
  }),
  selfURL: import.meta.url,
};
