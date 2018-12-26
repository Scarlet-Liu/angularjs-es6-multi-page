import template from './login-page.html';
import successpage from './angularJsTest02.html';
import { LANG_EN_US, LANG_ZH_CN } from '../common/i18n';

const name = 'loginPage';  // <login-page></login-page>
const bindings = {};
const controller = function (userService, $translate) {
  'ngInject'
  this.$translate = $translate;
  this.enUS = LANG_EN_US;
  this.zhCN = LANG_ZH_CN;
  this.users = [];
  this.loginTitle = 'I am login.......';
  userService.fetch().then(resp => {
    this.users = resp.data;
    console.log(users);
  });
  this.login = function () {
    console.log(this.username);
    console.log(this.password);
    console.log(this.users);
    this.users.forEach(element => {
      if (this.username == element.name && this.password == element.password) {
        // alert("登陆成功：欢迎 " + this.username);
        location.href = "/pages/user/index.html";
      }
      else if (this.username == element.name && this.password != element.password) {
        alert("登陆失败：用户密码错误");
      }
    }
    );


    // $http({
    //   type: "GET",
    //   url: "http://localhost:8000/hello",
    //   data: { username: this.username, password: this.password },
    // })

    // var uname = this.username;
    // var pass = this.password;
    // $http.get("/stub/users.json").then(function (data) {
    //   //console.log(data.data[0].name);
    //   angular.forEach(data.data, (index, i) => {
    //     if (index.name == uname && index.password == pass) {

    //     }
    //     console.log(index.name);
    //   })
    //console.log(data);
    //

  }


  this.changeLanguage = function (key) {
    this.$translate.use(key);
  };
  // this.news=function(){
  //   alert("ddd");
  // }

}
export default {
  name,
  template,
  successpage,
  bindings,
  controller,
}
