import { hsRecord } from "@/lib/fetch";
import { Occupation } from "@/components/Occupation";
import { timeFormat } from "@/lib/utils";
import Image from "next/image";

interface ListItemProps {
  record: hsRecord;
}

export const ListItem = ({ record }: ListItemProps) => {
  const win = record.result === 1;
  const finishTime = timeFormat(Number(record.finish_time));
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="text-md font-bold text-gray-500 mb-2 flex items-center justify-between">
        <div>{finishTime}</div>
      </div>

      <div className="py-2 flex-1 flex items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <Occupation id={record.owner_occupation_id} />
          <div className={`text-xs ${win ? "text-green-500" : "text-red-500"}`}>
            {win ? "胜" : "负"}
          </div>
          <Occupation id={record.enemy_occupation_id} />
        </div>
        <Image src={record.url} alt="rank" width={45} height={45} />
      </div>
    </div>
  );
};
