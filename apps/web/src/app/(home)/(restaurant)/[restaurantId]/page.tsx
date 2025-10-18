import { notFound } from "next/navigation"

import { findRestaurant } from "@/api/restaurants/restaurants-api"

export default async function RestaurantPage(
  props: PageProps<"/[restaurantId]">,
) {
  const restaurant = await findRestaurant({
    restaurantId: (await props.params).restaurantId,
  })

  if (!restaurant) {
    notFound()
  }

  return <div>Hello</div>
}
