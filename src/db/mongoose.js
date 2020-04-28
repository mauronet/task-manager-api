const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_ENDPOINT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})