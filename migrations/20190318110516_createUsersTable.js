
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        tbl.increments(); // user id
        tbl.string('username', 128)
            .notNullable()
            .unique(); // username, cant be null, has to be unique
        tbl.string('password')
            .notNullable(); // password, cant be null
        tbl.timestamps(true, true); // timestamps: created, updated
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
