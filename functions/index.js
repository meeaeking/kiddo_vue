import {functions} from 'firebase-functions';
import {cors} from 'cors';
import {gcs} from '@google-cloud/storage';
import {Busboy} from 'busboy';
import {os} from 'os';
import {path} from 'path';
// const cors = require('cors')({origin: true});
// const gcs = require('@google-cloud/storage')();
// const Busboy = require('busboy');
// const os = require('os');
// const path = require('path');
// const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(500).json({
        message: "Not allowed"
      });
    }
    const busboy = new Busboy({headers: req.headers});
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = {file: filepath, type: mimetype};
    });

    busboy.on('finish', () => {
      const bucket = gcs.bucket('kiddo-images.appspot.com');
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      }).then((err, uploadedFile) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        }
        res.status(200).json({
          message: 'It worked!'
        });
      });
    });
  });
    
  
});
