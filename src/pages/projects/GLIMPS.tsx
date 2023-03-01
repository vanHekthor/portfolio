import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import glimpsOverview from "../../../staticData/images/glimps_overview.png";
import glimpsHotspotDiff from "../../../staticData/images/glimps_hotspot_diff.png";
import glimpsTrace from "../../../staticData/images/glimps_trace.png";

const Glimps: FC = () => {
  return (
    <div className="space-y-14 py-10 text-white sm:py-14 md:py-16 lg:py-24">
      <div className="mb-16 flex justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            GLIMPS
          </h1>
          <div className="w-full px-8 text-center text-lg font-medium text-zinc-400 sm:text-xl md:max-w-screen-md md:text-2xl xl:text-3xl">
            is a research tool for debugging performance bugs in configurable
            software systems.
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Reproduction. Modification. Evaluation.
        </h1>
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-lg md:text-xl lg:text-2xl">
          A known flaw of research software is that it is often hard or even
          next to impossible to reproduce. In addition, empirical evidence of
          the software&apos;s actual usefulness is rare. This project addresses
          both problems by simplifying the reproduction of GLIMPS and evaluating
          the tool in a comparative user study.
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full px-8 sm:px-12 xl:max-w-screen-xl">
          <Image src={glimpsOverview} alt="Overview of GLIMPS" />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Dockerization. Documentation.
        </h1>
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-lg md:text-xl lg:text-2xl">
          GLIMPS consists of 3 parts:{" "}
          <span className="font-bold tracking-tight text-white">
            VSCode extension
          </span>
          ,{" "}
          <span className="font-bold tracking-tight text-white">
            hotspot server
          </span>
          ,{" "}
          <span className="font-bold tracking-tight text-white">
            tracing server
          </span>
          . The two servers were containerized with Docker. Additionally, a
          documentation was created explaining the installation of the extension
          and the usage of the servers. The Docker images and the documentation
          can be found{" "}
          <Link
            className="text-white hover:underline"
            href={"https://github.com/vanHekthor/glimps"}
          >
            here
          </Link>
          .
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Features.
        </h1>
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-xl md:text-xl lg:text-2xl">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Influencing Options: Displaying the options with the biggest
              impact on performance.
            </li>
            <li>
              Option Hotspots: Show where in the code the influencing options
              effect the performance.
            </li>
            <li>
              Option-Hotspot Trace: Reduce the codebase to the parts which are
              effected by an option.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full px-8 sm:px-12 xl:max-w-screen-xl">
          <Image
            className="w-full"
            src={glimpsHotspotDiff}
            alt="Hotspot view of GLIMPS"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full px-8 sm:px-12 xl:max-w-screen-xl">
          <Image
            className="w-full"
            src={glimpsTrace}
            alt="Trace view of GLIMPS"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Evaluation.
        </h1>
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-lg md:text-xl lg:text-2xl">
          The comparative user study is still ongoing.
        </div>
      </div>
      <div className="flex justify-center text-center">
        <Link
          className="flex gap-x-3 text-4xl font-bold tracking-tight hover:text-zinc-200 sm:text-4xl"
          href={"https://github.com/vanHekthor/glimps"}
        >
          GitHub <GithubOutlined />
        </Link>
      </div>
    </div>
  );
};

export default Glimps;
