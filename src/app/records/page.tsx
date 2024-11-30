import { Suspense } from "react";
import { fetchData } from "../utils/fetch";
import { timeFormat } from "../utils";
import { cookies } from "next/headers";
import List from "./components/List";

export default async function RecordsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("xcxtoken")?.value;

  if (!token) {
    return <div className="text-red-500">缺少 token 参数</div>;
  }

  const res = await fetchData({
    token,
  });
  const records = res.data.list;

  const startTime = Number(records[0].finish_time);
  const endTime = Number(records[records.length - 1].finish_time);
  const duration = `${timeFormat(startTime)} ~ ${timeFormat(endTime)}`;

  return (
    <Suspense fallback={<div className="text-gray-500">加载中...</div>}>
      {records.length > 0 && (
        <div className="space-y-4">
          <Card>
            <p>已获取 {records.length} 条记录</p>
          </Card>
          <Card>
            <p>时间：{duration}</p>
          </Card>
          <List records={records} />
        </div>
      )}
    </Suspense>
  );
}

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      {children}
    </div>
  );
};
