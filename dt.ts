import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://adminjs:adminjs@localhost:5435/adminjs', {
  dialect: 'mysql',
})

export default sequelize