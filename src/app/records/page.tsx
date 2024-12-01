import { Suspense } from "react";
import { cookies } from "next/headers";
import { timeFormat } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import List from "./components/List";
import { Tabs } from "./components/Tabs";
import { GAME_MODES, type Mode } from "@/lib/constants";

export default async function RecordsPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("xcxtoken")?.value;

  if (!token) {
    return <div className="text-red-500">缺少 token 参数</div>;
  }

  const mode = (Number((await searchParams).mode) as Mode) || GAME_MODES.WILD;

  const res = await fetchData({
    token,
    params: {
      mode,
      page_size: 10,
      page: 1,
    },
  });
  const records = res?.data?.list ?? [];

  const startTime = Number(records[0].finish_time);
  const endTime = Number(records[records.length - 1].finish_time);
  const duration = `${timeFormat(startTime)} ~ ${timeFormat(endTime)}`;

  return (
    <Suspense fallback={<div className="text-gray-500">加载中...</div>}>
      {records.length > 0 && (
        <div className="space-y-4">
          <Header length={records.length} duration={duration} />

          <List records={records} />
        </div>
      )}
    </Suspense>
  );
}

const Header = ({ length, duration }: { length: number; duration: string }) => {
  return (
    <div className="bg-white p-4 min-h-20">
      <div className="flex justify-between hidden">
        <p>已获取 {length} 条记录</p>
        <p>时间：{duration}</p>
      </div>
      <Tabs />
    </div>
  );
};
