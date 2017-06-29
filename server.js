import express from 'express';

const app = express();

const port = 2000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  })
});

app.use(express.static('public'));

app.listen(port, () => console.log('Listening to port: ', port));
