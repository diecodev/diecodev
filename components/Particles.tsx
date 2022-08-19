import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
export const ParticlesWrapper = ({ id } : { id: string }) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options : any = useMemo(()  => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1 // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: currentTheme === 'dark' ? '#f2f2f2' : '#09f'
        },
        number: {
          density: {
            enable: true,
            area: 1000
          },
          value: currentTheme === 'dark' ? 65 : 80
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 100, // maximum distance for linking the particles
          color: '#f2f2f2',
          opacity: 0.2
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 0.1, max: 0.3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
          outModes: {
            default: "bounce"
          }
        },
        opacity: {
          value: currentTheme === 'dark' ? { min: 0.2, max: 0.5 } : 0.07 // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: currentTheme === 'dark' ? { min: 2, max: 3 } : { min: 5, max: 8 } // let's randomize the particles size a bit
        }
      }
    };
  }, [currentTheme]);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={id} init={particlesInit} options={options} />;
};
