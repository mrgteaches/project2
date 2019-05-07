module.exports = function(sequelize, DataTypes) {
  var inputData = sequelize.define("inputData", {
    question: DataTypes.STRING,
    answer: DataTypes.TEXT
  });
  return inputData;
};
