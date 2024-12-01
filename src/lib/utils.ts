export const timeFormat = (time: number) => {
  return new Date(time).toLocaleString("zh-CN", { hour12: false });
};

export const setCookie = async (
  key: string,
  value: string,
  expires?: number
) => {
  document.cookie = `${key}=${value};expires=${expires}`;
};
