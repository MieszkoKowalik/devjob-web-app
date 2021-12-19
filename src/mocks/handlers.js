import { graphql as graphqlRequest, buildSchema } from "graphql";
import { graphql } from "msw";

const schema = buildSchema(`
  type Job {
      company: String,
      jobposition: String,
  }
  type Query{ 
    allJobs:[Job!]!,
    job:Job}
`);
const root = {
  allJobs: () => [
    { company: () => "company name", jobposition: () => "position" },
    { company: () => "company name", jobposition: () => "position" },
  ],

  job: () => ({
    company: () => "company name",
    jobposition: () => "position",
  }),
};

export const handlers = [
  graphql.operation(async (req, res, ctx) => {
    const payload = await graphqlRequest(
      schema,
      req.body.query,
      root,
      null,
      req.variables
    );
    return res(ctx.data(payload.data), ctx.errors(payload.errors));
  }),
];
