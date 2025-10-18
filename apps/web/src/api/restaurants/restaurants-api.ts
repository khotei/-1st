import { isEmpty } from "@1st/dash"

import type {
  FindRestaurantParams,
  SearchRestaurantsQuery,
} from "@/api/restaurants/restaurants-api-types"
import { apiSDK } from "@/lib/api-sdk"

export const searchRestaurants = async (
  query: SearchRestaurantsQuery,
) => {
  const { data, error } =
    await apiSDK.restaurants.search.get({
      query: isEmpty(query) ? undefined : query,
    })

  if (error) {
    throw error
  }

  return data
}

export const findRestaurant = async (
  params: FindRestaurantParams,
) => {
  const { data, error } = await apiSDK
    .restaurants(params)
    .get()

  if (error) {
    throw error
  }

  return data
}
