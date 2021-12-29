import { graphql as graphqlRequest, buildSchema } from "graphql";
import { graphql } from "msw";
import { db } from "./db";

const schema = buildSchema(`
  type Job{
    id:ID
    company:String
    logoBackground:Color
    jobPosition:String
    location:String
    logo: Logo
    postedAt:String
    contract:String
    description:String
    requirementsContent:String
    requirementsList:[List]
    roleContent:String
    roleList:[List]
    website:String
  }  
  type Color{
    hex:String
  }
  type Logo{
    url: String
  }
  scalar ItemId

  type List{
    element: String
  }
  input Filter{
    jobPosition: FilterType
    location: FilterType
    id:FilterType
  }
  input FilterType{
    eq: ItemId
    matches:Matches
  }
  input Matches{
    pattern: String
  }
type Query {
    allJobs(filter:Filter): [Job]
    job(filter:Filter): Job
  }
`);

function generateRoot({ jobPosition = "", id = "" }) {
  return {
    allJobs: () => {
      return db.job.findMany({
        where: { jobPosition: { contains: jobPosition } },
      });
    },
    job: () => {
      return db.job.findFirst({
        where: { id: { equals: id } },
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
