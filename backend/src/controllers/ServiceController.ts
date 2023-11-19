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

  public async getById(req: Request, res: Response) {
    const { status, data } = await this.service.getById(Number(req.params.id));
    return res.status(status).json(data);
  }

  public async getAll(req: Request, res: Response) {
    const { status, data } = await this.service.getAll();
    return res.status(status).json(data);
  }
}
