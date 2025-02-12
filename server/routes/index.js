const app = require('../server-config.js');
const routes = require('../server-routes.js');
const middleware = require('../middleware/index');
app.get('/', middleware, routes.getAllTodos);
app.get('/:id', routes.getTodo);

app.post('/',  routes.postTodo);
app.patch('/:id', routes.patchTodo);

app.delete('/', routes.deleteAllTodos);
app.delete('/:id', routes.deleteTodo);

app.post('/user/sign-up',  routes.signup);