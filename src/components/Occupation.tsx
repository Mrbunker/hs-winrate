import { OCCUPATION_MAP } from "@/app/utils/constants";

interface OccupationProps {
  id: string;
}

export const Occupation = ({ id }: OccupationProps) => {
  return (
    <div className="relative">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="text-xs">{OCCUPATION_MAP[id]}</div>
      </div>
    </div>
  );
};
