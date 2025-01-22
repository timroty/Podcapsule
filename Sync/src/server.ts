import process from "node:process";
import * as path from "node:path";
import Bree from "bree";

import dotenv from "dotenv";
dotenv.config();

const bree = new Bree({
  root: path.join(__dirname, "jobs"),
  /**
   * We only need the default extension to be "ts"
   * when we are running the app with ts-node - otherwise
   * the compiled-to-js code still needs to use JS
   */
  defaultExtension: process.env.TS_NODE ? "ts" : "js",
  jobs: [
    {
      name: "UserPodcastSyncQueue",
      cron: "*/20 * * * *",
    },
    {
      name: "UserPodcastSync",
      cron: "*/20 * * * *",
    },
    {
      name: "PodcastSyncQueue",
      cron: "0 0 * * *",
    },
    {
      name: "PodcastSync",
      cron: "*/20 * * * *",
    },
  ],
});

console.log("Starting Sync Service.");

(async () => {
  await bree.start();
})();

console.log("Sync Service Started.");
