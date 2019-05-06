import myPlugins from './plugins.js';
import SmoothScroll from 'smooth-scroll';

// プラグインのサンプル
myPlugins();

// スムーススクロール
new SmoothScroll('a[href*="#"]');

/**
 * JavaScriptでのレスポンシブ対応
 */
const matchFunction =() => {
  if(window.matchMedia('(min-width:740px)').matches){
    console.log('PC');
  } else {
    console.log('SP');
  }
};

window.addEventListener('load', matchFunction );
window.addEventListener('resize', matchFunction );
