'use strict';function a(){const L=['headers','9564qFtRbY','1830XmQpas','defineProperty','axios','ERROR\x20DONWLOAD','update','message','923332gmhHqN','reply_to','default','received','132104mruHpi','../MessageServices/CreateMessageService','text','getTime','data','mid','url','payload','type','ZZnga','__importDefault','createWriteStream','49041DjThIF','GET','content-disposition','filename','fromMe','content-type','WZDdm','5625928ouitXy','tenantId','9037290yjresQ','map','message_id','2708652bFrPuw','parameters','all','finish','__esModule','3UxdwRJ','304CSLVGb','error','path','timestamp'];a=function(){return L;};return a();}const y=b,A=b;(function(c,d){const w=b,x=b,e=c();while(!![]){try{const f=parseInt(w(0x147))/0x1+parseInt(x(0x143))/0x2+-parseInt(w(0x136))/0x3*(parseInt(w(0x131))/0x4)+parseInt(w(0x13d))/0x5*(-parseInt(w(0x13c))/0x6)+parseInt(x(0x12c))/0x7+parseInt(w(0x137))/0x8*(-parseInt(w(0x153))/0x9)+parseInt(w(0x12e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcb826));function b(c,d){const e=a();return b=function(f,g){f=f-0x128;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[y(0x151)]||function(c){const z=y;return c&&c[z(0x135)]?c:{'default':c};};Object[A(0x13e)](exports,A(0x135),{'value':!![]});const path_1=require(A(0x139)),axios_1=__importDefault(require(A(0x13f))),fs_1=require('fs'),content_disposition_1=__importDefault(require(A(0x155))),CreateMessageService_1=__importDefault(require(A(0x148))),getQuotedForMessageId_1=__importDefault(require('../../helpers/getQuotedForMessageId')),downloadFile=async(c,d)=>{const B=y,C=A,e=await(0x0,axios_1['default'])({'url':c,'method':B(0x154),'responseType':'stream'}),f=e[C(0x13b)]['content-disposition']?content_disposition_1[B(0x145)]['parse'](e['headers'][B(0x155)]||''):{'parameters':{}};let g='';const h=f?.[B(0x132)]?.[B(0x128)];if(h){const j=f[B(0x132)][B(0x128)];g=new Date()[B(0x14a)]()+'-'+j;}else{if(C(0x12b)===B(0x12b)){const k=e[B(0x13b)][C(0x12a)],l=k['split']('/')[0x1];g=d+'-'+new Date()[B(0x14a)]()+'.'+l;}else return g&&h['__esModule']?i:{'default':j};}const i=(0x0,path_1['join'])(__dirname,'..','..','..','public',g);return await new Promise((n,o)=>{const D=B,E=C;if(D(0x150)==='ZZnga')e[D(0x14b)]['pipe']((0x0,fs_1[D(0x152)])(i))['on'](D(0x134),async()=>n(g))['on'](D(0x138),p=>{const F=D,G=D;console[F(0x138)](F(0x140),p),o(new Error(p));});else{const q=f[D(0x132)][D(0x128)];g=new h()[E(0x14a)]()+'-'+q;}}),g;},MessengerVerifyMediaMessage=async(c,d,e,f)=>{const H=A,I=A;let g;await Promise[H(0x133)](d[I(0x142)]['attachments'][I(0x12f)](async(h,i)=>{const J=I,K=I,j=e['id']+'_'+d[J(0x130)];g=await downloadFile(h[K(0x14e)][K(0x14d)],j);let k;if(d?.[K(0x142)]?.['reply_to']?.['mid']){const m=await(0x0,getQuotedForMessageId_1[K(0x145)])(d[K(0x142)][J(0x144)][K(0x14c)],e['tenantId']);k=m?.['id']||undefined;}const l={'messageId':i>0x0?d['message_id']+'__'+i:d[K(0x130)]||'','ticketId':e['id'],'contactId':f['id'],'body':d['message']?.[K(0x149)]||'','fromMe':d[K(0x129)],'read':![],'mediaUrl':g,'mediaType':d[K(0x14f)],'quotedMsgId':k,'timestamp':+d[K(0x13a)],'status':K(0x146)};await e[J(0x141)]({'lastMessage':d[J(0x142)]?.[J(0x149)]||g||'','lastMessageAt':new Date()[K(0x14a)](),'answered':![]}),await(0x0,CreateMessageService_1[J(0x145)])({'messageData':l,'tenantId':e[K(0x12d)]});}));};exports[y(0x145)]=MessengerVerifyMediaMessage;