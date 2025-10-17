import path from "node:path"

import { neonConfig } from "@neondatabase/serverless"
import { type Config, defineConfig } from "drizzle-kit"

import { Env } from "@1st/env"

neonConfig.poolQueryViaFetch = true

export const drizzleConfig = {
  casing: "snake_case",
  dbCredentials: {
    url: Env["DATABASE"] ?? "",
  },
  dialect: "postgresql",
  out: path.resolve(import.meta.dir, "../../migrations"),
  schema: path.resolve(
    import.meta.dir,
    "./drizzle-schema.ts",
  ),
  verbose: true,
} satisfies Config

export default defineConfig(drizzleConfig)
