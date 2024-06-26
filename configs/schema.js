import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const JSONforms = pgTable("JSONforms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdAt: varchar("createdAt").notNull(),
});
