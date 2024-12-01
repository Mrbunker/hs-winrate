import { hsRecord } from "@/lib/fetch";
import { ListItem } from "./ListItem";

const List = ({ records }: { records: hsRecord[] }) => {
  return (
    <div className="px-4 ">
      <div className="divide-y space-y-4 divide-gray-100">
        {records.map((record, index) => (
          <ListItem key={`${record.finish_time}-${index}`} record={record} />
        ))}
      </div>
    </div>
  );
};

export default List;
