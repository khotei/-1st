import { Box, HStack } from "@1st/components/chakra"

import { searchRestaurants } from "@/api/restaurants/restaurants-api"
import { RestaurantsFilter } from "@/app/(home)/(search)/components/filter/restaurants-filter"
import { RestaurantList } from "@/app/(home)/(search)/components/list/restaurant-list"

export default async function Home(props: PageProps<"/">) {
  const query = await props.searchParams
  const restaurants = await searchRestaurants(query)

  return (
    <HStack
      align="stretch"
      as="main"
      gap={10}
      h={"full"}
      justify={"stretch"}
    >
      <Box
        bg={"gray.300"}
        borderRadius={"md"}
        my={6}
        overflow={"hidden"}
        p={4}
        w={"600px"}
      >
        <RestaurantList restaurants={restaurants} />
      </Box>
      <Box flexGrow={1} my={6}>
        <RestaurantsFilter query={query} />
      </Box>
    </HStack>
  )
}
