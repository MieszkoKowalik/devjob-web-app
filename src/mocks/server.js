import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { db } from "./db";

export const server = setupServer(...handlers);

for (let i = 0; i < 100; i++) {
  db.job.create();
}
