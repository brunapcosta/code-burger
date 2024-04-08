// Use __dirname conforme necessário


// const multer = require ("multer");
// const { v4 } = require ("uuid");
// const { extname, resolve } = require ("path");

// module.exports = 

import multer from 'multer'
import { v4 } from 'uuid'
import { extname, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default{
    storage: multer.diskStorage({
        destination: resolve( __dirname, '..', '..', 'Uploads' ),
        filename: (request, file, callback) => {
          return callback(null, v4() + extname(file.originalname))
        }
    })
}