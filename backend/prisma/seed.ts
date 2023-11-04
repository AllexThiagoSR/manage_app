import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const main = async () => {
  await client.role.createMany({
    data: []
  });
}

main()
  .then(async () => {
    await client.$disconnect()
  }).catch(async (e) => {
    console.error(e)
    await client.$disconnect()
  })
