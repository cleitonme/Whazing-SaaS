'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x80))/0x1*(parseInt(l(0x83))/0x2)+parseInt(l(0x8a))/0x3+parseInt(k(0x81))/0x4*(-parseInt(k(0x8d))/0x5)+parseInt(k(0x86))/0x6*(parseInt(k(0x89))/0x7)+-parseInt(l(0x84))/0x8+-parseInt(l(0x87))/0x9*(-parseInt(l(0x8e))/0xa)+-parseInt(k(0x88))/0xb*(parseInt(l(0x8f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8c038));function b(c,d){const e=a();return b=function(f,g){f=f-0x80;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x8c)]||function(c){const n=m;return c&&c[n(0x82)]?c:{'default':c};};function a(){const r=['726xQLqOO','36zuvtlq','5918zQzZkr','27405JvKIpc','3023442MXrgpy','destroy','__importDefault','2629870PNUhKX','909770pqcokf','30732RUEfDJ','4PreYes','4UsLTvX','__esModule','519758ZUrspr','3261320rKqoRe','default'];a=function(){return r;};return a();}Object['defineProperty'](exports,m(0x82),{'value':!![]});const Baileys_1=__importDefault(require('../../models/Baileys')),DeleteBaileysService=async c=>{const p=m,q=o,d=await Baileys_1[p(0x85)]['findOne']({'where':{'whatsappId':c}});d&&await d[p(0x8b)]();};exports[o(0x85)]=DeleteBaileysService;