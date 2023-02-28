import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatarPic from "../../staticData/images/avatar.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume: Quoc Duong Bui</title>
        <meta name="description" content="Resume page of Quoc Duong Bui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-[#dddddd]">
        <div className="text-md flex w-full justify-center space-x-4 bg-white py-2 font-semibold tracking-tight text-slate-700">
          <a className="underline" href={"/lala"}>
            Resume
          </a>
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div className="w-64 p-4">
          <Image
            className="h-auto max-w-full rounded-full border-2 border-[#dddddd] align-middle"
            src={avatarPic}
            alt="picture of Quoc Duong Bui"
            width={256}
            height={256}
          />
        </div>
        <div className="text-3xl font-bold tracking-tight">Quoc Duong Bui</div>
        <div>LinkedIn / Github</div>
        <div className="w-full max-w-screen-lg space-y-4 p-4">
          <div className="space-y-4 tracking-tight">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">05/2022 - present</div>
              <div className="col-span-10 font-semibold">
                Software Engineer, Canida
              </div>
              <div className="col-span-11 col-start-3">
                <ul className="list-disc pl-5">
                  <li>
                    Creation of a company-internal component library (React,
                    TailwindCSS, Less)
                  </li>
                  <li>
                    Legacy apps to embeddable standalone apps (React,
                    TypeScript, antd, GraphQL, PostgreSQL), reduction of startup
                    time from several minutes to few seconds
                  </li>
                  <li>
                    Modernization of build processes (Webpack, Create-React-App,
                    Vite, Gatsby)
                  </li>
                  <li>
                    UX research: usability, effectiveness, satisfaction
                    (interview, card sorting, System Usability Scale)
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">05/2021 - 04/2022</div>
              <div className="col-span-10 font-semibold">
                Research Assistant, Chair of Software Systems, Leipzig
                University
              </div>
              <div className="col-span-11 col-start-3">
                <ul className="list-disc pl-5">
                  <li>
                    Development of prototype VR software development environment
                    in Unity (C#) with interactive, visual analysis tools for
                    software (performance, energy consumption etc.)
                  </li>
                  <li>
                    Visualization of program slices and cross-referencing
                    between JProfiler snapshots and code
                  </li>
                  <li>
                    Reproduction and containerization of research software
                    (Docker)
                  </li>
                  <li>
                    User studies: design and execution (acquisition,
                    quantitative and qualitative analysis)
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">04/2016 - 04/2018</div>
              <div className="col-span-10 font-semibold">
                Piano Teacher, Music School Conrad Boenigk, Soest
              </div>
              <div className="col-span-11 col-start-3">
                <ul className="list-disc pl-5">
                  <li>
                    One-to-one lessons for piano students of various age groups
                    (6-58)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">10/2020 - 10/2022</div>
              <div className="col-span-10">
                <span className="font-semibold">Leipzig University</span> BSc
                Computer Science
              </div>
              <div className="col-span-11 col-start-3">
                <ul className="list-disc pl-5">
                  <li>
                    thesis: “SoftVR: Finding Energy Bugs in Configurable
                    Software Systems”
                  </li>
                  <li>
                    Framework development as well as design and execution of a
                    comparative user study
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">10/2015 - 09/2020</div>
              <div className="col-span-10">
                <span className="font-semibold">
                  Detmold University of Music
                </span>{" "}
                BMus Piano and Instrumental Pedagogy
              </div>
              <div className="col-span-11 col-start-3">
                <ul className="list-disc pl-5">
                  <li>
                    thesis: “Smart Teaching and Learning – Apps for Teaching
                    Instruments”
                  </li>
                  <li>Additional major in singing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-xl font-semibold">Certificates</h2>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">05/2022</div>
              <div className="col-span-10">
                <span className="font-semibold">
                  AWS Partner Accreditation{" "}
                </span>
                Business
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 row-span-full">03/2022</div>
              <div className="col-span-10">
                <span className="font-semibold">TRIZ User Level 1 </span>
                Theory of Inventive Problem Solving
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
