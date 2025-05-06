import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_ZMYE26JFnrLQ@ep-flat-cloud-a4hhb9yi-pooler.us-east-1.aws.neon.tech/genna-ai?sslmode=require",
  },
});
