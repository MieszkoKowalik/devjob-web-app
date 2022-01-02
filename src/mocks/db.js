import { factory, primaryKey } from "@mswjs/data";
import faker from "faker";
import blogr from "mocks/assets/blogr.svg";

faker.seed(123);

const generateSentenceArray = () => {
  const sentenceArray = new Array(4)
    .fill(null)
    .map((e) => (e = { element: faker.lorem.sentence() }));
  return sentenceArray;
};

export const db = factory({
  job: {
    id: primaryKey(() => faker.datatype.uuid()),
    company: () => faker.company.companyName(),
    jobPosition: () => faker.name.jobTitle(),
    location: () => faker.address.country(),
    contract: () =>
      faker.random.arrayElement(["Part Time", "Full Time", "Freelance"]),
    logoBackground: { hex: () => faker.internet.color() },
    logo: {
      url: () => blogr,
    },
    postedAt: () => "1d ago",
    website: () => "https://example.com",
    description: () => faker.lorem.paragraphs(),
    requirementsContent: () => faker.lorem.paragraphs(),
    requirementsList: () => generateSentenceArray(),
    roleContent: () => faker.lorem.paragraphs(),
    roleList: () => generateSentenceArray(),
  },
});
