import Router from './Router';
import Home from './controllers/Home';
import Message from './controllers/Message';
import './index.scss';

const routes = [{
  url: '/home',
  controller: Home
}, {
  url: '/message',
  controller: Message
}];

new Router(routes);
