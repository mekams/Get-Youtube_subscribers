const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to Local DATABASE (MongoDB compass Database)
// const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers"

//Connect to Cloud DATABASE (MongoDB Atlas Database) 
const DATABASE_URL = "mongodb+srv://root:kamran51@cluster0.j26qx1a.mongodb.net/subscribers"

mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()