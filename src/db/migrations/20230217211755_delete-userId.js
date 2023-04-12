export const up = async (knex) => {
  await knex.schema.alterTable("messages", (table) => {
    table.integer("userId").notNullable();
    table.integer("nounouId").notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("messages");
};
