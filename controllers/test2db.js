import busboy from 'busboy';
import { sequelize } from '../db.js';
import { item } from '../models1/items.js';
import { model } from '../predictorModel.js';
import * as tf1 from '@tensorflow/tfjs-node';
import tf from '@tensorflow/tfjs';
import mobilenet from '@tensorflow-models/mobilenet';
// import tfnode from '@tensorflow/tfjs-node';
// import { personDetailsPredictor } from '../helper/genderAgeDetector.js';
import { createCanvas, Image, loadImage } from 'canvas';
import axios from 'axios';
import { modell } from '../index.js';

export const predict = (req, res) => {
  if (!model) {
    res.send('No model loaded');
    return;
  }

  const bb = busboy({ headers: req.headers });
  // console.log(req.headers);
  bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const buffer = [];
    console.log(file + 'hello');
    file.on('data', (data) => {
      buffer.push(data);
    });
    console.log('-2');
    file.on('end', async () => {
      // * Run Object Detection
      const image = tf1.node.decodeImage(Buffer.concat(buffer));
      console.log('1');
      const predictions = await model.detect(image, 3, 0.25);
      console.log('2');
      // res.json({
      //   predictions,
      //   image: buffer
      // });
      res.send('Its a ' + predictions[0].class);
      // console.log(Buffer.concat(buffer));
      // if (predictions[0].class == 'person') {
      //   genderAgePredictor(image);
      //   // console.log(image)
      // }
    });
  });
  req.pipe(bb);
};

export const predict2 = async (req, res) => {
  const bb = busboy({ headers: req.headers });

  bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const buffer = [];
    file.on('data', (data) => {
      buffer.push(data);
    });
    file.on('end', async () => {
      // * Run Object Detection
      console.log('hello');
      const image = tf1.node.decodeImage(Buffer.concat(buffer));
      const mobilenetModel = await mobilenet.load();
      // @ts-ignore
      const predictions = await mobilenetModel.classify(image);
      console.log('Classification Results:', predictions);
    });
  });
  req.pipe(bb);
};

export const predictThroughURL = async (req, res) => {
  try {
    // Fetch image data from URL
    const response = await axios.get(req.body.url, {
      responseType: 'arraybuffer',
    });
    const buffer = Buffer.from(response.data, 'binary');

    // Decode image using canvas
    const image = await loadImage(buffer);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Convert image to TensorFlow tensor
    const tensor = tf.browser.fromPixels(canvas);

    // Make predictions
    const predictions = await modell.detect(tensor);  

    // if (predictions[0].class == 'person') {
    //   personDetailsPredictor(req.body.url,res);
    // }
    // else {
      res.json(predictions); 
    // }
  } catch (error) {
    console.error('Error in :', error);
    res.send('error');
  }
};
