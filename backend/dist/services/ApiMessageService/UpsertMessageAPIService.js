'use strict';function a(){const w=['findOne','47106fqohVS','default','2448843Mygigm','900002JEeOhB','ERR_CREATING_MESSAGE','2418780DDdplh','712nFIKGG','reload','__importDefault','4ijjNCQ','2HdBOHv','../../models/ApiMessage','4287168pdnrdM','create','11863860nFUPEW','4414137rBZJpw','__esModule'];a=function(){return w;};return a();}const s=b,t=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x18d;let h=e[f];return h;},b(c,d);}(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=parseInt(q(0x194))/0x1*(parseInt(q(0x19b))/0x2)+parseInt(q(0x193))/0x3*(parseInt(r(0x19a))/0x4)+parseInt(q(0x196))/0x5+-parseInt(q(0x19d))/0x6+parseInt(r(0x18e))/0x7+parseInt(q(0x197))/0x8*(-parseInt(q(0x191))/0x9)+-parseInt(q(0x18d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x71412));var __importDefault=this&&this[s(0x199)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object['defineProperty'](exports,s(0x18f),{'value':!![]});const ApiMessage_1=__importDefault(require(s(0x19c))),UpsertMessageAPIService=async({sessionId:c,messageId:d,body:e,ack:f,number:g,mediaName:h,mediaUrl:i,timestamp:j,externalKey:k,messageWA:l,apiConfig:m,tenantId:n})=>{const u=s,v=t;let o;const p=await ApiMessage_1[u(0x192)][v(0x190)]({'where':{'messageId':d,'tenantId':n}});p?(await p['update']({'sessionId':c,'messageId':d,'body':e,'ack':f,'number':g,'mediaName':h,'mediaUrl':i,'timestamp':j,'externalKey':k,'messageWA':l,'apiConfig':m,'tenantId':n}),o=await p[v(0x198)]()):o=await ApiMessage_1[v(0x192)][v(0x19e)]({'sessionId':c,'messageId':d,'body':e,'ack':f,'number':g,'mediaName':h,'mediaUrl':i,'timestamp':j,'externalKey':k,'messageWA':l,'apiConfig':m,'tenantId':n});if(!o)throw new Error(v(0x195));return o;};exports[t(0x192)]=UpsertMessageAPIService;