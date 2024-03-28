import multer from 'multer'
import { v4 } from 'uuid'
import { extname, resolve } from 'path'

// const multer = require ("multer");
// const { v4 } = require ("uuid");
// const { extname, resolve } = require ("path");

// module.exports = 

export default{
    storage: multer.diskStorage({
        destination: resolve( __dirname, '..', '..', 'Uploads' ),
        filename: (request, file, callback) => {
          return callback(null, v4() + extname(file.originalname))
        }
    })
}