module.exports = function(sequelize, DataTypes) {

  const Priority = sequelize.define("Priority", {
    kind: DataTypes.STRING
  }, {
    tableName: 'priorities'
  });

Priority.associate = function(models) {
    Priority.hasMany(models.Card, { foreignKey: 'priorityID', as: 'Priority' });
  }

  return Priority;
};