'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x128;let h=e[f];return h;},b(c,d);}const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x131))/0x1*(parseInt(k(0x130))/0x2)+parseInt(k(0x12c))/0x3+-parseInt(l(0x133))/0x4+parseInt(l(0x12e))/0x5*(parseInt(l(0x12f))/0x6)+parseInt(k(0x128))/0x7+parseInt(k(0x12b))/0x8+-parseInt(k(0x12a))/0x9*(parseInt(l(0x132))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7e109));var __importDefault=this&&this[m(0x135)]||function(c){const n=m;return c&&c[n(0x129)]?c:{'default':c};};Object['defineProperty'](exports,m(0x129),{'value':!![]});function a(){const r=['33230PncEgj','1629132fDAUZh','default','__importDefault','227367GTtInd','__esModule','4545mJciHW','7735512ZYWIaH','1749435zkNBOz','name','286915YiBkOU','18jKZphw','1694090eYyyOg','1jiNKEA'];a=function(){return r;};return a();}const ApiConfig_1=__importDefault(require('../../models/ApiConfig')),ListApiConfigService=async({tenantId:c})=>{const p=o,q=o,d=await ApiConfig_1[p(0x134)]['findAll']({'where':{'tenantId':c},'order':[[p(0x12d),'ASC']]});return{'apis':d};};exports['default']=ListApiConfigService;