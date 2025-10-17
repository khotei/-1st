import { Elysia } from "elysia"

import {
  restaurantParamsSchema,
  restaurantQuerySchema,
} from "../../models/restaurants-model"
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
      return searchRestaurants(query)
    },
    {
      query: restaurantQuerySchema,
    },
  )
  .get(
    ":restaurantId",
    async ({ params }) => {
      return findRestaurant(params)
    },
    {
      params: restaurantParamsSchema,
    },
  )
