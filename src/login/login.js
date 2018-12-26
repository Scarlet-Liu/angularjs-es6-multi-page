import Mdle from '../common/mdle';
import loginPage from './login-page';
import userService from '../provider/service-user';

const name = 'login';
let mdle = Mdle(name, []);
mdle.registService(userService);
// mdle.registComponent(userPage);
// mdle.registFilter(filterReverse);

const page = loginPage;

export default {
  name,
  mdle,
  page
};