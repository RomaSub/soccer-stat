export default {
  competitionsPagePath: () => "/competitions",
  teamsPagePath: () => "/teams",
  competitionCalendarPagePath: (id: number ) => `/competition/${id}`,
  teamCalendarPagePath: (id: number) => `/team/${id}`,
};
