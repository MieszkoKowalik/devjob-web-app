import { factory, primaryKey } from "@mswjs/data";
import faker from "faker";
import blogr from "mocks/assets/blogr.svg";

faker.seed(123);
export const db = factory({
  job: {
    id: primaryKey(() => faker.datatype.uuid()),
    company: () => faker.company.companyName(),
    jobPosition: () => faker.name.jobTitle(),
    location: () => faker.address.country(),
    contract: () =>
      faker.random.arrayElement(["Part Time", "Full Time", "Freelance"]),
    logoBackground: () => faker.internet.color(),
    logo: {
      url: () => blogr,
    },
    postedAt: () => "1d ago",
  },
});
