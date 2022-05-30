import './common/env';
import Server from './common/server';
import routes from './routes';
import { connectDB } from './common/database';

connectDB().then(
  () => { },
  () => { }
);

export default new Server()
  .router(routes)
  .listen(parseInt(process.env.PORT));
