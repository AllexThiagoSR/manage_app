import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'payments_status',
    [
      {
        name: 'Conta em aberto',
        description: 'Serviço sem nenhum pagamento registrado',
      },
      {
        name: 'Parcialmente pago',
        description: 'Pago apenas uma parte',
      },
      {
        name: 'Totalmente pago',
        description: 'Conta totalmente paga',
      }
    ]
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.bulkDelete('payments_status', {}),
}
