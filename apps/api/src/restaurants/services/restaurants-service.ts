import { first } from "@1st/dash"
import type { z } from "@1st/dash/zod"
import { drizzle, orm, schema } from "@1st/database/drizzle"

import { sqlLike } from "../../common/lib/sql"
import type {
  restaurantParamsSchema,
  restaurantQuerySchema,
} from "../models/restaurnts/restaurants-model"

export const searchRestaurants = async (
  query: z.infer<typeof restaurantQuerySchema>,
) =>
  await drizzle
    .select()
    .from(schema.restaurants)
    .where(sqlLike(schema.restaurants.name)(query.search))
    .limit(10)
    .offset(0)

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
  )
