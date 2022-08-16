import { JsLogo, TsLogo, DenoLogo, NextLogo, NodeLogo, ReactLogo, FigmaLogo, TailwindLogo } from "../svg/icons";

const Logos = [
  {
    id: '1',
    title: 'TypeScript',
    Logo: TsLogo
  },
  {
    id: '2',
    title: 'React',
    Logo: ReactLogo
  },
  {
    id: '3',
    title: 'Next',
    Logo: NextLogo
  },
  {
    id: '4',
    title: 'Node',
    Logo: NodeLogo
  },
  {
    id: '5',
    title: 'Deno',
    Logo: DenoLogo
  },
  {
    id: '6',
    title: 'Figma',
    Logo: FigmaLogo
  },
  {
    id: '7',
    title: 'Tailwind css',
    Logo: TailwindLogo
  }
];

export const Tech = ()=>{
  return (
    <div className="mb-16">
      <h2 className="text-2xl text-gray-200 mb-5 font-semibold">Tech skills</h2>
      <section>
        <ul className="flex gap-3 flex-wrap justify-around">
          {
            Logos.map(({id, title, Logo})=>(
              <li title={title} key={id} className='text-4xl' >
                <Logo />
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};