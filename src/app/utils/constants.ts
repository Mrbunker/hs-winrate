export const OCCUPATION_MAP: { [key: string]: string } = {
  "2": "德鲁伊",
  "4": "法师",
  "5": "骑士",
  "6": "牧师",
  "7": "盗贼",
  "8": "萨满",
  "9": "术士",
  "14": "恶魔猎手",
};

export const GAME_MODES = {
  STANDARD: 1,
  WILD: 2,
} as const;

export const API_CONFIG = {
  BASE_URL: "https://webapi.blizzard.cn",
  RECORD_PATH: "/hs-user-record-api-server/api/web/record",
  DEFAULT_PAGE_SIZE: 10,
};
