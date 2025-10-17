import NextLink from "next/link"

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
  Link,
  VStack,
} from "@1st/components/chakra"
import { map } from "@1st/dash"

import type { SearchRestaurant } from "@/api/restaurants/restaurants-api-types"

type RestaurantsListProps = {
  restaurants: SearchRestaurant[]
}

export const Restaurants = (
  props: RestaurantsListProps,
) => {
  return (
    <VStack align="stretch" gap={4}>
      {map(
        (restaurant) => (
          <Card.Root
            flexDirection="row"
            key={restaurant.id}
            maxW="xl"
            overflow="hidden"
          >
            <Image
              alt={restaurant.name}
              objectFit="cover"
              src={restaurant.logoUrl}
              w="200px"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">
                  {restaurant.name}
                </Card.Title>
                <VStack gap={2}>
                  <Card.Description>
                    {restaurant.description}
                  </Card.Description>
                  <HStack>
                    {map(
                      (availability) => (
                        <Badge
                          key={`${availability.startDate}-${availability.endDate}`}
                          suppressHydrationWarning
                        >
                          {availability.startDate.toLocaleDateString()}{" "}
                          -{" "}
                          {availability.endDate.toLocaleDateString()}
                        </Badge>
                      ),
                      restaurant.availability,
                    )}
                  </HStack>
                </VStack>
              </Card.Body>
              <Card.Footer>
                <VStack align="stretch" gap={2} w="full">
                  <Flex gap={2}>
                    <Button>Menu</Button>
                    <Button>Reserve</Button>
                  </Flex>
                  <Flex justify="flex-end">
                    <Link asChild variant="underline">
                      <NextLink href={`/${restaurant.id}`}>
                        More &gt;
                      </NextLink>
                    </Link>
                  </Flex>
                </VStack>
              </Card.Footer>
            </Box>
          </Card.Root>
        ),
        props.restaurants,
      )}
    </VStack>
  )
}
