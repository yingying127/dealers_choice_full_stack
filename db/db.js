const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack-db')

const Noodle = sequelize.define('noodle', {
    name: Sequelize.STRING,
    origin: Sequelize.STRING
})

const syncAndSeed = async() => {
    await sequelize.sync({ force: true })

    await Promise.all([
        Noodle.create({ name: 'Pasta', origin: 'Italy'}),
        Noodle.create({ name: 'Ramen', origin: 'Japan'}),
        Noodle.create({ name: 'Udon', origin: 'China'}),
        Noodle.create({ name: 'Soba', origin: 'Korea'}),
        Noodle.create({ name: 'Banh Pho', origin: 'Vietnam'})
    ])
}

module.exports = {
    syncAndSeed,
    models: {
        Noodle
    }
}