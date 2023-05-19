require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');


const mainRouter = require('./routes/view/main.routes');
const personalisationViewRouter = require('./routes/view/personalisation.routes');
const personalisationApiRouter = require('./routes/api/personalisation.routes');
const housingsViewRouter = require('./routes/view/housing.routes');
const housingsApiRouter = require('./routes/api/housing.routes');
const commentsApiRouter = require('./routes/api/comments.routes');
const favoriteViewRoutes = require('./routes/view/favorite.routes');
const favoriteApiRoutes = require('./routes/api/favorite.routes');
const likesApiRouter = require('./routes/api/likes.routes');
const selectViewRouter = require('./routes/view/select.routes');

//housing
const app = express();
const PORT = process.env.PORT || 4000;

serverConfig(app);


app.use('/', mainRouter);
app.use('/pers', personalisationViewRouter, personalisationApiRouter);
app.use('/housings', housingsViewRouter, housingsApiRouter);
app.use('/comments', commentsApiRouter);
app.use('/favorite', favoriteViewRoutes, favoriteApiRoutes);
app.use('/likes', likesApiRouter);
app.use('/select', selectViewRouter);



app.listen(PORT, () => {
    console.log(`Go on port ${PORT}`)
})