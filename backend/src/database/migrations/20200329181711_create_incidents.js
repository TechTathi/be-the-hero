
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable(); /** Referente ao ID da ong da tabela (create_ongs) */

        table.foreign('ong_id').references('id').inTable('ongs'); /** Pega o valor que queremos de outra tabela (relacional) */
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
