'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0xb5))/0x1+parseInt(k(0xbe))/0x2*(parseInt(k(0xb6))/0x3)+-parseInt(l(0xc4))/0x4+parseInt(k(0xb3))/0x5*(-parseInt(l(0xc1))/0x6)+parseInt(k(0xb9))/0x7+parseInt(k(0xb7))/0x8*(parseInt(k(0xbd))/0x9)+-parseInt(k(0xc6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd1584));var __importDefault=this&&this[m(0xba)]||function(c){const n=m;return c&&c[n(0xb8)]?c:{'default':c};};Object[o(0xbb)](exports,'__esModule',{'value':!![]}),exports['RefreshTokenService']=void 0x0;function a(){const r=['1059236OJqNso','80787ljqiPV','176hhobNS','__esModule','8579305HZcaaP','__importDefault','defineProperty','createRefreshToken','380907HRgETB','46bujmtw','verify','ERR_SESSION_EXPIRED','1107156zGYDEX','default','../../errors/AppError','1502260iOZXtU','../UserServices/ShowUserService','2992850dIyvbi','tokenVersion','createAccessToken','5deWMgS','../../config/auth'];a=function(){return r;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0xb3;let h=e[f];return h;},b(c,d);}const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require(m(0xc3))),ShowUserService_1=__importDefault(require(o(0xc5))),auth_1=__importDefault(require(o(0xb4))),CreateTokens_1=require('../../helpers/CreateTokens'),RefreshTokenService=async c=>{const p=m,q=m;let d;try{d=(0x0,jsonwebtoken_1[p(0xbf)])(c,auth_1[q(0xc2)]['refreshSecret']);}catch(j){throw new AppError_1['default'](q(0xc0),0x191);}const {id:e,tokenVersion:f}=d,g=await(0x0,ShowUserService_1['default'])(e,0x1);if(g[q(0xc7)]!==f)throw new AppError_1[(p(0xc2))](q(0xc0),0x191);const h=(0x0,CreateTokens_1[p(0xc8)])(g),i=(0x0,CreateTokens_1[p(0xbc)])(g);return{'newToken':h,'refreshToken':i};};exports['RefreshTokenService']=RefreshTokenService;