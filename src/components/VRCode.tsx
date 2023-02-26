import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import vrCodePic01 from "../../staticData/images/01.png";
import vrCodePic02 from "../../staticData/images/02.png";
import vrCodePic03 from "../../staticData/images/03.png";

const VRCode: FC = () => {
  return (
    <div className="space-y-10 py-10 text-white sm:py-14 md:py-16 lg:py-24">
      <div className="mb-16 flex justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            VRCode
          </h1>
          <div className="w-full px-8 text-center text-lg font-medium text-zinc-400 sm:text-xl md:max-w-screen-md md:text-2xl xl:text-3xl">
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
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-md md:text-xl lg:text-2xl">
          Explore the control and data flows from program start to hotspot and
          vice versa. Compare execution paths between different program
          configurations.
        </div>
      </div>
      <div className="relative w-full xl:w-[1280px]">
        <Image
          src={vrCodePic01}
          alt="picture showing a typical VRCode workspace"
        />
        <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
      </div>
      <div className="space-y-4">
        <h1 className="px-12 text-3xl font-bold tracking-tight">
          Laser and gesture control.
        </h1>
        <div className="w-full px-12 text-start text-lg font-medium text-zinc-400 md:max-w-screen-md md:text-xl lg:text-2xl">
          Intuively manipulate windows with gestures.
          <br />
          Maintain a fine-grained control using the laser pointer.
        </div>
      </div>
      <div className="m-0! relative w-full xl:w-[1280px]">
        <Image
          src={vrCodePic02}
          alt="picture displaying gesture control in VRCode"
        />
        <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
      </div>
      <div className="w-full space-y-4 px-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 xl:w-[1280px]">
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
        <div className="relative w-full xl:w-[1280px]">
          <Image src={vrCodePic03} alt="picture showing Code City in VRCode" />
          <div className="absolute bottom-0 top-0 w-full shadow-[inset_0_0_30px_20px_black] sm:shadow-[inset_0_0_40px_27px_black] md:shadow-[inset_0_0_50px_34px_black] lg:shadow-[inset_0_0_60px_40px_black] xl:shadow-[inset_0_0_95px_62px_black]" />
        </div>
      </div>
      <div className="flex justify-center text-center">
        <Link
          className="flex gap-x-3 text-4xl font-bold tracking-tight hover:text-zinc-200 sm:text-4xl"
          href={"https://github.com/vanHekthor/VRCode"}
        >
          GitHub <GithubOutlined />
        </Link>
      </div>
    </div>
  );
};

export default VRCode;
