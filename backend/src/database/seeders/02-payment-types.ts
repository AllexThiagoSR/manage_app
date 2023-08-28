import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'payment_types',
    [
      {
        name: 'PIX',
        description: 'Uma conta paga utilizando pix',
      },
      {
        name: 'À Vista',
        description: 'Uma conta paga utilizando dinheiro',
      },
      {
        name: 'Transferência Bancária',
        description: 'Uma conta paga utilizando transferência bancária',
      }, 
    ]
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.bulkDelete('payment_types', {}),
}
