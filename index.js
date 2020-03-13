const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

let studentsList = [
  {
    id: 1,
    picture: '🌽',
    name: 'sonter',
    age: 18,
    point: 75,
    description:
      "I'm sonter from computer engineering A university. I'm 18 years old."
  },
  {
    id: 2,
    picture: '🥑',
    name: 'nat',
    age: 19,
    point: 78,
    description:
      "I'm nat from computer engineering B university. I'm 19 years old."
  },
  {
    id: 3,
    picture: '🥦',
    name: 'tle',
    age: 22,
    point: 97,
    description:
      "I'm tle from computer engineering C university. I'm 22 years old."
  }
];

app.get('/', (req, res) => {
  res.render('index', { studentsList });
});

app.get('/student/:id', (req, res) => {
  const id = req.params.id;
  const studentPage = studentsList.find(student => student.id === Number(id));
  res.render('student', { studentPage });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
