import type { schema } from "@1st/database/drizzle"

export type SelectRestaurant =
  typeof schema.restaurants.$inferSelect

export type InsertRestaurant =
  typeof schema.restaurants.$inferInsert
