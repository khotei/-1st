import { first } from "@1st/dash"
import type { z } from "@1st/dash/zod"
import { drizzle, orm, schema } from "@1st/database/drizzle"

import type {
  restaurantParamsSchema,
  restaurantQuerySchema,
} from "../models/restaurants-model.ts"

export const searchRestaurants = (
  query: z.infer<typeof restaurantQuerySchema>,
) =>
  drizzle
    .select()
    .from(schema.restaurants)
    .where(
      query.search
        ? orm.ilike(
            schema.restaurants.name,
            `${query.search}%`,
          )
        : undefined,
    )

export const findRestaurant = async (
  params: z.infer<typeof restaurantParamsSchema>,
) =>
  first(
    await drizzle
      .select()
      .from(schema.restaurants)
      .where(
        orm.eq(schema.restaurants.id, params.restaurantId),
      )
      .limit(1),
  ) ?? null
