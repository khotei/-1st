import type { Column } from "drizzle-orm"
import * as DrizzleUtil from "drizzle-orm"
import { drizzle as createDrizzle } from "drizzle-orm/neon-http"
import { migrate as _migrate } from "drizzle-orm/neon-http/migrator"
import {
  reset as _reset,
  seed as _seed,
} from "drizzle-seed"
import * as DrizzleZod from "drizzle-zod"

import { assignAll, partial } from "@1st/dash"

import { drizzleConfig } from "./drizzle-config"
import * as schema from "./drizzle-schema"

export const drizzle = createDrizzle(
  drizzleConfig.dbCredentials.url,
  {
    casing: drizzleConfig.casing,
    schema,
  },
)

export const migrate = partial(_migrate, [
  drizzle,
  { migrationsFolder: drizzleConfig.out ?? "" },
])

export const reset = partial(_reset, [drizzle, schema])
export const seed = partial(_seed, [drizzle, schema])
export const orm = assignAll([{}, DrizzleUtil, DrizzleZod])

export { schema }
export type { Column }
