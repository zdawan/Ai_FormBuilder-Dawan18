import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI_owner:dAyBg0xuIq6Y@ep-frosty-hall-a2a0mhtj.eu-central-1.aws.neon.tech/fuckbuilder?sslmode=require",
  },
});
