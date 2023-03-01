import Image from "next/image";
import { type FC } from "react";
import ReactMarkdown from "react-markdown";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import rehypePrism from "@mapbox/rehype-prism";
import demiGlaceSchema from "../../../staticData/images/demiglace_schema.png";
import { GithubOutlined } from "@ant-design/icons";
import Link from "next/link";

const codeSnippet = `
\`\`\`java
// MyClass.java
...
public void doMath() {
  double dblResult = Math.pow(4.2, 3);
  System.out.println(dblResult);
}
...
\`\`\`
`;

const callTree = `
\`\`\`xml
<!--call tree-->
<node class="main.java.components.MyClass" methodName="doMath" methodSignature="()V">
    <node class="java.lang.Math" methodName="pow" methodSignature="(DD)D" />
    <node class="java.io.PrintStream" methodName="println" methodSignature="(Ljava/lang/String;)V" />
</node>
\`\`\`
`;

const DemiGlace: FC = () => {
  return (
    <div className="w-full flex-1 space-y-10 bg-white pt-10 pb-20 text-black sm:pt-14 md:py-16 lg:py-24 ">
      <div className="m-auto max-w-screen-xl space-y-16">
        <div className="mb-16 flex justify-center text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              DemiGlace
            </h1>
            <div className="w-full px-8 text-center text-lg font-medium text-zinc-500 sm:text-xl md:max-w-screen-md md:text-2xl xl:text-3xl">
              is a tool for matching Java method signatures in bytecode form
              (fully qualified name + method descriptor) with the locations of
              the actual methods and method calls in the source code.
            </div>
          </div>
        </div>
        <div className="m-auto w-full max-w-screen-xl px-8 sm:px-12">
          <Image
            src={demiGlaceSchema}
            alt="picture displaying gesture control in VRCode"
          />
        </div>
        <div className="space-y-4">
          <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Motivation.
          </h1>
          <div className="w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-lg md:text-xl lg:text-2xl">
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
          <article className="prose w-full max-w-none px-8 sm:px-12">
            <ReactMarkdown rehypePlugins={[rehypePrism]}>
              {codeSnippet}
            </ReactMarkdown>
            <ReactMarkdown rehypePlugins={[rehypePrism]}>
              {callTree}
            </ReactMarkdown>
          </article>
          <div className="w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-lg md:text-xl lg:text-2xl">
            JProfiler is able to record the line number of method calls - if
            configured to do so. This would have made my task comparatively
            easy. Unfortunately, all measurements (hundreds of hours of
            profiling) were already done before realizing that the necessary
            option for recording line numbers was turned off.
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="px-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Solution.
          </h1>
          <div className="mx-0 w-full px-12 text-start text-lg font-medium text-zinc-500 md:max-w-screen-lg md:text-xl lg:text-2xl">
            DemiGlace takes a call tree xml and the path to the actual source
            code. It visits each call tree node and finds the{" "}
            <span className="font-bold tracking-tight text-black">
              exact locations
            </span>{" "}
            of the respective method calls and the method definitions by
            traversing the AST and generating the descriptor. An{" "}
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
            href={"https://github.com/vanHekthor/DemiGlace"}
          >
            GitHub <GithubOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemiGlace;
