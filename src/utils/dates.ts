import {
  COEFFICIENT_THE_DAY_BEFORE_POINT,
  FIRST_SEASON_DAY_POINTS,
  SEASONS_MONTHS_INDEXES,
  SECOND_SEASON_DAY_POINTS,
} from "./constants";

export const formatDate = (date: Date, withTime?: boolean): string | null => {
  return (
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: withTime ? "short" : undefined,
    })?.format(date) || null
  );
};

export const calculateDaysDifference = (date: Date) => {
  const differenceInTime = new Date().getTime() - date.getTime();
  return Math.round(differenceInTime / (1000 * 3600 * 24));
};

export const calculatePoints = () => {
  const today = new Date();
  const currentMonthIndex = today.getMonth();
  const seasonIndexes = SEASONS_MONTHS_INDEXES.find((indexes) =>
    indexes.includes(currentMonthIndex)
  );
  let currentDaysNumber = 0;
  if (seasonIndexes[0] === currentMonthIndex) {
    currentDaysNumber = today.getDate();
  } else {
    currentDaysNumber = calculateDaysDifference(
      new Date(today.getFullYear(), seasonIndexes[0])
    );
  }
  if (currentDaysNumber === 1) {
    return FIRST_SEASON_DAY_POINTS;
  }
  if (currentDaysNumber === 2) {
    return SECOND_SEASON_DAY_POINTS;
  }
  let dayBeforePoints = FIRST_SEASON_DAY_POINTS;
  let yesterdayPoints = SECOND_SEASON_DAY_POINTS;
  let points = SECOND_SEASON_DAY_POINTS;
  for (let i = 0; i <= currentDaysNumber - 2; i++) {
    const addingPoints =
      yesterdayPoints + dayBeforePoints * COEFFICIENT_THE_DAY_BEFORE_POINT;
    points += addingPoints;
    dayBeforePoints = yesterdayPoints;
    yesterdayPoints = addingPoints;
  }
  return points;
};
