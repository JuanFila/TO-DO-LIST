const express = require('express');
const methodOveride= require('method-override');
const path = require('path');
const rootRouter = require('./src/routes/index');
const checklistRouter = require('./src/routes/checklist');
const taskRouter = require('./src/routes/task');

require('./config/database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOveride('_method', {methods: ['POST', 'GET']}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/',rootRouter);
app.use('/checklists',checklistRouter);
app.use('/checklists', taskRouter.dependent);
app.use('/tasks', taskRouter.simple);


app.listen(3000, () => {
    console.log('servidor rodando')
});
