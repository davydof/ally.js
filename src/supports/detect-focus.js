define(function defineSupportsDetectFocus(require) {
  'use strict';

  function readLocalStorage(key) {
    var data;
    try {
      data = window.localStorage && window.localStorage.getItem(key);
      if (data) {
        data = JSON.parse(data);
      } else {
        data = {};
      }
    } catch (e) {
      data = {};
    }
    return data;
  }

  function writeLocalStorage(key, value) {
    try {
      window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  var userAgent = window.navigator.userAgent;
  var cacheKey = 'a11y-focus-cache';
  var cache = readLocalStorage(cacheKey);

  // update the cache if the user agent changes (newer version, etc)
  if (cache.userAgent !== userAgent) {
    cache = {};
  }

  cache.userAgent = userAgent;


  // nodeName:
  //  {string} element name
  //  {function} callback that returns a DOMElement
  // callback: (optional)
  //  {function} callback(element) to manipulate element prior to focus-test.
  //             Can return DOMElement to define focus target (default: element)
  function detectFocus(nodeName, callback) {
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var wrapper = document.createElement('div');
    wrapper.setAttribute('aria-live', 'off');
    wrapper.setAttribute('aria-busy', 'true');
    wrapper.setAttribute('aria-hidden', 'true');
    // create dummy element to test focusability of
    var element = typeof nodeName === 'string' ? document.createElement(nodeName) : nodeName();
    // allow callback to further specify dummy element
    var focus = callback && callback(element) || element;
    // element needs to be part of the DOM to be focusable
    wrapper.appendChild(element);
    document.body.appendChild(wrapper);
    // remember what had focus to restore after test
    var previousActiveElement = document.activeElement;
    // test if the element with invalid tabindex can be focused
    focus.focus && focus.focus();
    var allowsFocus = document.activeElement === focus;
    // restore focus to what it was before test and cleanup
    previousActiveElement.focus();
    document.body.removeChild(wrapper);
    return allowsFocus;
  }

  // cache detected support so we don't have to bother screen readers with unstoppable focus changes
  // and flood the console with net::ERR_INVALID_URL errors for audio/video tests
  function detectFocusSupport(testName, nodeName, callback) {
    if (typeof cache[testName] !== 'boolean') {
      cache[testName] = detectFocus(nodeName, callback);
      writeLocalStorage(cacheKey, cache);
    }

    return cache[testName];
  }

  return detectFocusSupport;
});