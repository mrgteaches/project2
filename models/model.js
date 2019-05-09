module.exports = function (sequelize, DataTypes) {
    var Terms = sequelize.define("Terms", {
      term: DataTypes.STRING,
      definition: DataTypes.STRING
    },
      { freezeTableName: true });
    return Terms;
  };
  