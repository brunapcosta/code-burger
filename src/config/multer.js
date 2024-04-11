
const multer = require("multer");
const { v4 } = require("uuid");
const { extname, resolve } = require("path");

// import multer from 'multer'
// import { v4 } from 'uuid'
// import { extname, dirname, resolve } from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

module.exports = {
    storage: multer.diskStorage({
        destination: resolve( __dirname, '..', '..', 'Uploads' ),
        filename: (request, file, callback) => {
          return callback(null, v4() + extname(file.originalname))
        }
    })
}