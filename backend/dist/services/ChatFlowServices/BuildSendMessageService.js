'use strict';const q=b,s=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=parseInt(o(0xea))/0x1+parseInt(o(0xeb))/0x2*(-parseInt(p(0xd5))/0x3)+-parseInt(p(0xca))/0x4*(parseInt(o(0xe5))/0x5)+parseInt(p(0xcd))/0x6+parseInt(p(0xcc))/0x7+-parseInt(o(0xe9))/0x8+parseInt(p(0xe7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x555d7));var __importDefault=this&&this[q(0xce)]||function(c){const r=q;return c&&c[r(0xd2)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0xc4;let h=e[f];return h;},b(c,d);}Object[s(0xec)](exports,q(0xd2),{'value':!![]});const pupa_1=require(q(0xed)),logger_1=require(q(0xe3)),Ticket_1=__importDefault(require(s(0xee))),Message_1=__importDefault(require(s(0xc9))),socketEmit_1=__importDefault(require(q(0xe8))),queueValidation_1=__importDefault(require('../../utils/queueValidation')),BuildSendMessageService=async({msg:c,tenantId:d,ticket:e,userId:f})=>{const t=q,u=s,g={'ticketId':e['id'],'body':'','contactId':e[t(0xc8)],'fromMe':!![],'read':!![],'mediaType':t(0xc7),'mediaUrl':undefined,'timestamp':new Date()[u(0xdd)](),'quotedMsgId':undefined,'userId':f,'scheduleDate':undefined,'sendType':'bot','status':t(0xd0),'tenantId':d};try{if(c[u(0xe6)]===t(0xe2)&&c[u(0xda)][t(0xd8)]){const h=c[t(0xda)][u(0xd8)]['split']('/'),i={...g,'body':c['data'][t(0xd6)],'mediaUrl':h[h[u(0xd1)]-0x1],'mediaType':c[t(0xda)][t(0xe6)]?c[u(0xda)]?.['type']['substr'](0x0,c[t(0xda)][u(0xe6)][u(0xd4)]('/')):'chat'},j=await Message_1[t(0xdf)][u(0xf0)](i),k=await Message_1[u(0xdf)]['findByPk'](j['id'],{'include':[{'model':Ticket_1[u(0xdf)],'as':u(0xd3),'where':{'tenantId':d},'include':['contact']},{'model':Message_1[u(0xdf)],'as':t(0xdb),'include':[u(0xe4)]}]});if(!k)throw new Error(u(0xef));await e['update']({'lastMessage':k[u(0xd9)],'lastMessageAt':new Date()[u(0xdd)]()}),await(0x0,queueValidation_1[t(0xdf)])(e['whatsappId'],e[t(0xcf)],[k]),(0x0,socketEmit_1['default'])({'tenantId':d,'type':u(0xc4),'payload':k});}else{c['data'][u(0xc6)]=(0x0,pupa_1[u(0xde)])(c['data'][t(0xc6)]||'',{'protocol':e[u(0xe0)],'name':e[t(0xe4)]['name']});const l=await Message_1[u(0xdf)][u(0xf0)]({...g,'body':c[t(0xda)]['message'],'mediaType':u(0xc7)}),m=await Message_1['default'][u(0xdc)](l['id'],{'include':[{'model':Ticket_1['default'],'as':u(0xd3),'where':{'tenantId':d},'include':['contact']},{'model':Message_1[u(0xdf)],'as':t(0xdb),'include':[u(0xe4)]}]});if(!m)throw new Error(t(0xef));await e[t(0xcb)]({'lastMessage':m[t(0xd9)],'lastMessageAt':new Date()[u(0xdd)](),'answered':!![]}),await(0x0,queueValidation_1[u(0xdf)])(e[u(0xe1)],e[u(0xcf)],[m]),(0x0,socketEmit_1[t(0xdf)])({'tenantId':d,'type':t(0xc4),'payload':m});}}catch(n){logger_1[t(0xc5)]['error'](t(0xd7),n);}};function a(){const v=['4iCVhFA','update','4671870UGkWEE','3470304ihQPUn','__importDefault','tenantId','pending','length','__esModule','ticket','indexOf','21SrTkld','name','BuildSendMessageService','mediaUrl','body','data','quotedMsg','findByPk','getTime','pupa','default','protocol','whatsappId','MediaField','../../utils/logger','contact','2905390mMUBcT','type','3120318VHZzYp','../../helpers/socketEmit','2847448twYsFC','120769fUvjmt','121886WekVfr','defineProperty','../../utils/pupa','../../models/Ticket','ERR_CREATING_MESSAGE_SYSTEM','create','chat:create','logger','message','chat','contactId','../../models/Message'];a=function(){return v;};return a();}exports['default']=BuildSendMessageService;