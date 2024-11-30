export type WinRateStats = {
  occupationId: string;
  occupationName: string;
  winRate: string;
  totalGames: number;
  wins: number;
};

export type MatchupStats = {
  ownerOccupation: string;
  enemyOccupation: string;
  winRate: string;
  totalGames: number;
  wins: number;
};
