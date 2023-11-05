import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const main = async () => {
  await client.role.createMany({
    data: [
      {
        name: 'Dono',
        description: 'Dono do negócio',
      },
      {
        name: 'Colaborador',
        description: 'Um colaborador contratado',
      }
    ]
  });

  await client.paymentStatus.createMany({
    data: [
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
  });

  await client.paymentType.createMany({
    data: [
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
      }
    ]
  });

  await client.expenseType.createMany({
    data: [
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
        name: 'Pagamento de empregado',
      },
    ]
  });
}

main()
  .then(async () => {
    await client.$disconnect()
  }).catch(async (e) => {
    console.error(e)
    await client.$disconnect()
  })
