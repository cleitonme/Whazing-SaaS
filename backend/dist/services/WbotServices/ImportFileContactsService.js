'use strict';const z=b,B=b;(function(c,d){const x=b,y=b,e=c();while(!![]){try{const f=-parseInt(x(0x17c))/0x1+parseInt(y(0x17e))/0x2+parseInt(y(0x185))/0x3+parseInt(y(0x17a))/0x4+parseInt(y(0x19f))/0x5*(-parseInt(x(0x178))/0x6)+parseInt(y(0x196))/0x7+parseInt(y(0x19e))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x580ad));function b(c,d){const e=a();return b=function(f,g){f=f-0x16f;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[z(0x1a0)]||function(c){const A=z;return c&&c[A(0x179)]?c:{'default':c};};Object[B(0x18b)](exports,z(0x179),{'value':!![]}),exports[z(0x170)]=void 0x0;function a(){const G=['number','12dNeDnQ','__esModule','1716088HErlFR','values','282424ceoNNA','Sheets','101742DfzwvM','CONTACT_NOT_FOUND','sheet_to_json','Número\x20não\x20é\x20uma\x20conta\x20válida\x20','utils','length','Numero','125373oOLvWI','IINox','e-mail','email','push','has','defineProperty','E-mail','Número','exists','shhVX','default','nome','head','path','xlsx','numero','3627288VzFDyx','setTags','error','../../models/Whatsapp','readFile','lodash','findOne','Email','836312ObqAZM','1253405WlAdaB','__importDefault','cuLpA','../../models/Contact','setWallets','../../errors/AppError','whatsapp','NOT_FOUND_WHATSAPP_CONNECTED','onWhatsApp','número','replace','ImportFileContactsService','tenantId','@$s.whatsapp.net','Nome','getWbot','sjETa','forEach'];a=function(){return G;};return a();}const lodash_1=require(z(0x19b)),xlsx_1=__importDefault(require(z(0x194))),Contact_1=__importDefault(require(z(0x1a2))),Whatsapp_1=__importDefault(require(z(0x199))),AppError_1=__importDefault(require(z(0x1a4))),wbot_baileys_1=require('../../libs/wbot-baileys');async function ImportFileContactsService(c,d,e,f){const C=B,D=z,g=xlsx_1[C(0x190)][C(0x19a)](d?.[C(0x193)]),h=(0x0,lodash_1[D(0x192)])(Object[C(0x17b)](g[D(0x17d)])),i=xlsx_1[D(0x190)][C(0x182)][C(0x180)](h,{'header':0x0}),j=[];i[C(0x176)](l=>{const E=C,F=D;let m='',n='',o='';((0x0,lodash_1[E(0x18a)])(l,F(0x191))||(0x0,lodash_1[E(0x18a)])(l,E(0x173)))&&(m=l[F(0x191)]||l[E(0x173)]);if((0x0,lodash_1['has'])(l,F(0x195))||(0x0,lodash_1[E(0x18a)])(l,E(0x1a8))||(0x0,lodash_1['has'])(l,E(0x184))||(0x0,lodash_1[F(0x18a)])(l,F(0x18d))){if('NEazz'==='knrFg')return g&&h[E(0x179)]?i:{'default':j};else n=l[F(0x195)]||l[F(0x1a8)]||l['Numero']||l['Número'],n=(''+n)[F(0x16f)](/\D/g,'');}((0x0,lodash_1[F(0x18a)])(l,F(0x188))||(0x0,lodash_1[E(0x18a)])(l,F(0x187))||(0x0,lodash_1[E(0x18a)])(l,E(0x19d))||(0x0,lodash_1['has'])(l,E(0x18c)))&&(o=l[F(0x188)]||l[E(0x187)]||l[E(0x19d)]||l[F(0x18c)]),m=m||n,m&&n&&n['length']>=0xa&&(F(0x18f)!==E(0x18f)?e['push'](f):j[E(0x189)]({'name':m,'number':n,'email':o,'tenantId':c}));});const k=[];for(const l of j){try{l[C(0x177)]=l[D(0x177)][D(0x16f)]('-','')[D(0x16f)]('\x20','')[C(0x16f)]('(','')['replace'](')','');const m=await Whatsapp_1[C(0x190)][D(0x19c)]({'where':{'status':'CONNECTED','tenantId':c,'type':D(0x1a5)}});if(!m)throw new AppError_1[(D(0x190))](C(0x1a6),0x194);const n=(0x0,wbot_baileys_1[C(0x174)])(m['id']),o=l[D(0x177)]+D(0x172),p=await n[D(0x1a7)](o);if(p[0x0][C(0x18e)]==![]){if('cuLpA'===C(0x1a1))throw new AppError_1[(D(0x190))]('CONTACT_NOT_FOUND',0x194);else h=i['email']||j[D(0x187)]||k[D(0x19d)]||l[D(0x18c)];}l['number']=p[0x0]['jid']['split']('@')[0x0];const [q,r]=await Contact_1['default']['findOrCreate']({'where':{'number':l[D(0x177)],'tenantId':l[C(0x171)]},'defaults':l}),s=q;r&&k[C(0x189)](q);if(e?.[D(0x183)]){if(C(0x175)===D(0x175))await s[C(0x197)](e,{'through':{'tenantId':c}});else throw new d['default'](D(0x17f),0x194);}f?.[D(0x183)]&&await s[D(0x1a3)](f,{'through':{'tenantId':c}});}catch(v){D(0x186)!=='RdEbL'?console[D(0x198)](C(0x181)+l['number']):(j=k['numero']||l[C(0x1a8)]||m[D(0x184)]||n[D(0x18d)],o=(''+p)[D(0x16f)](/\D/g,''));}}return k;}exports[z(0x170)]=ImportFileContactsService;