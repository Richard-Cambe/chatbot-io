import Router from './Router';
import Home from './controllers/Home';
import Chatbot from './controllers/Chatbot';
import './index.scss';

const routes = [{
  url: '/',
  controller: Home
}, {
  url: '/chatbot',
  controller: Chatbot
}];

new Router(routes);
