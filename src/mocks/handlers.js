import { graphql as graphqlRequest } from "graphql";
import { graphql } from "msw";
import { db } from "./db";

export const handlers = [
  graphql.query("GetAllJobs", async (req, res, ctx) => {
    const {
      jobPosition = "",
      location = "",
      contract = "",
      first = 12,
      skip = 0,
    } = req.variables;
    const query = `query GetAllJobs{ jobs(where:{jobPosition:{contains:"${jobPosition}"},location:{contains:"${location}"},contract:{contains:"${contract}"}},take:${first},skip:${skip}){
        id
        company
        logoBackground
        jobPosition 
        postedAt
        contract
        location
      } }`;
    const payload = await graphqlRequest(
      db.job.toGraphQLSchema(),
      query,
      null,
      null,
      req.variables
    );
    console.log(payload.data);
    return res(ctx.data(payload.data), ctx.errors(payload.errors));
  }),
];
