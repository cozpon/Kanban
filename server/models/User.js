module.exports = function(sequelize, DataTypes) {

  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : { isEmail: true }
    },
    resetPasswordToken : {
      type: DataTypes.STRING
    },
    resetPasswordExpires : {
      type: DataTypes.DATE
    },
  },
  {
    tableName: 'users'
  });

  User.associate = function(models) {
    User.hasMany(models.Card, { foreignKey: 'created_by', as: 'Cards' });
    User.hasMany(models.Card, { foreignKey: 'assigned_to', as: 'Tasks' });
  };

  return User;

};