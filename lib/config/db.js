import mongoose from 'mongoose'
import { mongoURL } from './url'

export const ConnectDB = async () => {
  await mongoose.connect(mongoURL)
  console.log('DB connected')
}
