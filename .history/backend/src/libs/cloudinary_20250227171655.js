import { V2 as cloudinary } from 'cloudinary'

import { config } from 'dotenv'
config()

cloudinary.config({
    cloud_name: process.env.COULDINARY_CLOUD_NAME,

})
