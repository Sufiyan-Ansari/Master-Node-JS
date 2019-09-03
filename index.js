const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const adminRoutes = require('./routes/adminRoutes');

app.set('views' , 'views');

app.set('view engine' , 'ejs');

app.use(adminRoutes);

app.listen(port,()=>console.log(`Listeinng on port ${port}`));

