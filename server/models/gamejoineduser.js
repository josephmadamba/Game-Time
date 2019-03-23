'use strict'
module.exports = (sequelize, DataTypes) => {
  const GameJoinedUser = sequelize.define('GameJoinedUser', {

  }, {})
  GameJoinedUser.associate = function (models) {
    // associations can be defined here
    models.User.belongsToMany(models.Game, { through: GameJoinedUser })
    models.Game.belongsToMany(models.User, { through: GameJoinedUser })
  }
  return GameJoinedUser
};
