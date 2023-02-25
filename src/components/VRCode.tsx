import { GithubOutlined } from "@ant-design/icons";
import { type FC } from "react";

const basePath =
  process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";

const VRCode: FC = () => {
  return (
    <div className="space-y-10 py-10 text-white sm:py-14 md:py-16 lg:py-24">
      <div className="mb-16 flex justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            VRCode
          </h1>
          <div className="w-screen px-8 text-center text-lg font-medium text-zinc-400 sm:text-xl md:w-[768px] md:text-2xl xl:text-3xl">
            is a prototype VR software debugging environment - containing
            interactive software analysis tools for control flow, data flow,
            internal software components and properties (performance, energy
            consumption, memory usage etc.)
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="h-[34rem] w-[68rem] bg-gray-500" />
      </div> */}
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Follow the flow. Expore hotspots.
        </h1>
        <div className="w-screen px-12 text-start text-lg font-medium text-zinc-400 md:w-[768px] md:text-xl lg:text-2xl">
          Explore the control and data flows from program start to hotspot and
          vice versa. Compare execution paths between different program
          configurations.
        </div>
      </div>
      <div className="relative w-screen xl:w-[1280px]">
        <img className="w-full" src={`${basePath}/images/01.png`} alt="" />
        <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight">
          Laser and gesture control.
        </h1>
        <div className="w-screen px-12 text-start text-lg font-medium text-zinc-400 md:w-[768px] md:text-xl lg:text-2xl">
          Intuively manipulate windows with gestures.
          <br />
          Maintain a fine-grained control using the laser pointer.
        </div>
      </div>
      <div className="relative w-screen xl:w-[1280px]">
        <img className="w-full" src={`${basePath}/images/02.png`} alt="" />
        <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
      </div>
      <div className="w-screen space-y-4 px-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 xl:w-[1280px]">
        <div className="space-y-2 text-center sm:space-y-4">
          <div className="text-2xl font-bold tracking-tight lg:text-3xl">
            Identify hotspot locations.
          </div>
          <div className="text-lg font-medium text-zinc-400 xl:text-xl">
            Use code city to quickly locate software components with{" "}
            <span className="font-bold tracking-tight text-white">
              hotspots
            </span>{" "}
            (red).
          </div>
        </div>
        <div className="space-y-2 text-center sm:space-y-4">
          <div className="text-2xl font-bold tracking-tight lg:text-3xl">
            Compare software configurations.
          </div>
          <div className="text-lg font-medium text-zinc-400 xl:text-xl">
            Analyze the effect of different configurations on the software
            components properties - performance, energy, latency etc.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-screen xl:w-[1280px]">
          <img className="w-full" src={`${basePath}/images/03.png`} alt="" />
          <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
        </div>
      </div>
    </div>
  );
};

export default VRCode;
