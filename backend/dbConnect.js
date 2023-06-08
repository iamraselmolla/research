const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://3plwarehouseservicez:zZTZ6PzvqNlSldod@cluster0.pmxzwjj.mongodb.net/3plwarehouseservicez?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`Connected to Database`)
});

connection.on('error', (err) => {
    console.log(
        'MongoDB connection error. Please make sure MongoDB is running. ' + err
    );
    process.exit();
});

module.exports = connection;