'use strict';
const bcrypt = require('bcrypt');
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashPasswordAdmin = await bcrypt.hash("admin", 5);
    const hashPasswordVolunteer = await bcrypt.hash("volunteer", 5);
 
    const credentials = await queryInterface.bulkInsert('credentials', [
      {
        login: 'admin',
        password: hashPasswordAdmin,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'volunteer',
        password: hashPasswordVolunteer,
        role: 'VOLUNTEER',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true});
 
    await queryInterface.bulkInsert('users', [
      {
        surname: 'Petrov',
        name: 'Petr',
        patronymic: 'Petrovich',
        post: 'Admin',
        placeWorkOrStudy: 'SSTU',
        phone: '+78007006050',
        email: 'admin@mail.ru',
        credentialId: credentials[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: 'Ivanov',
        name: 'Ivan',
        patronymic: 'Ivanovich',
        post: 'Volunteer',
        placeWorkOrStudy: 'SSTU',
        phone: '+78007006051',
        email: 'volunteer@mail.ru',
        credentialId: credentials[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
 
    await queryInterface.bulkDelete('credentials', null, {});
  }
};
