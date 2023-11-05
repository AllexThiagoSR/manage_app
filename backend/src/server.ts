import App from './App';

const app = new App();

app.start(process.env.API_PORT || '3001');
