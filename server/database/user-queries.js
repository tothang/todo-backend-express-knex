const knex = require("./connection.js");
const bcrypt = require('bcrypt');

async function getAuthUser(email, password) {
    const results = await knex('user').where({ email }).first();
    if (!results) {
        return false;
    }

    const isMatch = await bcrypt.compare(password, results.password);

    if (!isMatch) {
        return false;
    }

    return results;
}

async function get(id) {
    const results = await knex('user').where({ id });
    return results[0];
}

async function create(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const results = await knex('user')
        .insert({ name, email, password: hashedPassword }) // Removed incorrect `{}` around password
        .returning('*');

    return results[0];
}

async function update(id, properties) {
    const results = await knex('user').where({ id }).update({ ...properties }).returning('*');
    return results[0];
}

// delete is a reserved keyword
async function del(id) {
    const results = await knex('user').where({ id }).del().returning('*');
    return results[0];
}


module.exports = {
    get,
    create,
    update,
    delete: del,
    getAuthUser
}