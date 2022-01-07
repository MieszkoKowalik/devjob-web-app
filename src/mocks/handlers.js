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

  scalar IntType

  type List{
    element: String
  }
  input Filter{
    jobPosition: FilterType
    location: FilterType
    contract:FilterType
    id: IdFilter
  }
  input  IdFilter{
    eq:ItemId
  }
  input FilterType{
    eq: String
    matches:Matches
  }

  input Matches{
    pattern: String
  }
type Query {
    allJobs(filter:Filter, first:IntType, skip:IntType): [Job]
    job(filter:Filter): Job
  }
`);

function generateRoot({
  jobPosition = "",
  id = "",
  location = "",
  contract = "",
  first,
  skip,
}) {
  return {
    allJobs: () => {
      return db.job.findMany({
        where: {
          jobPosition: { contains: jobPosition },
          location: { contains: location },
          contract: { contains: contract },
        },
        take: first,
        skip: skip,
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
