'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x139))/0x1*(-parseInt(k(0x138))/0x2)+-parseInt(l(0x12d))/0x3+-parseInt(l(0x13d))/0x4*(parseInt(k(0x128))/0x5)+parseInt(l(0x12a))/0x6+parseInt(l(0x131))/0x7+-parseInt(l(0x13c))/0x8*(-parseInt(l(0x134))/0x9)+parseInt(k(0x132))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe59c7));var __importDefault=this&&this[m(0x133)]||function(c){const n=m;return c&&c[n(0x135)]?c:{'default':c};};Object[o(0x12c)](exports,o(0x135),{'value':!![]});function a(){const r=['default','defineProperty','3874983atSiQU','reload','sign','update','12442150cDRwDh','5462090dackFo','__importDefault','9ywOleX','__esModule','jsonwebtoken','../../errors/AppError','4qAuLtk','330542vjGCWT','../../models/ApiConfig','findByPk','553216oZkYFj','8Lgxgnk','ERR_API_CONFIG_NOT_FOUND','3184430lfEQmU','730d','2712150OjNFba'];a=function(){return r;};return a();}const jsonwebtoken_1=require(o(0x136)),ApiConfig_1=__importDefault(require(o(0x13a))),auth_1=__importDefault(require('../../config/auth')),AppError_1=__importDefault(require(m(0x137))),RenewApiConfigTokenService=async({apiId:c,sessionId:d,tenantId:e})=>{const p=o,q=o,{secret:f}=auth_1['default'],g=await ApiConfig_1[p(0x12b)][p(0x13b)](c);if(!g)throw new AppError_1['default'](p(0x127),0x194);const h=(0x0,jsonwebtoken_1[q(0x12f)])({'tenantId':e,'profile':'admin','sessionId':d},f,{'expiresIn':p(0x129)});return g[q(0x130)]({'token':h}),g[q(0x12e)](),g;};function b(c,d){const e=a();return b=function(f,g){f=f-0x127;let h=e[f];return h;},b(c,d);}exports[o(0x12b)]=RenewApiConfigTokenService;