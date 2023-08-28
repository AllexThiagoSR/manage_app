import IDBBase from "../../interfaces/IDBBase";
import { DataTypes, Model, QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IDBBase>>(
    'payment_types',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('payment_types'),
}
