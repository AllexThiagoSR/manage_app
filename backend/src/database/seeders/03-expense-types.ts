import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'expense_types',
    [
      {
        name: 'Material',
      },
      {
        name: 'Manutenção',
      },
      {
        name: 'Pagamento de conta',
      },
      {
        name: 'Pagamento de empregado ',
      },
    ]
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.bulkDelete('expense_types', {}),
}
