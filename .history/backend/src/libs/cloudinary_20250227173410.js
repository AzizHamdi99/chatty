import { v2 as cloudinary } from 'cloudinary'

import { config } from 'dotenv'
config()

cloudinary.config({
    cloud_name: process.env.COULDINARY_CLOUD_NAME,
    api_key: process.env.COULDINARY_API_KEY,
    api_secret: process.env.COULDINARY_API_SECRET

})

export default cloudinary