'use strict';const y=b,z=b;(function(c,d){const v=b,w=b,e=c();while(!![]){try{const f=-parseInt(v(0x1ed))/0x1*(-parseInt(v(0x1f8))/0x2)+parseInt(v(0x209))/0x3*(parseInt(w(0x1ec))/0x4)+-parseInt(v(0x215))/0x5*(parseInt(v(0x207))/0x6)+parseInt(w(0x211))/0x7+parseInt(w(0x20f))/0x8+-parseInt(v(0x219))/0x9*(parseInt(v(0x1e9))/0xa)+-parseInt(w(0x210))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb02d8));function b(c,d){const e=a();return b=function(f,g){f=f-0x1e9;let h=e[f];return h;},b(c,d);}function a(){const C=['18jiKORD','6473990VysWXQ','contact','../../models/Ticket','4beIiMo','8703jMHfkL','ZWomG','pending','tags','user','notification:new','stepAutoReplyId','ticket:update','startedAttendanceAt','closedAt','setDataValue','258QgUogL','isTransference','extraInfo','../../models/Contact','reload','../../helpers/socketEmit','../../models/User','__esModule','../../errors/AppError','findOne','closed','getTime','ExKrv','name','../../helpers/CheckContactOpenTickets','426zdhHYl','../../helpers/SetTicketMessagesAsRead','3018591dWdpmt','wallets','status','KoPqH','autoReplyId','isDeleted','3073144AsUnUV','10232024VEIXDz','6052340QRdIJG','open','default','HrLrw','30355BYoUKU','ERR_NO_TICKET_FOUND','lsNLC','CtvYi'];a=function(){return C;};return a();}var __importDefault=this&&this['__importDefault']||function(c){const x=b;return c&&c[x(0x1ff)]?c:{'default':c};};Object['defineProperty'](exports,y(0x1ff),{'value':!![]});const AppError_1=__importDefault(require(y(0x200))),CheckContactOpenTickets_1=__importDefault(require(y(0x206))),SetTicketMessagesAsRead_1=__importDefault(require(z(0x208))),Contact_1=__importDefault(require(z(0x1fb))),Ticket_1=__importDefault(require(z(0x1eb))),User_1=__importDefault(require(z(0x1fe))),socketEmit_1=__importDefault(require(y(0x1fd))),CreateLogTicketService_1=__importDefault(require('./CreateLogTicketService')),UpdateTicketService=async({ticketData:c,ticketId:d,isTransference:e,userIdRequest:f})=>{const A=z,B=y,{status:g,userId:h,tenantId:i,queueId:j}=c,k=await Ticket_1[A(0x213)][A(0x201)]({'where':{'id':d,'tenantId':i},'include':[{'model':Contact_1[A(0x213)],'as':A(0x1ea),'include':[B(0x1fa),B(0x1f0),{'association':A(0x20a),'attributes':['id','name']}]},{'model':User_1[A(0x213)],'as':B(0x1f1),'attributes':['id',B(0x205)]},{'association':'whatsapp','attributes':['id','name',A(0x20e)]}]});if(!k){if(B(0x204)==='ExKrv')throw new AppError_1[(A(0x213))](B(0x216),0x194);else e[A(0x1f6)]=new f()[A(0x203)]();}await(0x0,SetTicketMessagesAsRead_1['default'])(k);const l=k[B(0x20b)]!=='pending'&&c[A(0x20b)]==='pending',m=k[B(0x20b)],n=k[B(0x1f1)]?.['id'];m===B(0x202)&&await(0x0,CheckContactOpenTickets_1[A(0x213)])(k[B(0x1ea)]['id']);const o=g==='close'?B(0x202):g,p={'status':o,'queueId':j,'userId':h};o===B(0x202)&&(p['closedAt']=new Date()[A(0x203)]());m===B(0x1ef)&&o===B(0x212)&&(p['autoReplyId']=null,p[A(0x1f3)]=null,p[B(0x1f5)]=new Date()[A(0x203)]());await k['update'](p);m===B(0x1ef)&&o===B(0x212)&&(B(0x20c)==='KoPqH'?await(0x0,CreateLogTicketService_1['default'])({'userId':f,'ticketId':d,'type':A(0x212)}):(g[B(0x20d)]=null,h[A(0x1f3)]=null,i[B(0x1f5)]=new j()[A(0x203)]()));o===B(0x202)&&await(0x0,CreateLogTicketService_1[A(0x213)])({'userId':f,'ticketId':d,'type':B(0x202)});m===B(0x212)&&o===B(0x1ef)&&(A(0x218)!==B(0x217)?await(0x0,CreateLogTicketService_1[B(0x213)])({'userId':f,'ticketId':d,'type':A(0x1ef)}):(0x0,f[B(0x213)])({'tenantId':g,'type':B(0x1f2),'payload':h}));if(e){await(0x0,CreateLogTicketService_1[B(0x213)])({'userId':f,'ticketId':d,'type':'transfered'});if(h){if(B(0x214)===A(0x214))await(0x0,CreateLogTicketService_1[A(0x213)])({'userId':h,'ticketId':d,'type':'receivedTransfer'});else throw new d[(B(0x213))](A(0x216),0x194);}}await k[A(0x1fc)]();if(e){if(A(0x1ee)===B(0x1ee))await k[A(0x1f7)](A(0x1f9),!![]);else return g&&h[B(0x1ff)]?i:{'default':j};}return l&&(0x0,socketEmit_1[B(0x213)])({'tenantId':i,'type':B(0x1f2),'payload':k}),(0x0,socketEmit_1[A(0x213)])({'tenantId':i,'type':A(0x1f4),'payload':k}),{'ticket':k,'oldStatus':m,'oldUserId':n};};exports['default']=UpdateTicketService;