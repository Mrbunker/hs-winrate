"use server";

import { API_CONFIG, GAME_MODES } from "./constants";

export type hsRecord = {
  owner_occupation_id: string;
  enemy_occupation_id: string;
  /** 1胜利，0失败 */
  result: 1 | 0;
  finish_time: number;
  round: number;
  enemy_tag: string;
  score: number;
  url: string;
  extra_url_back: string;
  is_legend: boolean;
};

export type hsData = {
  data: {
    list: hsRecord[];
  };
};

const { BASE_URL, RECORD_PATH } = API_CONFIG;
const recordApi = `${BASE_URL}${RECORD_PATH}`;

type Params = {
  /** 1标准，2狂野 */
  mode: (typeof GAME_MODES)[keyof typeof GAME_MODES];
  page_size: number;
  page: number;
};

const defParams: Params = {
  mode: GAME_MODES.WILD,
  page_size: API_CONFIG.DEFAULT_PAGE_SIZE,
  page: 1,
};

export const fetchData = async ({
  params,
  token,
}: {
  params?: Params;
  token: string;
}): Promise<hsData> => {
  try {
    const url = new URL(recordApi);
    const finalParams = { ...defParams, ...params };
    Object.entries(finalParams).forEach(([key, value]) =>
      url.searchParams.set(key, String(value))
    );

    const res = await fetch(url, {
      method: "GET",
      headers: { xcxtoken: token },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("获取数据失败:", error);
    throw error;
  }
};

export const fetchMultiPages = async (token: string, pages: number) => {
  if (pages <= 0 || pages > 10) {
    throw new Error("页数必须在1-10之间");
  }

  const allData: hsRecord[] = [];
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  for (let page = 1; page <= pages; page++) {
    try {
      console.log(`正在获取第 ${page} 页数据...`);
      const res = await fetchData({
        params: {
          ...defParams,
          page,
        },
        token,
      });

      if (res?.data?.list) {
        allData.push(...res.data.list);
      }

      await delay(1000);
    } catch (error) {
      console.error(`获取第 ${page} 页数据失败:`, error);
    }
  }

  return allData;
};
