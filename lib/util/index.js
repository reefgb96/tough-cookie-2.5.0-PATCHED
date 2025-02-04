const setCookies = async (jar, cookieStrings, url) => {
  return Promise.all(cookieStrings.map(cookieString => {
    return new Promise((resolve, reject) => {
      jar.setCookie(cookieString, url, {}, (err, cookie) => {
        if (err) return reject(err);
        resolve(cookie);
      });
    });
  }));
};

const setCookie = async (jar, cookieString, url) => {
  return new Promise((resolve, reject) => {
    jar.setCookie(cookieString, url, {}, (err, cookie) => {
      if (err) return reject(err);
      resolve(cookie);
    });
  });
}

module.exports = {
  setCookie,
  setCookies
};
