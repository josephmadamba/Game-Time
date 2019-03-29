'use strict'
module.exports = (sequelize, DataTypes) => {
  const GameJoinedUser = sequelize.define('GameJoinedUser', {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {})
  GameJoinedUser.associate = function (models) {
    // associations can be defined here
    models.User.belongsToMany(models.Game, { through: GameJoinedUser, onDelete: 'cascade' })
    models.Game.belongsToMany(models.User, { through: GameJoinedUser, onDelete: 'cascade' })
  }
  return GameJoinedUser
}
