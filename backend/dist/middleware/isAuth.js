'use strict';const C=b,D=b;(function(c,d){const A=b,B=b,e=c();while(!![]){try{const f=-parseInt(A(0x189))/0x1+-parseInt(B(0x18a))/0x2*(-parseInt(B(0x187))/0x3)+parseInt(B(0x191))/0x4+parseInt(A(0x182))/0x5+-parseInt(A(0x181))/0x6+parseInt(A(0x188))/0x7+-parseInt(B(0x183))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1f61c));function b(c,d){const e=a();return b=function(f,g){f=f-0x181;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[C(0x193)]||function(c){return c&&c['__esModule']?c:{'default':c};};function a(){const G=['headers','secret','user','../config/auth','910444AZXyMV','Invalid\x20token.','__importDefault','1049976gzFVff','19180CGRDrY','218304vzVNCk','__esModule','split','defineProperty','354513ffIaIM','1464421VzyEfG','227997AKMegu','2pkuJxX','default','verify'];a=function(){return G;};return a();}Object[D(0x186)](exports,D(0x184),{'value':!![]});const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require('../errors/AppError')),auth_1=__importDefault(require(C(0x190))),isAuth=(c,d,e)=>{const E=C,F=C,f=c[E(0x18d)]['authorization'];if(!f)throw new AppError_1['default']('Token\x20was\x20not\x20provided.',0x193);const [,g]=f[E(0x185)]('\x20');try{const h=(0x0,jsonwebtoken_1[F(0x18c)])(g,auth_1[F(0x18b)][E(0x18e)]),{id:i,profile:j,tenantId:k}=h;c[F(0x18f)]={'id':i,'profile':j,'tenantId':k};}catch(l){throw new AppError_1[(F(0x18b))](F(0x192),0x193);}return e();};exports[D(0x18b)]=isAuth;