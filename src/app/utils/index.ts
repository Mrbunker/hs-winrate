export const timeFormat = (time: number) => {
  // 1732436065000 -> 2024/11/30 10:14:25
  return new Date(time).toLocaleString();
};

export const setCookie = async (
  key: string,
  value: string,
  expires?: number
) => {
  document.cookie = `${key}=${value};expires=${expires}`;
};
