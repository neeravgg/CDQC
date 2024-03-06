import * as dotenv from "dotenv"
import app from './src/app'

dotenv.config()

const startApp = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
  })
}

startApp()
