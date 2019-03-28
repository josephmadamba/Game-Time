const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client/build')));
 console.log(__dirname)


 app.use(require('./routes/userRoute'))
 app.use(require('./routes/gamesRoutes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' ,'client/build/index.html'));
  });
  
  
// Handles unknown routes
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  console.log(err);
  res.send("404: Page Not Found");
  next(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

