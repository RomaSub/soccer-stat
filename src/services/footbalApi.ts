import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4",
    prepareHeaders: headers => {
      const token = "34f93167f85e4ca78c205990c556569e";
      if (token) headers.set("X-Auth-Token", token);
      return headers;
    }
  }),
  endpoints: builder => ({
    getTeams: builder.query({
      query: () => "teams"
    }),
    getTeamMatches: builder.query({
      query: id => `teams/${id}/matches`
    }),
    getCompetitions: builder.query({
      query: () => "competitions"
    }),
    getCompetitionMatches: builder.query({
      query: ({ id, dateFrom, dateTo }) => {
        let url = `competitions/${id}/matches`;
        if (dateFrom && dateTo) url += `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
        return url;
      }
    })
  })
});

const {
  useGetTeamsQuery,
  useGetCompetitionsQuery,
  useGetCompetitionMatchesQuery,
  useGetTeamMatchesQuery
} = footballApi;

export {
  useGetTeamsQuery as getTeams,
  useGetCompetitionsQuery as getCompetitions,
  useGetCompetitionMatchesQuery as getCompetitionMatches,
  useGetTeamMatchesQuery as getTeamMatches
};
