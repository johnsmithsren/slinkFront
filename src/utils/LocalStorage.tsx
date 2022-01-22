const LocalStorage = {
  set(key: string, value: any) {
    const toSave = JSON.stringify(value);
    localStorage.setItem(key, toSave);
  },
  get(key: string) {
    try {
      const data = localStorage.getItem(key);
      if (!data) return false;
      const json = JSON.parse(data);
      return json;
    } catch {
      return false;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },

  setCookie(cname: string, cvalue: string, exHours: number) {
    const d = new Date();
    d.setTime(d.getTime() + exHours * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
  },

  getCookie(cname: string) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
  },
};

export default LocalStorage;
