
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull  } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";

export const ParticlesContainer = ({color}: {color: string})=> {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: 'bg-white dark:bg-black'
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 1
            },
            repulse: {
              distance: 10,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: color
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.7,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 2000
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  );
};
