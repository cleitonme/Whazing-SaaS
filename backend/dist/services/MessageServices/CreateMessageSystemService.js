'use strict';function a(){const a0=['path','../../utils/pupa','authToken','contactId','4GIQMEE','create','API','5829306OgFHcj','type','originalname','402046shzdJg','headers','add','chat','../../models/Ticket','get','ERROR\x20DONWLOAD','join','content-type','ticket','externalKey','quotedMsg','uuid','2201598PvjdQR','eNSPC','extension','ERR_CREATING_MESSAGE_SYSTEM','apiConfig','number','mediaType','scheduleDate','whatsappId','defineProperty','contact','fromMe','logger','filename','mimetype','WebHooksAPI','14945232dPmqMt','media','update','body','error','3307413yQMjaf','message','__importDefault','getTime','pipe','oEjHZ','public','__esModule','urlMessageStatus','YSvjG','protocol','HLcyR','../../helpers/socketEmit','../../libs/Queue','CreateMessageSystemService','default','split','lFYsk','160LxFIlZ','../../models/Message','mediaUrl','createWriteStream','push','finish','chat:create','rmdirSync','pupa','18854631KeuMhB','29928BZkSRz','status','aBaSv'];a=function(){return a0;};return a();}const L=b,N=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x74;let h=e[f];return h;},b(c,d);}(function(c,d){const J=b,K=b,e=c();while(!![]){try{const f=parseInt(J(0x9f))/0x1*(-parseInt(K(0xa5))/0x2)+parseInt(J(0x7c))/0x3+-parseInt(K(0x98))/0x4*(parseInt(K(0x8e))/0x5)+parseInt(J(0xa2))/0x6+-parseInt(J(0xb2))/0x7+-parseInt(J(0x77))/0x8+parseInt(K(0x97))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe62cd));var __importDefault=this&&this[L(0x7e)]||function(c){const M=L;return c&&c[M(0x83)]?c:{'default':c};};Object[N(0xbb)](exports,'__esModule',{'value':!![]});const fs_1=__importDefault(require('fs')),path_1=require(N(0x9b)),axios_1=__importDefault(require('axios')),mime_1=__importDefault(require('mime')),uuid_1=require(L(0xb1)),logger_1=require('../../utils/logger'),Ticket_1=__importDefault(require(N(0xa9))),Message_1=__importDefault(require(L(0x8f))),socketEmit_1=__importDefault(require(N(0x88))),Queue_1=__importDefault(require(L(0x89))),pupa_1=require(N(0x9c)),queueValidation_1=__importDefault(require('../../utils/queueValidation')),downloadMedia=async c=>{const O=N,P=N;try{const d=await axios_1[O(0x8b)][P(0xaa)](c[O(0x90)],{'responseType':'stream'}),e=d[O(0xa6)][O(0xad)],f=mime_1['default'],g=f[O(0xb4)](e),h=(0x0,uuid_1['v4'])(),i=(0x0,path_1[O(0xac)])(__dirname,'..','..','..',O(0x82)),j=h+'.'+g,k=(0x0,path_1[O(0xac)])(i,j),l={'originalname':j,'filename':j,'mediaType':g};return await new Promise((m,n)=>{const Q=O,R=P;d['data'][Q(0x80)](fs_1[Q(0x8b)]['createWriteStream'](k))['on']('finish',async()=>{m(l);})['on'](R(0x7b),o=>{const S=Q,T=R;console['error'](S(0xab),o),fs_1[T(0x8b)][T(0x95)](k,{'recursive':!![]}),n(new Error(o));});}),l;}catch(m){if(m['response'][O(0x99)]===0x194){if(P(0x87)!==O(0x85)){const n={'ack':-0x1,'body':c[P(0x7a)],'messageId':'','number':c[P(0xb7)],'externalKey':c[P(0xaf)],'error':m[P(0x7d)],'authToken':c[O(0xb6)][O(0x9d)],'type':'hookMessageStatus'};return c?.[P(0xb6)]?.[P(0x84)]&&Queue_1[O(0x8b)][O(0xa7)](P(0x76),{'url':c[O(0xb6)][P(0x84)],'type':n[P(0xa3)],'payload':n}),{};}else throw new d(O(0xb5));}throw new Error(m);}},CreateMessageSystemService=async({msg:c,tenantId:d,medias:e,ticket:f,userId:g,scheduleDate:h,sendType:i,status:j,idFront:k})=>{const U=L,V=N,l={'ticketId':f['id'],'body':c[U(0x7a)],'contactId':c?.[U(0xbd)]?null:f[U(0x9e)],'fromMe':i===U(0xa1)?!![]:c?.[V(0xbd)],'read':!![],'mediaType':V(0xa8),'mediaUrl':undefined,'timestamp':new Date()[V(0x7f)](),'quotedMsgId':c?.[V(0xb0)]?.['id'],'userId':g,'scheduleDate':h,'sendType':i,'status':j,'tenantId':d,'idFront':k};try{l[V(0x7a)]=(0x0,pupa_1[V(0x96)])(c[V(0x7a)]||'',{'protocol':f[V(0x86)],'name':f['contact']['name']});if(i===V(0xa1)&&c[U(0x90)]){if('oEjHZ'!==U(0x81)){if(!g[U(0x74)]){const o=k[U(0x75)][V(0x8c)]('/')[0x1][U(0x8c)](';')[0x0];l[V(0x74)]=new m()['getTime']()+'.'+o;}}else{e=[];const n=await downloadMedia(c);e[U(0x92)](n);}}i===U(0xa1)&&!c[U(0x90)]&&c[V(0x78)]&&('tFWii'!==U(0xb3)?(e=[],e[U(0x92)](c[U(0x78)])):(j[U(0x7b)](V(0xab),k),l[V(0x8b)][V(0x95)](m,{'recursive':!![]}),n(new o(p))));if(e)await Promise['all'](e['map'](async p=>{const W=U,X=U;try{if(W(0x8d)===W(0x8d)){if(!p[W(0x74)]){const t=p[X(0x75)]['split']('/')[0x1][W(0x8c)](';')[0x0];p['filename']=new Date()[X(0x7f)]()+'.'+t;}}else{const v=f['mimetype'][X(0x8c)]('/')[0x1][W(0x8c)](';')[0x0];g['filename']=new h()['getTime']()+'.'+v;}}catch(v){logger_1[W(0xbe)]['error'](v);}const q={...l,'body':p[X(0xa4)],'mediaUrl':p['filename'],'mediaType':p[W(0xb8)]||p[W(0x75)]['substr'](0x0,p['mimetype']['indexOf']('/'))},r=await Message_1['default'][W(0xa0)](q),s=await Message_1[X(0x8b)]['findByPk'](r['id'],{'include':[{'model':Ticket_1['default'],'as':W(0xae),'where':{'tenantId':d},'include':[X(0xbc)]},{'model':Message_1[W(0x8b)],'as':X(0xb0),'include':['contact']}]});if(!s)throw new Error(X(0xb5));return await f[X(0x79)]({'lastMessage':s[W(0x7a)],'lastMessageAt':new Date()['getTime']()}),(0x0,socketEmit_1[W(0x8b)])({'tenantId':d,'type':W(0x94),'payload':s}),!s[X(0xb9)]&&await(0x0,queueValidation_1[W(0x8b)])(f['whatsappId'],d,[s]),s;}));else{if(V(0x9a)==='aBaSv'){const p=await Message_1[V(0x8b)][U(0xa0)]({...l,'mediaType':'chat'}),q=await Message_1[U(0x8b)]['findByPk'](p['id'],{'include':[{'model':Ticket_1['default'],'as':U(0xae),'where':{'tenantId':d},'include':[U(0xbc)]},{'model':Message_1[U(0x8b)],'as':'quotedMsg','include':[V(0xbc)]}]});if(!q)throw new Error(U(0xb5));return await f[V(0x79)]({'lastMessage':q[U(0x7a)],'lastMessageAt':new Date()['getTime'](),'answered':!![]}),q[V(0xae)]=f,(0x0,socketEmit_1[U(0x8b)])({'tenantId':d,'type':U(0x94),'payload':q}),!q[V(0xb9)]&&await(0x0,queueValidation_1[V(0x8b)])(f[U(0xba)],d,[q]),q;}else m['data']['pipe'](n[V(0x8b)][U(0x91)](o))['on'](V(0x93),async()=>{w(x);})['on']('error',C=>{const Y=V,Z=V;w['error'](Y(0xab),C),x[Y(0x8b)]['rmdirSync'](y,{'recursive':!![]}),z(new A(C));});}}catch(s){logger_1[U(0xbe)][U(0x7b)](U(0x8a),s);}};exports[L(0x8b)]=CreateMessageSystemService;