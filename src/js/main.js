import myPlugins from './plugins.js';
import SmoothScroll from 'smooth-scroll';

// プラグインのサンプル
myPlugins();

// スムーススクロール
new SmoothScroll('a[href*="#"]');

/**
 * JavaScriptでのレスポンシブ対応
 */
const matchFunction = () => {
  if (window.matchMedia('(min-width:740px)').matches) {
    console.log('PC');
  } else {
    console.log('SP');
  }
};

window.addEventListener('load', matchFunction);
window.addEventListener('resize', matchFunction);

// Web Font Loader
window.WebFontConfig = {
  google: {
    families: ['Noto+Serif+JP:200,300,400,500,600,700,900', 'Noto+Sans+JP:100,300,400,500,700,900']
  },
  active: function () {
    sessionStorage.fonts = true;
  }
};

(function () {
  const wf = document.createElement('script');
  wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = true;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
