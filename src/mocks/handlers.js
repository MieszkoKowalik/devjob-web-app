import { graphql as graphqlRequest, buildSchema } from "graphql";
import { graphql } from "msw";
import { db } from "./db";

const schema = buildSchema(`
  type Job{
    id:String
    company:String
    logoBackground:String
    jobPosition:String
    location:String
    logo: Logo
    postedAt:String
    contract:String
  }  
  type Logo{
    url: String
  }
  input Filter{
    jobPosition: FilterType
    location: FilterType
  }
  input FilterType{
    eq: String
    matches:Matches
  }
  input Matches{
    pattern: String
  }
type Query {
    allJobs(filter:Filter): [Job]
  }
`);

function generateRoot({ jobPosition = "" }) {
  return {
    allJobs: () => {
      return db.job.findMany({
        where: { jobPosition: { contains: jobPosition } },
      });
    },
  };
}

export const handlers = [
  graphql.operation(async (req, res, ctx) => {
    const root = generateRoot(req.variables);
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
