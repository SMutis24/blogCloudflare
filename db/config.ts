import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
  },
});

export default defineDb({
  tables: { Comment },
});
