'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Kaique Denobi Felipe',
        ativo: true,
        email: 'kaique.d.felipe@hotmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'John Doe',
        ativo: true,
        email: 'kaique.d.felipe@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fabric Logic',
        ativo: true,
        email: 'fabric@hotmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
