// ==UserScript==
// @name         Magia de los Looney Tunes Loader
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  Loader de Magia de los Looney Tunes
// @author       -Bugs Bunny-
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function () {
  'use strict';

  const SCRIPT_URL = 'https://raw.githubusercontent.com/Alvarete16/AlvaroAldeas/main/magia-obf.js';

  GM_xmlhttpRequest({
    method: 'GET',
    url: SCRIPT_URL + '?v=' + Date.now(),
    onload: function (res) {
      if (res.status !== 200) {
        console.error('No se pudo cargar Magia Looney:', res.status);
        return;
      }

      const script = document.createElement('script');
      script.textContent = res.responseText;
      document.documentElement.appendChild(script);
      script.remove();
    },
    onerror: function () {
      console.error('Error cargando Magia Looney');
    }
  });
})();
