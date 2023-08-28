import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'roles',
    [
      {
        name: 'Dono',
        description: 'Dono do negócio'
      },
      {
        name: 'Administrador/Desenvolvedor',
        description: 'Adiministrador do negócio'
      },
      {
        name: 'Empregado'
      }
    ]
  )
}
