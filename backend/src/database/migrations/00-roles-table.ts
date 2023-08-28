import { DataTypes, Model, QueryInterface } from "sequelize";
import IDBBase from "../../interfaces/IDBBase";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IDBBase>>(
    'roles',
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
        allowNull: true,
      }
    }
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('roles'),
}
