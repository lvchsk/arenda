require('@babel/register');
const express = require("express");
const renderComponent = require('./middleware/renderComponent');

const app = express();
const PORT = 3000;

app.use(renderComponent);
const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(
    `\x1b[1m\x1b[35mЭтот разъёмный сервер летит со скоростью ${PORT} км/ч`
  );
});
