import * as express from 'express';
import * as cors from 'cors';
import router from './routers';

export default class App {
  public app: express.Express;

  constructor () {
    this.app = express();
    this.config();
    this.routes();
  }

  private config (): void {
    const access: express.RequestHandler = (_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(access);
  }

  private routes (): void {
    this.app.get('/', (_req, res) => res.status(200).json({ message: 'APP is runnning' }));
    this.app.use(router);
  }

  public start (PORT: number | string): void {
    this.app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
  }
}
