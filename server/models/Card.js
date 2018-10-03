module.exports = function(sequelize, DataTypes) {

  const Card = sequelize.define("Card", {
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    created_by: { type: DataTypes.INTEGER },
    assigned_to: { type: DataTypes.INTEGER },
    deletedAt: { type : DataTypes.DATE, allowNull : true }
  }, {
    tableName : 'cards'
  });

  Card.associate = function(models) {
    Card.belongsTo(models.User, { foreignKey: 'created_by', as: 'Creator' });
    Card.belongsTo(models.User, { foreignKey: 'assigned_to', as: 'Developer' });
    Card.belongsTo(models.Priority, { foreignKey: 'priorityID', as: 'Priority' });
    Card.belongsTo(models.Status, { foreignKey: 'statusID', as: 'Status' });
  };

  return Card;

};