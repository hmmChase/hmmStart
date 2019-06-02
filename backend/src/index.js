import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import apolloServer from './apolloServer';
import logger from './utils/logger';

const app = express();
const server = apolloServer();

const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === 'production'
      ? [
          process.env.PROD_FRONTEND_URL,
          'https://next-graphql-starter-git-working.hmmchase.now.sh/'
        ]
      : process.env.DEV_FRONTEND_URL
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') app.use(logger);

server.applyMiddleware({ app, path: '/graphql', cors: corsOptions });

app.listen({ port: process.env.PORT || 4000 }, err => {
  // console.log('\n'.repeat(99));

  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  );
});
