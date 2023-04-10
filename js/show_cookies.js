function showCookieBanner() {
    document.querySelector('.cookie-banner').classList.add('show');
  }
  function acceptCookies() {
    document.cookie = "cookie_accepted=true; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/";
    document.querySelector('.cookie-banner').classList.remove('show');
  }
  if (document.cookie.indexOf("cookie_accepted") < 0) {
    showCookieBanner();
  }