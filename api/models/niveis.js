'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {foreignKey: 'turma_id'});
  };
  return Niveis;
};