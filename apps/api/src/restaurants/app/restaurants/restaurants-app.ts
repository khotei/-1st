import { Elysia } from "elysia"

import {
  restaurantParamsSchema,
  restaurantQuerySchema,
} from "../../models/restaurnts/restaurants-model"
import {
  findRestaurant,
  searchRestaurants,
} from "../../services/restaurants-service.ts"
import { restaurantMenuApp } from "../restaurant-menus/restaurant-menus-app"

export const restaurantsApp = new Elysia({
  prefix: "/restaurants",
})
  .use(restaurantMenuApp)
  .get(
    "search",
    async ({ query }) => {
      return await searchRestaurants(query)
    },
    {
      query: restaurantQuerySchema,
    },
  )
  .get(
    ":restaurantId",
    async ({ params }) => {
      return await findRestaurant(params)
    },
    {
      params: restaurantParamsSchema,
    },
  )
