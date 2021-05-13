const express = require('express');
const path = require('path');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

// Initilizations
const app = express();

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('veiw engine', 'ejs');

// Middlewares
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'));

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/upload', (req, res) => {
    console.log(req.file);
    res.send('uploaded');
})

// Strart the server
app.listen(app.get('port'), () => {
    console.log('hola'); 
})