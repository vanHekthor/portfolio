import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, useState } from "react";
import VRCode from "~/components/VRCode";

type ProjectProps = {
  name: "VRCode" | "DemiGlace" | "systainable" | "GLIMPS" | undefined;
};
const basePath = process.env.BASE_PATH ?? "";

const Project: FC<ProjectProps> = ({ name }) => {
  switch (name) {
    case "VRCode":
      return <VRCode />;
  }
  return (
    <>
      <div className="text-white">{name}</div>
    </>
  );
};

const Projects: NextPage = () => {
  const [displayedProject, setDisplayedProject] =
    useState<ProjectProps["name"]>("VRCode");

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page of Quoc Duong Bui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-black">
        <div className="text-md flex w-full justify-center space-x-4 bg-white py-2 font-semibold tracking-tight text-slate-700">
          <Link href={`/${basePath}`}>Resume</Link>
          <Link className="underline" href={"/projects"}>
            Projects
          </Link>
        </div>
        <div className="text-md flex w-full justify-center space-x-6 bg-white py-4 font-semibold tracking-tight text-slate-700">
          <button
            className="flex h-16 w-16 items-end rounded-sm border-2 border-slate-700 p-[0.2rem] text-start font-extrabold uppercase leading-none tracking-tight"
            onClick={() => {
              setDisplayedProject("VRCode");
            }}
          >
            VR CODE
          </button>
          <button
            className="flex h-16 w-16 items-center rounded-sm border-2 border-slate-700 text-center uppercase"
            onClick={() => {
              setDisplayedProject("DemiGlace");
            }}
          >
            DEMI GLACE
          </button>
          <button
            className="flex h-16 w-16 items-center break-all rounded-sm border-2 border-slate-700 text-center uppercase"
            onClick={() => {
              setDisplayedProject("systainable");
            }}
          >
            systainable
          </button>
          <button
            className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-slate-700 uppercase"
            onClick={() => {
              setDisplayedProject("GLIMPS");
            }}
          >
            glimps
          </button>
        </div>
        <Project name={displayedProject} />
      </main>
    </>
  );
};

export default Projects;
