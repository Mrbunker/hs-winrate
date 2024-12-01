import { OCCUPATION_MAP } from "@/lib/constants";

interface OccupationProps {
  id: string;
}

export const Occupation = ({ id }: OccupationProps) => {
  return (
    <div className="relative">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="text-xs">{OCCUPATION_MAP[id]}</div>
      </div>
    </div>
  );
};
