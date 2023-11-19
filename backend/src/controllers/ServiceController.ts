import { Request, Response } from 'express';
import ServiceService from '../services/ServiceService';

export default class ServiceController {
  private service: ServiceService;

  constructor(s: ServiceService = new ServiceService()) {
    this.service = s;
  }

  public async create(req: Request, res: Response) {
    const { status, data } = await this.service.create(req.body);
    return res.status(status).json(data);
  }
}
