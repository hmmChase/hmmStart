import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import apolloServer from './apolloServer';
// import jwt from 'jsonwebtoken';

const app = express();
const server = apolloServer();

// const whitelist = [
//   'http://localhost:8008',
//   'https://next-graphql-starter-git-master.hmmchase.now.sh'
// ];
const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_FRONTEND_URL
      : process.env.DEV_FRONTEND_URL
  // origin: (origin, callback) => {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // }
};

app.use(cors(corsOptions));
// app.use(helmet());
app.use(cookieParser());

// // Decode the JWT so we can get the user Id on each request
// app.use((req, res, next) => {
//   const { token } = req.cookies;

//   if (token) {
//     const { userId } = jwt.verify(token, process.env.JWT_SECRET);
//     // Put the userId onto the req for future requests to access
//     req.userId = userId;
//   }

//   next();
// });

// 2. Create a middleware that populates the user on each request
// app.use(async (req, res, next) => {
//   // if they aren't logged in, skip this
//   if (!req.userId) return next();
//   const user = await prisma.user({ where: { id: req.userId } });
//   req.user = user;
//   next();
// });

// cors: corsOptions }
server.applyMiddleware({ app, path: '/graphql', cors: corsOptions });

app.listen({ port: process.env.PORT || 4000 }, err => {
  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  );
});
