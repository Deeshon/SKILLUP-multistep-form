import { StepProps } from "../types";

const Steps = ({ items, current }: StepProps) => {
  return (
    <div className="flex w-[58%] justify-between sm:block h-fit sm:w-fit">
      {items.map((item, key) => (
        <div className="flex w-[200px] h-[70px]">
          <div
            className={`step ${
              current && current === key + 1 ? "active-step" : ""
            }`}
          >
            {key + 1}
          </div>
          <div className="hidden sm:block ml-3">
            <p className="text-gray-300 text-xs">{item.title}</p>
            <p className="text-white font-bold text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
