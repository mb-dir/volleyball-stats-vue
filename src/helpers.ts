import type { TeamPoints } from "./types";

const calculatePoints = (scores: { home: number; away: number }): number => {
  if (scores.home === 3 && scores.away === 2) {
    return 2;
  } else if (scores.home === 3) {
    return 3;
  }
  return 0;
};

const updateTablePoints = (
  tablePoints: TeamPoints,
  team: string,
  points: number,
  opposingTeam: string
): void => {
  tablePoints[team] += points;
  if (opposingTeam) {
    tablePoints[opposingTeam] += points === 2 ? 1 : 0;
  }
};

export { calculatePoints, updateTablePoints };
