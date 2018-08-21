
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1534843970251'); /* IE9*/
    src: url('./iconfont.eot?t=1534843970251#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1534843970251') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1534843970251#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
