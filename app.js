// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

// app.use(errorsController.pageNotFound);
app.use('/route', (req, res, next) => {
  console.log('Middleware is working');
  next();
}); // ✅ This works


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});