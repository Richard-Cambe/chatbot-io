import Router from './Router';
import Home from './controllers/Home';
import Message from './controllers/Message';

const routes = [{
  url: '/home',
  controller: Home
}, {
  url: '/message',
  controller: Message
}];

new Router(routes);
