import express from 'express';
import { router } from './routes/user.js';
// import { sequelize } from './db.js';
// import { user } from './models/user.js';
import session from 'express-session';
import randtoken from 'rand-token';
import winston from 'winston';
import winstonMysql from 'winston-mysql';
import expressWinston from 'express-winston';
import multer from 'multer';
// import { item } from './models/items.js';
import mysqldump from 'mysqldump';
import { spawn } from 'child_process';
import { config } from 'dotenv';
import * as tf from '@tensorflow/tfjs-node';
import cocoSsd from '@tensorflow-models/coco-ssd';
import busboy from 'busboy';
// import { predictor } from './predictorModel.js';
import * as faceapi from 'face-api.js';
import canvas from 'canvas';
import { router2 } from './routes/prediction.js';
import { sequelize } from './db.js';

const { Canvas, Image, ImageData } = canvas;
// @ts-ignore
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// predictor();

let modell;
cocoSsd
  .load()
  .then((lm) => {
    modell = lm;
  })
  .catch((error) => {
    console.error('Error loading model:', error);
  });
export { modell };

const app = express();
config({ path: './.env' });
app.use(express.json());
app.use(session({ secret: 'hell', cookie: { maxAge: 100 } }));
// const options_default = {
//   host: 'localhost',
//   user: 'root',
//   password: 'hello123',
//   database: 'newtemp',
//   table: 'sys_logs_default',
// };

// expressWinston.requestWhitelist.push('body');
// app.use(
//   expressWinston.logger({
//     transports: [
//       new winston.transports.File({
//         filename: './test.log',
//       }),
//       new winstonMysql(options_default),
//     ],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json(),
//     ),
//     meta: true,
//     msg: 'HTTP {{req.method}} {{req.url}}',
//     expressFormat: true,
//     colorize: true,
//     ignoreRoute: function (req, res) {
//       return false;
//     },
//   }),
// );

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  // await sequelize.sync({ force: true });
  await sequelize.sync();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// const { combine, timestamp, json } = winston.format;
// const logger = winston.createLogger({
//   level: 'info',
//   format: combine(timestamp(), json()),
//   transports: [new winston.transports.Console()],
// });

const options_default = {
  host: 'localhost',
  user: 'root',
  password: 'hello123',
  database: 'newtemp',
  table: 'sys_logs_default',
};
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    // or use: options_custom / options_json
    new winstonMysql(options_default),
  ],
});

setInterval(() => {

  let date = ' '+(new Date(Date.now()).toString()).slice(4, 15);
  let dir = './backup/dump'+date+'.sql';

  mysqldump({
    connection: {
      host: process.env.host,
      // @ts-ignore
      user: process.env.user,
      // @ts-ignore
      password: process.env.password,
      // @ts-ignore
      database: process.env.database,
    },
    dumpToFile: dir,
  });

  console.log("Backup successfull")
},1000)

app.use(router);
app.use(router2);

app.get('/', async (req, res) => {
  res.render('index.ejs');
});

const upload = multer({ dest: 'uploads/' });

const arr = upload.fields([{ name: 'avatar' }]);

app.post('/profile', arr, function (req, res, next) {

  console.log(req.files);
});

app.listen(process.env.port, async () => {
  console.log(`Listening at 5000`);
});
