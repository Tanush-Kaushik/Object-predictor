// import faceapi from 'face-api.js';
// import canvas from 'canvas';

// export const personDetailsPredictor = async (url,res) => {

//   await faceapi.nets.ssdMobilenetv1.loadFromDisk('./helper/weights');
//   await faceapi.nets.faceLandmark68Net.loadFromDisk('./helper/weights');
//   await faceapi.nets.faceRecognitionNet.loadFromDisk('./helper/weights');
//   await faceapi.nets.faceExpressionNet.loadFromDisk('./helper/weights');
//   await faceapi.nets.tinyFaceDetector.loadFromDisk('./helper/weights');
//   await faceapi.nets.ageGenderNet.loadFromDisk('./helper/weights');
//   // console.log('Models loaded');

//     try {
//       const img = await canvas.loadImage(
//         url,
//       );
//       const detections = await faceapi
//         .detectSingleFace(img)
//         .withFaceLandmarks()
//         .withFaceDescriptor()
//         .withAgeAndGender();

//       res.json({ detections });
//     } catch (error) {
//       console.error('Error detecting faces:', error);
//       res.status(500).json({ error: 'Failed to detect faces' });
//     }
// };
