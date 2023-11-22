import { PrismaClient } from '@prisma/client';
import Payment from '../interfaces/Payment';

export default class PaymentHistoryModel {
  private model = (new PrismaClient()).servicePaymentHistory;

  public async create(
    serviceId: number, paymentTypeId: number, paidValue: number
  ): Promise<Payment> {
    const payment = await this.model.create({
      data: {
        serviceId,
        paymentTypeId,
        paidValue,
      },
    });
    return payment;
  }
}
