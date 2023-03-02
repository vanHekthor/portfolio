import { type FC } from "react";

export type ResumeSectionProps = {
  cols: number;
  children?: React.ReactNode;
};

const ResumeSection: FC<ResumeSectionProps> = ({ cols, children }) => {
  return <div className={`grid grid-cols-${cols}`}>{children}</div>;
};

export default ResumeSection;
