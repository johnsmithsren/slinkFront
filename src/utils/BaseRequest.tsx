import { message } from 'antd';
import { extend } from 'umi-request';
class BaseRquest {
  provider: any;

  constructor() {
    let headers = {};
    this.provider = extend({
      prefix: '/api/v1',
      timeout: 60 * 1000 * 15,
      withCredentials: true,
      headers,
    });
  }

  get(...args: any[]) {
    return this.provider
      .get(...(args as [string | undefined]))
      .catch((err: { data: { code: number; msg: string } }) => {
        message.error(`错误代码-${err.data.code};${err.data.msg}`);
        throw err;
      });
  }

  post(apiAddress: string, data: any) {
    return this.provider
      .post(apiAddress, { data: data })
      .catch((err: { data: { code: number; msg: string } }) => {
        message.error(`错误代码-${err.data.code};${err.data.msg}`);
        throw err;
      });
  }

  put(...args: any[]) {
    return this.provider
      .put(...(args as [string | undefined]))
      .catch((err: { data: { code: number; msg: string } }) => {
        message.error(`错误代码-${err.data.code};${err.data.msg}`);
        throw err;
      });
  }

  delete(...args: any[]) {
    return this.provider
      .delete(...(args as [string | undefined]))
      .catch((err: { data: { code: number; msg: string } }) => {
        message.error(`错误代码-${err.data.code};${err.data.msg}`);
        throw err;
      });
  }
}

let baseRquest = new BaseRquest();

export default baseRquest;
