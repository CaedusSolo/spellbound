import dotenv from 'dotenv'

dotenv.config({
    path: "../../../.env"
})

const key = process.env.REACT_APP_SITE_KEY 

export default key