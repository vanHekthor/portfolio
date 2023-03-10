import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatarPic from "../../staticData/images/avatar.png";
import systainableLogo from "../../staticData/images/systainable_logo.png";
import demiGlaceLogo from "../../staticData/images/demiglace_logo.png";
import {
  DownOutlined,
  GithubFilled,
  LinkedinFilled,
  RightOutlined,
} from "@ant-design/icons";
import ResumeSection from "~/components/ResumeSection";
import SectionEntry from "~/components/SectionEntry";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume: Quoc Duong Bui</title>
        <meta name="description" content="Resume page of Quoc Duong Bui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <div className="text-md flex w-full justify-center space-x-4 bg-white py-2 font-semibold tracking-tight text-slate-700">
          <Link className="underline" href={"/"}>
            Resume
          </Link>
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div className="w-64 p-4">
          <Image
            className="h-auto max-w-full rounded-full border-2 border-zinc-400 align-middle"
            src={avatarPic}
            alt="picture of Quoc Duong Bui"
            width={256}
            height={256}
          />
        </div>
        <div className="text-3xl font-bold tracking-tight">Quoc Duong Bui</div>
        <div className="space-x-3 text-2xl text-zinc-800">
          <Link href={"https://www.linkedin.com/in/buiqd/"}>
            <LinkedinFilled className="hover:text-zinc-600" />
          </Link>
          <Link href={"https://github.com/vanHekthor"}>
            <GithubFilled className="hover:text-zinc-600" />
          </Link>
        </div>
        <div className="w-full max-w-screen-lg space-y-8 px-8 pt-8 pb-20">
          <div className="space-y-4">
            <Link href="/projects">
              <div className="group flex items-center space-x-1">
                <span className="text-2xl font-semibold group-hover:underline">
                  Projects
                </span>
                <RightOutlined className="flex items-center text-sm" />
              </div>
            </Link>
            <div className="overflow-auto">
              <div className="flex min-w-fit max-w-screen-xl items-center justify-evenly">
                <Link
                  href="/projects/VRCode"
                  className="m-4 flex h-28 w-28 items-end rounded-sm border-2 border-black bg-white p-2 text-start text-3xl font-extrabold uppercase leading-none tracking-tight text-black"
                >
                  VR CODE
                </Link>
                <div className="m-4 flex w-32 items-end rounded-sm text-start text-3xl font-extrabold uppercase leading-none tracking-tight text-black">
                  <Link href="projects/systainable">
                    <Image
                      className="m-auto"
                      src={systainableLogo}
                      alt="systainable logo"
                    />
                  </Link>
                </div>
                <div className="m-4 flex w-32 items-end rounded-sm text-start text-3xl font-extrabold uppercase leading-none tracking-tight text-black">
                  <Link href="projects/DemiGlace">
                    <Image
                      className="m-auto"
                      src={demiGlaceLogo}
                      alt="DemiGlace logo"
                    />
                  </Link>
                </div>
                <Link
                  href="/projects/GLIMPS"
                  className="m-4 flex h-24 w-32 items-center justify-center rounded-md border-2 border-black text-3xl font-bold uppercase tracking-tighter"
                >
                  glimps
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="05/2022 - present"
                title="Software Engineer, Canida"
                description={[
                  "Legacy app modernization, reduction of startup time from several minutes to few seconds (React, TypeScript, antd, GraphQL, PostgreSQL)",
                  "Modernization of build processes (Webpack, Create-React-App, Vite, Gatsby)",
                  "Creation of a company-internal component library (React, TailwindCSS, Less)",
                  "UX research: usability, effectiveness, satisfaction (interview, card sorting, System Usability Scale)",
                ]}
                rowClamp="2"
              />
            </ResumeSection>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="05/2021 - 04/2022"
                title="Research Assistant, Chair of Software Systems, Leipzig University"
                description={[
                  "Development of prototype VR software development environment in Unity (C#) with interactive, visual analysis tools for software (performance, energy consumption etc.)",
                  "Visualization of program slices and cross-references between JProfiler snapshots and code",
                  "Reproduction and containerization of research software (Docker)",
                  "User studies: design and execution (acquisition, quantitative and qualitative analysis)",
                ]}
                rowClamp="2"
              />
            </ResumeSection>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="04/2016 - 04/2018"
                title="Piano Teacher, Music School Conrad Boenigk, Soest"
                description={[
                  "One-to-one lessons for piano students of various age groups (6-58)",
                ]}
                rowClamp="2"
              />
            </ResumeSection>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-2xl font-semibold">Education</h2>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="10/2020 - 10/2022"
                title={
                  <>
                    Leipzig University{" "}
                    <span className="!font-normal">BSc Computer Science</span>
                  </>
                }
                description={[
                  "thesis: “SoftVR: Finding Energy Bugs in Configurable Software Systems”",
                  "Framework development as well as design and execution of a comparative user study",
                ]}
                rowClamp="2"
              />
            </ResumeSection>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="10/2015 - 09/2020"
                title={
                  <>
                    Detmold University of Music{" "}
                    <span className="!font-normal">
                      BMus Piano and Instrumental Pedagogy
                    </span>
                  </>
                }
                description={[
                  "thesis: “Smart Teaching and Learning – Apps for Teaching Instruments”",
                  "Additional major in singing",
                ]}
                rowClamp="2"
              />
            </ResumeSection>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-2xl font-semibold">Certificates</h2>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="05/2022"
                title={
                  <>
                    AWS Partner Accreditation{" "}
                    <span className="!font-normal">Business</span>
                  </>
                }
                description={[]}
                rowClamp="2"
              />
            </ResumeSection>
            <ResumeSection cols={12}>
              <SectionEntry
                timeSpan="03/2022"
                title={
                  <>
                    TRIZ User Level 1{" "}
                    <span className="!font-normal">
                      Theory of Inventive Problem Solving
                    </span>
                  </>
                }
                description={[]}
                rowClamp="2"
              />
            </ResumeSection>
          </div>
          <div className="space-y-4 tracking-tight">
            <h2 className="text-2xl font-semibold">Skills & Interests</h2>
            <div className="grid grid-cols-12">
              <div className="col-span-12 row-span-full font-semibold sm:col-span-2 sm:font-normal">
                Languages
              </div>
              <div className="col-span-12 sm:col-span-11 sm:col-start-3">
                German (native), English (C1), Vietnamese (B2)
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 row-span-full font-semibold sm:col-span-2 sm:font-normal">
                Technologies
              </div>
              <div className="col-span-12 sm:col-span-11 sm:col-start-3">
                TypeScript, JavaScript, React, Vue.js, Tailwind CSS, Ant Design,
                Less, CSS, Node.js, Next.js, Express, Docker, Unity 3D, C#, C++,
                Android, Java, Spring, GraphQL, REST API, SQL, HTML, XML,
                XQuery, JSON
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 row-span-full font-semibold sm:col-span-2 sm:font-normal">
                Interests
              </div>
              <div className="col-span-12 sm:col-span-11 sm:col-start-3">
                Optical Music Recognition, UX Research, Dancing (Hip Hop),
                Fermentation, Sourdough Baking
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
