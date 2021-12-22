import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { db } from "./db";

export const worker = setupWorker(...handlers);

for (let i = 0; i < 24; i++) {
  db.job.create();
}
