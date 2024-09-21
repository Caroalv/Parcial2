const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const users = [{ username: 'admin', password: bcrypt.hashSync('password', 10) }];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
