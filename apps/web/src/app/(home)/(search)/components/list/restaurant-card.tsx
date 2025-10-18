import NextLink from "next/link"

import {
  Badge,
  Button,
  Card,
  type CardBodyProps,
  type CardFooterProps,
  type CardRootProps,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@1st/components/chakra"
import { map } from "@1st/dash"
import { format } from "@1st/dash/time"

import type { SearchRestaurant } from "@/api/restaurants/restaurants-api-types"

type RestaurantCardProps = {
  restaurant: SearchRestaurant
  rootProps?: CardRootProps
  bodyProps?: CardBodyProps
  footerProps?: CardFooterProps
}
export const RestaurantCard = (
  props: RestaurantCardProps,
) => (
  <Card.Root w={"full"} {...props.rootProps}>
    <Card.Body {...props.bodyProps}>
      <HStack align="stretch" gap={4}>
        <Image
          alt={props.restaurant.name}
          objectFit="cover"
          src={props.restaurant.logoUrl}
          w={"1/2"}
        />
        <VStack align={"stretch"} justify={"stretch"}>
          <Card.Title fontSize={"2xl"}>
            {props.restaurant.name}
          </Card.Title>
          <VStack gap={2}>
            <Flex gap={2} wrap="wrap">
              {map(
                (availability) => (
                  <Badge
                    colorPalette={"orange"}
                    key={`${availability.startDate}-${availability.endDate}`}
                    suppressHydrationWarning
                  >
                    <HStack fontSize="xs" gap={1}>
                      <Text>
                        {format("eeeeee p")(
                          availability.startDate,
                        )}
                      </Text>
                      <Text>
                        {format("eeeeee p")(
                          availability.endDate,
                        )}
                      </Text>
                    </HStack>
                  </Badge>
                ),
                props.restaurant.availability,
              )}
              <Card.Description>
                {props.restaurant.description}
              </Card.Description>
            </Flex>
          </VStack>
        </VStack>
      </HStack>
    </Card.Body>
    <Card.Footer {...props.footerProps}>
      <Flex
        align={"flex-end"}
        gap={2}
        justify={"flex-end"}
        w={"full"}
      >
        <Button>Menu</Button>
        <Button>Reserve</Button>
        <Link asChild variant="underline">
          <NextLink href={`/${props.restaurant.id}`}>
            More &gt;
          </NextLink>
        </Link>
      </Flex>
    </Card.Footer>
  </Card.Root>
)
