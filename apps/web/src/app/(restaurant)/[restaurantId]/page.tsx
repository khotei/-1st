import { findRestaurant } from "@/api/restaurants/restaurants-api"

export default async function RestaurantPage(
  props: PageProps<"/[restaurantId]">,
) {
  const restaurant = await findRestaurant({
    restaurantId: (await props.params).restaurantId,
  })

  console.log(restaurant)

  return <div>Hello</div>
}
