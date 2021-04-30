exports.up = function (knex) {
  return knex.schema.createTable("cohorts", (t) => {
    t.bigIncrements("id");
    t.string("name");
    t.text("members");
    t.text("imageUrl");
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cohorts");
};
