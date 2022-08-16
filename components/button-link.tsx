import Link from "next/link";

interface IButton {
  bgColor?: string;
  url: string;
  children: JSX.Element
}

export const ButtonLink = ({url, children, ...props}:IButton) => {
  return (
    <Link href={url} >
      <a className={`flex place-items-center min-w-[150px] max-w-fit rounded-md px-5 py-2 ${props.bgColor || 'bg-yllw'}`}>
        {children}
      </a>
    </Link>
  );
};