import { hsRecord } from "@/app/utils/fetch";
import { ListItem } from "./ListItem";

const List = ({ records }: { records: hsRecord[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="max-h-[600px] overflow-y-auto">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {records.map((record, index) => (
            <ListItem key={`${record.finish_time}-${index}`} record={record} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
