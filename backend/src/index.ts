import express from 'express';
// import path from 'path';
//
const app = express();
const FRONTEND_URL = 'http://localhost:3000';
// Changed port to 3001. 3000 is taken up by react.
const port = 3001;

app.use(express.urlencoded({ extended: true }));

// Outputs when someone tries to create a lobby. Testing purposes.
app.get('/create_lobby', (req, res) => {
  res.send('This will be the page for creating a lobby');
});

// Sends user straight to a page with the track lanes, and sends code via GET. (Testing)
app.post('/join', (req, res) => {
  console.log('Received POST data:', req.body);
  
  if (req.body.gameCode) {
    res.redirect(`${FRONTEND_URL}/gameloop?gameCode=${req.body.gameCode}`);
  } else {
    res.send('Game code is missing or invalid.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
