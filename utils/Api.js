const BASE_URL = 'https://v2.jokeapi.dev/';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  /** */
  getJoke({categoryArr, blacklistArr}) {
    const categories = categoryArr.length === 6 ? 'Any' : categoryArr.join(',');
    const blacklist = blacklistArr.length > 0 ? blacklistArr.join(',') : '';

    return fetch(
      `${this._baseUrl}/joke/${categories}${
        blacklist && '?blacklistFlags=' + blacklist
      }`,
      {
        headers: this._headers,
      },
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`${res.status} ${res.statusText}`);
    });
  }
}

/** */
const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
