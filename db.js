import 'dotenv/config'
import postgres from 'postgres'

const { DATABASE_URL } = process.env
const url = `${DATABASE_URL}`   

export const sql = postgres(url, { ssl: 'require' }) 