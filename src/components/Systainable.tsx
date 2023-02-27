import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import systainableOverview from "../../staticData/images/systainable.png";
import systainableConfigs from "../../staticData/images/systainable_configs.png";
import systainableProperties from "../../staticData/images/systainable_properties.png";
import systainableAnalysis from "../../staticData/images/systainable_analysis.png";
import systainableOptimization from "../../staticData/images/systainable_optimization.png";

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
        <div className="space-y-4 px-8 sm:px-12">
          <h1 className="text-3xl font-bold tracking-tight">
            Create configurations. Compare properties.
          </h1>
          <div className="w-full text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            Import or manually add multiple configurations. Get a quick overview
            of each configuration&apos;s effect on the software properties.
          </div>
        </div>
        <div className="space-y-4 px-8 sm:px-12">
          <Image
            src={systainableConfigs}
            alt="configuration view in systainable"
          />
          <Image
            src={systainableProperties}
            alt="property value view in systainable"
          />
        </div>
        <div className="space-y-4 px-8 sm:px-12">
          <h1 className="text-3xl font-bold tracking-tight">
            In-depth influence analysis.
          </h1>
          <div className="w-full text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            Check the effect of each configuration option and interaction
            between options on the overall performance of a software system.
          </div>
        </div>
        <div className="space-y-4 px-8 sm:px-12">
          <Image src={systainableAnalysis} alt="analysis view in systainable" />
        </div>
        <div className="space-y-4 px-8 sm:px-12">
          <h1 className="text-3xl font-bold tracking-tight">
            Optimize configurations.
          </h1>
          <div className="w-full text-start text-lg font-medium text-zinc-500 md:max-w-screen-md md:text-xl lg:text-2xl">
            Refine a configuration using the optimization feature. Check out the
            improvements in the optimized config preview.
          </div>
        </div>
        <div className="space-y-4 px-8 sm:px-12">
          <Image
            src={systainableOptimization}
            alt="optimization modal in systainable"
          />
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
