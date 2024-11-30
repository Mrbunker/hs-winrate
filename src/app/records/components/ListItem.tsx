import { hsRecord } from "@/app/utils/fetch";
import { timeFormat } from "@/app/utils";
import { Occupation } from "@/components/Occupation";

interface ListItemProps {
  record: hsRecord;
}

export const ListItem = ({ record }: ListItemProps) => {
  const win = record.result === 1;
  return (
    <div className="p-4 flex items-center">
      <div className="flex-1 flex items-center gap-3">
        <div className="flex items-center gap-3">
          <Occupation id={record.owner_occupation_id} />
          <div className={`text-xs ${win ? "text-green-500" : "text-red-500"}`}>
            {win ? "胜" : "负"}
          </div>
          <Occupation id={record.enemy_occupation_id} />
        </div>
        <span className="px-2 text-sm">{record.round}回合</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">
          {timeFormat(Number(record.finish_time))}
        </div>
      </div>
    </div>
  );
};
