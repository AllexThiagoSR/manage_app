import { DataTypes, Model, QueryInterface } from "sequelize";
import IRole from "../../interfaces/IRole";

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IRole>>(
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
