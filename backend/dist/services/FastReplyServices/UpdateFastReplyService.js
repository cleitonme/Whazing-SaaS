'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x86))/0x1*(parseInt(k(0x83))/0x2)+-parseInt(k(0x89))/0x3*(-parseInt(l(0x7f))/0x4)+-parseInt(l(0x7a))/0x5*(-parseInt(k(0x87))/0x6)+-parseInt(l(0x80))/0x7*(parseInt(l(0x7b))/0x8)+-parseInt(l(0x79))/0x9+parseInt(k(0x88))/0xa+parseInt(l(0x84))/0xb*(parseInt(k(0x7d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x350fd));function a(){const q=['1842dVUcVs','331580XjugEr','294FjoWuN','__esModule','../../errors/AppError','default','2036943hZYCXu','1175POVZaw','136ipBLLP','findOne','4812aCyCVx','../../models/FastReply','16244rkXdju','175238dvkVOL','message','userId','492awMsRp','12529qiwFqJ','reload','369CzWUgQ'];a=function(){return q;};return a();}var __importDefault=this&&this['__importDefault']||function(c){return c&&c['__esModule']?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x76;let h=e[f];return h;},b(c,d);}Object['defineProperty'](exports,m(0x76),{'value':!![]});const AppError_1=__importDefault(require(m(0x77))),FastReply_1=__importDefault(require(m(0x7e))),UpdateFastReplyService=async({fastReplyData:c,fastReplyId:d})=>{const o=n,p=n,{key:e,message:f,userId:g,tenantId:h}=c,i=await FastReply_1[o(0x78)][p(0x7c)]({'where':{'id':d,'tenantId':h},'attributes':['id','key',p(0x81),p(0x82)]});if(!i)throw new AppError_1[(o(0x78))]('ERR_NO_FAST_REPLY_FOUND',0x194);return await i['update']({'key':e,'message':f,'userId':g}),await i[o(0x85)]({'attributes':['id','key',p(0x81),'userId']}),i;};exports['default']=UpdateFastReplyService;