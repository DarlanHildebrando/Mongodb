require('dotenv').config();
const mongoose = require('mongoose')

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const cluster = process.env.MONGO_CLUSTER
const db = process.env.MONGO_DB

