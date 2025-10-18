import { Alert } from "@1st/components/chakra"

export default function RestaurantNotFound() {
  return (
    <Alert.Root>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Not Found :(</Alert.Title>
        <Alert.Description>
          Restaurant not found.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
