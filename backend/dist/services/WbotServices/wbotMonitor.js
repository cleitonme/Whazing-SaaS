'use strict';const I=b,N=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=-parseInt(G(0xa9))/0x1*(parseInt(H(0xab))/0x2)+-parseInt(G(0xb0))/0x3+parseInt(H(0x9f))/0x4+-parseInt(G(0xa3))/0x5+-parseInt(H(0xa1))/0x6+-parseInt(H(0xb4))/0x7*(parseInt(G(0xac))/0x8)+-parseInt(G(0xb6))/0x9*(-parseInt(G(0x95))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70c7d));var __createBinding=this&&this[I(0xb7)]||(Object['create']?function(c,d,e,f){const J=I,K=I;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);if(!g||('get'in g?!d[J(0x9e)]:g[K(0xbe)]||g[K(0xba)])){if('fSwxs'!==J(0xcb)){if(n&&c['__esModule'])return p;var i={};if(q!=null){for(var j in r)if(j!=='default'&&s['prototype'][K(0x93)][J(0xb3)](t,j))u(i,v,j);}return w(i,x),i;}else g={'enumerable':!![],'get':function(){return d[e];}};}Object[J(0xb8)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object['create']?function(c,d){const L=I;Object['defineProperty'](c,L(0x9c),{'enumerable':!![],'value':d});}:function(c,d){const M=I;c[M(0x9c)]=d;}),__importStar=this&&this[N(0xbb)]||function(c){const O=I,P=I;if(c&&c[O(0x9e)])return c;var d={};if(c!=null){for(var e in c)if(e!==P(0x9c)&&Object[O(0xa6)][P(0x93)][P(0xb3)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x99)]||function(c){const Q=I;return c&&c[Q(0x9e)]?c:{'default':c};};Object[N(0xb8)](exports,N(0x9e),{'value':!![]});const Sentry=__importStar(require('@sentry/node')),Contact_1=__importDefault(require(I(0xa5))),Setting_1=__importDefault(require(N(0xc0))),logger_1=require(N(0xb5)),CreateOrUpdateBaileysService_1=__importDefault(require(N(0xad))),FindOrCreateTicketService_1=__importDefault(require(N(0xa0))),Message_1=__importDefault(require('../../models/Message')),wbotMonitor=async(c,d,e)=>{const R=N,U=N;try{c['ws']['on'](R(0xc1),async f=>{const S=R,T=R;if(S(0xc6)!==T(0xb2)){const g=f['content'][0x0];if(g['tag']===S(0xc9)){const h=await Setting_1[S(0x9c)][T(0xc8)]({'where':{'key':T(0x98),'tenantId':e}});h[T(0x9d)]===S(0xb9)&&c[S(0xb1)](g[S(0xbd)]['call-id'],g[S(0xbd)][S(0x9b)]);}if(g[T(0xaa)]===T(0xbf)){if(S(0xc4)===S(0xc7))e[S(0x9c)]=f;else{const j=await Setting_1['default']['findOne']({'where':{'key':T(0x98),'tenantId':e}});if(j['value']==='enabled'){if(S(0x9a)===T(0x9a)){const k=T(0xae),l=await Setting_1[T(0x9c)][S(0xc8)]({'where':{'key':'callRejectMessage','tenantId':e}}),m=await c[S(0xc3)](f['attrs'][T(0x97)],{'text':l[S(0x9d)]||k}),n=f[T(0xbd)]['from'][S(0xa4)](/\D/g,''),o=await Contact_1[T(0x9c)][S(0xc8)]({'where':{'tenantId':e,'number':n}}),p=await(0x0,FindOrCreateTicketService_1['default'])({'contact':o,'whatsappId':c['id'],'unreadMessages':0x1,'tenantId':e,'channel':S(0xa7)}),q=new Date(),r=q['getHours'](),s=q[T(0x96)](),t=S(0xc5)+r+':'+s,u={'messageId':m[S(0xca)]['id'],'ticketId':p['id'],'contactId':o['id'],'body':t,'dataJson':m+'','fromMe':![],'mediaType':S(0xb3),'read':!![],'quotedMsgId':null,'ack':0x1};await p[S(0x94)]({'lastMessage':t}),await Message_1[T(0x9c)][S(0xaf)]({...u,'tenantId':e});}else g[S(0xbc)](h),i[S(0xa8)][S(0xc2)](j);}}}}else f={'enumerable':!![],'get':function(){return i[j];}};}),c['ev']['on'](R(0xa2),async f=>{await(0x0,CreateOrUpdateBaileysService_1['default'])({'whatsappId':d['id'],'contacts':f});});}catch(f){Sentry['captureException'](f),logger_1[R(0xa8)][R(0xc2)](f);}};function a(){const V=['__importStar','captureException','attrs','writable','terminate','../../models/Setting','CB:call','error','sendMessage','WiHWN','Chamada\x20de\x20voz/vídeo\x20perdida\x20às\x20','bCIKw','SZHUq','findOne','offer','key','fSwxs','hasOwnProperty','update','568630aRNlFp','getMinutes','from','rejectCalls','__importDefault','ZMHcL','call-creator','default','value','__esModule','1596992QJdAym','../TicketServices/FindOrCreateTicketService','5497608SmFldw','contacts.upsert','3750930ltaXKp','replace','../../models/Contact','prototype','whatsapp','logger','1XCMEbM','tag','1432854CxqxMn','2936gKFhLF','../BaileysServices/CreateOrUpdateBaileysService','As\x20chamadas\x20de\x20voz\x20e\x20vídeo\x20estão\x20desabilitas\x20para\x20esse\x20WhatsApp,\x20favor\x20enviar\x20uma\x20mensagem\x20de\x20texto.','create','1868499DILKPQ','rejectCall','VMAlm','call','17395pKxhkj','../../utils/logger','630bnfTRi','__createBinding','defineProperty','enabled','configurable'];a=function(){return V;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x93;let h=e[f];return h;},b(c,d);}exports[N(0x9c)]=wbotMonitor;