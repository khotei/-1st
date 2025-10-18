import {
  Field,
  HStack,
  Input,
} from "@1st/components/chakra"

import { submitFilter } from "@/app/(home)/(search)/lib/filter-action"
import { SubmitButton } from "@/components/submit-button"

type RestaurantsFilterProps = {
  query: {
    search?: string
  }
}

export const RestaurantsFilter = (
  props: RestaurantsFilterProps,
) => {
  return (
    <HStack align={"stretch"} asChild gap={2}>
      <form action={submitFilter}>
        <Field.Root>
          <Input
            defaultValue={props.query.search ?? ""}
            name="search"
            placeholder="Search"
          />
        </Field.Root>
        <SubmitButton>Apply</SubmitButton>
      </form>
    </HStack>
  )
}
