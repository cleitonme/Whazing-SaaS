'use strict';const m=b,n=b;function a(){const q=['../../errors/AppError','2520fZaUFA','5JzpeLl','36790fEdgju','1315540bBhwTh','6oPPiIt','defineProperty','default','1248yxkgdv','143eZSGtY','143590XmETvW','destroy','132FWfXml','../../models/ApiConfig','1829275GqCmnz','2338209QcQEmP','47099rXQYxc','8OnaNXh','__importDefault'];a=function(){return q;};return a();}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x107))/0x1+parseInt(l(0xfe))/0x2*(-parseInt(l(0xf6))/0x3)+-parseInt(l(0x101))/0x4*(-parseInt(k(0xff))/0x5)+parseInt(k(0x102))/0x6*(-parseInt(k(0xf8))/0x7)+-parseInt(k(0xfb))/0x8*(parseInt(l(0xf9))/0x9)+-parseInt(l(0x100))/0xa*(parseInt(k(0x106))/0xb)+parseInt(l(0x105))/0xc*(parseInt(l(0xfa))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x36e6a));var __importDefault=this&&this[m(0xfc)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[n(0x103)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(n(0xfd))),ApiConfig_1=__importDefault(require(n(0xf7))),DeleteApiConfigService=async({apiId:c,tenantId:d})=>{const o=n,p=n,e=await ApiConfig_1['default']['findOne']({'where':{'id':c,'tenantId':d}});if(!e)throw new AppError_1[(o(0x104))]('ERR_API_CONFIG_NOT_FOUND',0x194);await e[o(0x108)]();};function b(c,d){const e=a();return b=function(f,g){f=f-0xf6;let h=e[f];return h;},b(c,d);}exports['default']=DeleteApiConfigService;