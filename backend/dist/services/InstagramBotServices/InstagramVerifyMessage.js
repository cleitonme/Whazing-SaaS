'use strict';const m=b,o=b;function a(){const r=['36348WTdSwf','307490BNPzTt','__esModule','defineProperty','getTime','161bBvoax','text','27uYCAZH','245dTUJMz','834360zOpaIm','2533970cBAmIn','531582bCHKWK','__importDefault','193096odlftf','item_id','default','../MessageServices/CreateMessageService','message','2184tIDDSU','chat','received'];a=function(){return r;};return a();}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x16e))/0x1+-parseInt(l(0x165))/0x2+parseInt(l(0x163))/0x3+-parseInt(l(0x16a))/0x4*(parseInt(l(0x160))/0x5)+-parseInt(l(0x16d))/0x6*(parseInt(l(0x15d))/0x7)+-parseInt(k(0x161))/0x8*(-parseInt(l(0x15f))/0x9)+parseInt(k(0x162))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a526));var __importDefault=this&&this[m(0x164)]||function(c){const n=m;return c&&c[n(0x15a)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x15a;let h=e[f];return h;},b(c,d);}Object[m(0x15b)](exports,o(0x15a),{'value':!![]});const CreateMessageService_1=__importDefault(require(o(0x168))),VerifyMessage=async(c,d,e,f)=>{const p=m,q=o,g={'messageId':String(c['message'][p(0x166)]),'ticketId':e['id'],'contactId':d?undefined:f['id'],'body':c[p(0x169)]['text'],'fromMe':d,'read':d,'mediaType':p(0x16b),'quotedMsgId':'','timestamp':new Date()[p(0x15c)](),'status':p(0x16c)};await e['update']({'lastMessage':c[q(0x169)][q(0x15e)],'lastMessageAt':new Date()['getTime'](),'answered':d||![]}),await(0x0,CreateMessageService_1[p(0x167)])({'messageData':g,'tenantId':e['tenantId']});};exports[o(0x167)]=VerifyMessage;