import { makeAutoObservable } from 'mobx';
import LocalStorage from './LocalStorage';
import request from 'umi-request';
import baseRquest from './BaseRequest';
class AuthStore {
  initialize = true;
  isAuthenticated = false;
  account = '';
  permission = 10;
  endPoint = '';
  constructor() {
    makeAutoObservable(this);
    this.getUser();
  }

  update(user: any) {
    this.isAuthenticated = true;
    this.account = user.account;
  }

  getUser() {
    let userInfo = LocalStorage.get('account');
    let userCookies = LocalStorage.getCookie('username');
    if (userInfo && userCookies.length) {
    } else {
      this.logout();
      this.initialize = false;
    }
  }

  async login(username: string, password: string) {
    let userData = {
      username: username,
      password: password,
    };
    let result = await baseRquest.post('/login', userData);
    return result;
  }

  async logout() {
    this.reset();
    LocalStorage.remove('account');
    LocalStorage.remove('serverIp');
    this.initialize = false;
  }

  changePassword = (newPassword: string, oldPassword: string) => {};

  reset() {
    this.initialize = true;
    this.isAuthenticated = false;
    this.account = '';
    this.permission = 10;
  }
}

const store = new AuthStore();

export default store;
