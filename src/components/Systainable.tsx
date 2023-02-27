import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import systainableOverview from "../../staticData/images/systainable.png";

const Systainable: FC = () => {
  return (
    <div className="w-full flex-1 space-y-10 bg-white pt-10 pb-20 text-black sm:pt-14 md:py-16 lg:py-24 ">
      <div className="m-auto max-w-screen-xl space-y-16">
        <div className="mb-16 flex justify-center text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              systainable
            </h1>
            <div className="w-full px-8 text-center text-lg font-medium text-zinc-500 sm:text-xl md:max-w-screen-md md:text-2xl xl:text-3xl">
              is a web dashboard for comparing software configurations in
              mutltiple metrics (performance, energy consumption and memory
              usage, etc.)
            </div>
          </div>
        </div>
        <div className="m-auto w-full max-w-screen-xl px-8 sm:px-12">
          <Image
            className="rounded-md border border-zinc-300 p-2"
            src={systainableOverview}
            alt="picture displaying gesture control in VRCode"
          />
        </div>
        <div className="space-y-4">
          <h1 className="px-12 text-3xl font-bold tracking-tight">
            Motivation.
          </h1>
          <div className="w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            As a research assistant, I once had the task to match{" "}
            <span className="font-bold tracking-tight text-black">nodes</span>{" "}
            of JProfiler call trees to their corresponding{" "}
            <span className="font-bold tracking-tight text-black">
              method definitions
            </span>{" "}
            and{" "}
            <span className="font-bold tracking-tight text-black">calls</span>.
            Here is a simplified example of how the call tree xml for a code
            snippet may look like:
          </div>
          <div className="w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            JProfiler is able to record the line number of method calls - if
            configured to do so. This would have made my task comparatively
            easy. Unfortunately, all measurements (hundreds of hours of
            profiling) were already done before realizing that the necessary
            option for recording line numbers was turned off.
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="px-12 text-3xl font-bold tracking-tight">
            Current state.
          </h1>
          <div className="mx-0 w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            DemiGlace requires a call tree xml and the path to the actual source
            code. After inputting those, it visits each tree node and finds the{" "}
            <span className="font-bold tracking-tight text-black">
              exact locations
            </span>{" "}
            of the respective method calls and the method definitions. An{" "}
            <span className="font-bold tracking-tight text-black">
              execution graph
            </span>{" "}
            gets generated which contains the in-source-code positions of each
            call with the corresponding definition - method are the nodes, calls
            are the edges.
          </div>
        </div>
        <div className="flex justify-center text-center">
          <Link
            className="flex gap-x-3 text-4xl font-bold tracking-tight hover:text-zinc-700 sm:text-4xl"
            href={"https://github.com/vanHekthor/systainable"}
          >
            GitHub <GithubOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Systainable;
