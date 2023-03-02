import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import systainableLogo from "../../../staticData/images/systainable_logo_lg.png";
import demiGlaceLogo from "../../../staticData/images/DemiGlace_logo_lg.png";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page of Quoc Duong Bui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <div className="text-md flex w-full justify-center space-x-4 bg-white py-2 font-semibold tracking-tight text-slate-700">
          <Link href={"/"}>Resume</Link>
          <Link className="underline" href={"/projects"}>
            Projects
          </Link>
        </div>
        <div className="flex w-full justify-center py-16 text-center text-black">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">VRCode</h1>
            <h2 className="mb-12 px-8 text-3xl font-bold tracking-tight">
              Virtual Reality Development Environment
            </h2>
            <div className="m-auto mb-12 flex h-32 w-32 items-end rounded-sm border-2 border-black bg-white p-2 text-start text-3xl font-extrabold uppercase leading-none tracking-tight text-black">
              VR CODE
            </div>
            <Link href={`/projects/VRCode`}>
              <div className="m-auto w-fit rounded-full bg-emerald-600 py-1 px-3 text-white">
                Learn more
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center bg-black py-16 text-center text-white">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              systainable
            </h1>
            <h2 className="mb-12 px-8 text-3xl font-bold tracking-tight">
              Green Configuration Dashboard
            </h2>
            <Image
              className="m-auto mb-12 w-full max-w-[160px]"
              src={systainableLogo}
              alt="systainable logo"
            />
            <Link href={`/projects/systainable`}>
              <div className="m-auto w-fit rounded-full bg-emerald-600 py-1 px-3 text-white">
                Learn more
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center py-16 text-center">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              DemiGlace
            </h1>
            <h2 className="mb-12 px-8 text-3xl font-bold tracking-tight">
              Java Parsing Tool
            </h2>
            <Image
              className="m-auto mb-12 w-full max-w-[160px]"
              src={demiGlaceLogo}
              alt="systainable logo"
            />
            <Link href={`/projects/DemiGlace`}>
              <div className="m-auto w-fit rounded-full bg-emerald-600 py-1 px-3 text-white">
                Learn more
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center bg-black py-16 text-center text-white">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">GLIMPS</h1>
            <h2 className="mb-12 px-8 text-3xl font-bold tracking-tight">
              Reproduction of a Performance Debugging Tool
            </h2>
            <div className="m-auto mb-12 flex h-24 w-32 items-center justify-center rounded-md border-2 border-white text-3xl font-bold uppercase tracking-tighter">
              glimps
            </div>
            <Link href={`/projects/GLIMPS`}>
              <div className="m-auto w-fit rounded-full bg-emerald-600 py-1 px-3 text-white">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
