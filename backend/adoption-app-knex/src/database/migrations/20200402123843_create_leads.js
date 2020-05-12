exports.up = function(knex) {
  return knex.schema.createTable("pets", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("city").notNullable();
    table.string("uf").notNullable();
    table.string("address").notNullable();
    table.integer("zip").notNullable();
    table.integer("phone").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pets");
};
