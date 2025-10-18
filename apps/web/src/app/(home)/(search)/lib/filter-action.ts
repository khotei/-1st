"use server"

import { redirect } from "next/navigation"

import { z } from "@1st/dash/zod"

import { buildQueryString } from "@/lib/query-builder.ts"

export const submitFilter = async (formData: FormData) => {
  const queryString = buildQueryString(
    await z
      .object({
        search: z.string().optional(),
      })
      .parseAsync(Object.fromEntries(formData)),
  )

  return redirect(`?${queryString}`)
}
