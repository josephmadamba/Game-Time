'use strict'
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    date: DataTypes.STRING,
    day: DataTypes.INTEGER,
    time: DataTypes.STRING,
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    address: DataTypes.STRING,
    description: DataTypes.STRING
  }, {})
  Game.associate = function (models) {
    models.User.hasMany(Game, { foreignKey: 'user_id', sourceKey: 'id' })
    Game.belongsTo(models.User, { foreignKey: 'user_id', sourceKey: 'id' })

    Game.belongsToMany(models.User, {
      through: 'GameJoinedUser',
      as: 'users',
      foreignKey: 'game_id'
    })
  }
  return Game
}
