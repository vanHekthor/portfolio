import { type FC } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import demiglaceLogo from "../../staticData/images/demiglace_logo.png";
import systainableLogo from "../../staticData/images/systainable_logo.png";

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page of Quoc Duong Bui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-black">
        <div className="text-md flex w-full justify-center space-x-4 bg-white py-2 font-semibold tracking-tight text-slate-700">
          <Link href={`/`}>Resume</Link>
          <Link className="underline" href={"/projects"}>
            Projects
          </Link>
        </div>
        <div className="text-md flex w-full justify-center space-x-6 bg-white py-4 font-semibold tracking-tight text-black">
          <Link
            href={`/projects/VRCode`}
            className="flex h-16 w-16 items-end rounded-sm border-2 border-black p-[0.2rem] text-start font-extrabold uppercase leading-none tracking-tight"
          >
            VR CODE
          </Link>
          <Link
            href={`/projects/systainable`}
            className="flex items-center break-all text-center uppercase"
          >
            <Image src={systainableLogo} height={64} alt="systainable logo" />
          </Link>
          <Link
            href={`/projects/DemiGlace`}
            className="flex items-center rounded-sm border-slate-700 text-center uppercase"
          >
            <Image src={demiglaceLogo} height={64} alt="DemiGlace logo" />
          </Link>
          <Link
            href={`/projects/GLIMPS`}
            className="m-auto flex h-12 w-16 items-center justify-center rounded-md border-2 border-black font-bold uppercase tracking-tighter"
          >
            glimps
          </Link>
        </div>
        {children}
      </main>
    </>
  );
};

export default ProjectsLayout;
