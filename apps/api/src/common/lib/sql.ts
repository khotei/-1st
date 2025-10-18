import { type Column, orm } from "@1st/database/drizzle"

export const sqlLike =
  (column: Column) => (search: string | null | undefined) =>
    search ? orm.ilike(column, `${search}%`) : undefined
