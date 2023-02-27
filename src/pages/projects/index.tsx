import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type FC, useState } from "react";
import DemiGlace from "~/components/DemiGlace";
import Systainable from "~/components/Systainable";
import VRCode from "~/components/VRCode";
import demiglaceLogo from "../../../staticData/images/demiglace_logo.png";
import systainableLogo from "../../../staticData/images/systainable_logo.png";

type ProjectProps = {
  name: "VRCode" | "DemiGlace" | "systainable" | "GLIMPS" | undefined;
};

const Project: FC<ProjectProps> = ({ name }) => {
  switch (name) {
    case "VRCode":
      return <VRCode />;
    case "DemiGlace":
      return <DemiGlace />;
    case "systainable":
      return <Systainable />;
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
          <Link href={`/`}>Resume</Link>
          <Link className="underline" href={"/projects"}>
            Projects
          </Link>
        </div>
        <div className="text-md flex w-full justify-center space-x-6 bg-white py-4 font-semibold tracking-tight text-black">
          <button
            className="flex h-16 w-16 items-end rounded-sm border-2 border-black p-[0.2rem] text-start font-extrabold uppercase leading-none tracking-tight"
            onClick={() => {
              setDisplayedProject("VRCode");
            }}
          >
            VR CODE
          </button>
          <button
            className="flex items-center break-all text-center uppercase"
            onClick={() => {
              setDisplayedProject("systainable");
            }}
          >
            <Image src={systainableLogo} height={64} alt="systainable logo" />
          </button>
          <button
            className="flex items-center rounded-sm border-slate-700 text-center uppercase"
            onClick={() => {
              setDisplayedProject("DemiGlace");
            }}
          >
            <Image src={demiglaceLogo} height={64} alt="DemiGlace logo" />
          </button>
          <button
            className="m-auto flex h-12 w-16 items-center justify-center rounded-md border-2 border-black font-bold uppercase tracking-tighter"
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
