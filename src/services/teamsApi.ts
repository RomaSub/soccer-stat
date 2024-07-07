import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "https://api.football-data.org/v4/",
    baseUrl: "/api/v4",
    prepareHeaders: headers => {
      //const token = process.env.REACT_APP_FOOTBALL_API_TOKEN;
      const token = "34f93167f85e4ca78c205990c556569e";
      if (token) headers.set("X-Auth-Token", token);
      return headers;
    }
  }),
  endpoints: builder => ({
    getTeams: builder.query({
      query: () => "teams"
    })
  })
});

const { useGetTeamsQuery } = teamsApi;

export { useGetTeamsQuery as getTeams };
