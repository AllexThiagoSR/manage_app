import IDBBase from "../../interfaces/IDBBase";
import { QueryInterface, Model, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IDBBase>>(
    'payments_status',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('payments_status'),
}
