import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState, type FC } from "react";

export type SectionEntryProps = {
  timeSpan: string;
  title: React.ReactNode;
  description: string[];
  rowClamp: string;
};

const parseRowClamp = (rowClampString: string) => {
  if (Number.isNaN(parseInt(rowClampString))) return 0;
  return parseInt(rowClampString);
};

const SectionEntry: FC<SectionEntryProps> = ({
  timeSpan,
  title,
  description,
  rowClamp,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const hasTooMuchItems = description.length > parseRowClamp(rowClamp);

  return (
    <>
      <div className="col-span-2 row-span-full hidden pr-2 tracking-tight text-zinc-600 md:block">
        {timeSpan}
      </div>
      <div className="col-span-12 font-semibold md:col-span-10">{title}</div>
      <div className="col-span-12 mb-2 text-zinc-500 md:col-span-10 md:hidden">
        {timeSpan}
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-3">
        <ul
          className={`list-disc pl-5 line-clamp-${
            hasTooMuchItems && !showFullDescription ? rowClamp : "none"
          }`}
        >
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {description.length > parseRowClamp(rowClamp) && (
          <div className="flex justify-end md:justify-start">
            <button
              className="flex items-center space-x-1 font-semibold text-zinc-500"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {!showFullDescription ? (
                <>
                  <span>see more</span>
                  <DownOutlined className="text-sm" />
                </>
              ) : (
                <>
                  <span>see less</span>
                  <UpOutlined className="text-sm" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionEntry;
