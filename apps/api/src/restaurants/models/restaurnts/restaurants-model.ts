import { z } from "@1st/dash/zod"
import { orm, schema } from "@1st/database/drizzle"

const restaurantSelectSchema = orm
  .createSelectSchema(schema.restaurants)
  .extend({
    id: z.guid(),
  })

export const restaurantQuerySchema = z.object({
  search: restaurantSelectSchema.shape.name
    .optional()
    .nullable(),
})

export const restaurantParamsSchema = z.object({
  restaurantId: restaurantSelectSchema.shape.id,
})
