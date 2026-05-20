(function () {
  const COUNTRY_KEY = "country";
  const COUNTRY_VALUE = "RU";

  const originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    if (this === sessionStorage && key === COUNTRY_KEY) {
      return originalSetItem.call(this, key, COUNTRY_VALUE);
    }
    return originalSetItem.call(this, key, value);
  };

  const originalGetItem = Storage.prototype.getItem;
  Storage.prototype.getItem = function (key) {
    if (this === sessionStorage && key === COUNTRY_KEY) {
      return COUNTRY_VALUE;
    }
    return originalGetItem.call(this, key);
  };

  try {
    originalSetItem.call(sessionStorage, COUNTRY_KEY, COUNTRY_VALUE);
  } catch (_) {}
})();
