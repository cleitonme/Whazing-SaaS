'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x152))/0x1*(parseInt(k(0x144))/0x2)+parseInt(k(0x145))/0x3+-parseInt(l(0x154))/0x4+parseInt(k(0x14f))/0x5*(-parseInt(l(0x14d))/0x6)+parseInt(l(0x156))/0x7*(parseInt(l(0x155))/0x8)+-parseInt(l(0x14c))/0x9+parseInt(l(0x150))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x65039));var __importDefault=this&&this[m(0x153)]||function(c){const n=m;return c&&c[n(0x148)]?c:{'default':c};};function a(){const r=['1idKhXb','__importDefault','456880IHjIMz','8BUoNLp','4532003KGjrFh','1105392HrtvbH','652989PDxShi','findOne','default','__esModule','ERR_GRUOP_NO_EXISTS','../../errors/AppError','destroy','42318tMZFPd','64212irKUVW','../../models/Group','295csPhiN','8516970HdKkXz','defineProperty'];a=function(){return r;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x144;let h=e[f];return h;},b(c,d);}Object[m(0x151)](exports,m(0x148),{'value':!![]});const AppError_1=__importDefault(require(m(0x14a))),Group_1=__importDefault(require(m(0x14e))),DeleteGroupService=async({id:c,tenantId:d})=>{const p=m,q=o,e=await Group_1[p(0x147)][q(0x146)]({'where':{'id':c,'tenantId':d}});if(!e)throw new AppError_1[(p(0x147))]('ERR_NO_GROUP_FOUND',0x194);try{await e[p(0x14b)]();}catch(f){throw new AppError_1['default'](p(0x149),0x194);}};exports[o(0x147)]=DeleteGroupService;