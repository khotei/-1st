import { VStack } from "@1st/components/chakra"
import { map } from "@1st/dash"

import type { SearchRestaurant } from "@/api/restaurants/restaurants-api-types"
import { RestaurantCard } from "@/app/(home)/(search)/components/list/restaurant-card"

type RestaurantsListProps = {
  restaurants: SearchRestaurant[]
}

export const RestaurantList = (
  props: RestaurantsListProps,
) => {
  return (
    <VStack
      align="stretch"
      gap={4}
      h={"full"}
      overflow={"auto"}
    >
      {map(
        (restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ),
        props.restaurants,
      )}
    </VStack>
  )
}
