import { type AppType } from "next/dist/shared/lib/utils";
import ProjectsLayout from "~/components/ProjectsLayout";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps, router }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (router.pathname.startsWith("/projects")) {
    return (
      <ProjectsLayout>
        <Component {...pageProps} />
      </ProjectsLayout>
    );
  }
  return <Component {...pageProps} />;
};

export default MyApp;
