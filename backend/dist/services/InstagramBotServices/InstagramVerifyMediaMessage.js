'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xcd;let h=e[f];return h;},b(c,d);}const w=b,y=b;(function(c,d){const u=b,v=b,e=c();while(!![]){try{const f=-parseInt(u(0x100))/0x1*(parseInt(u(0xd0))/0x2)+-parseInt(u(0xe4))/0x3+-parseInt(v(0xe2))/0x4*(parseInt(u(0xdf))/0x5)+parseInt(v(0xe5))/0x6+parseInt(v(0xd4))/0x7+parseInt(u(0xf0))/0x8+parseInt(v(0xef))/0x9*(parseInt(u(0xe1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd21c1));var __importDefault=this&&this[w(0xe3)]||function(c){const x=w;return c&&c[x(0xf7)]?c:{'default':c};};Object[y(0xe6)](exports,y(0xf7),{'value':!![]});const path_1=require(w(0xf5)),fs_1=require('fs'),axios_1=__importDefault(require(w(0xff))),CreateMessageService_1=__importDefault(require(w(0xee))),getExt=c=>{const z=y,A=y,d=c[z(0xd3)]('?'),e=d[0x0]['split']('/'),f=e[e['length']-0x1][z(0xd3)]('.');return f[0x1];},downloadFile=async(c,d)=>{const B=y,C=w,e=await(0x0,axios_1[B(0xd7)])({'url':c[C(0xcd)](),'method':C(0xd1),'responseType':'stream'});await new Promise((f,g)=>{const D=B,E=C;'WwXAB'!==D(0xdb)?e[E(0xfa)][E(0xf3)]((0x0,fs_1[E(0xf1)])(d))['on']('finish',async()=>f(!![]))['on'](D(0xcf),h=>{const F=E,G=E;console[F(0xcf)](F(0xde),h),g(new Error(h));}):(l=m['message'][E(0xdd)][E(0xd5)],n=o[D(0xf6)][D(0xdd)][D(0xd5)][E(0xfb)],p=q(r[E(0xeb)]),s=D(0xfb),t='áudio');});},VerifyMediaMessage=async(c,d,e,f)=>{const H=w,I=w;let g,h,i,j='application',k=H(0xed);c['message']?.[H(0xd5)]?.['media_type']===0x1&&(h=c[H(0xf6)][I(0xd5)],[g]=c[H(0xf6)][I(0xd5)]['image_versions2'][H(0xd8)],i=getExt(g[H(0xe7)]),j=H(0xd2),k=I(0xf2));c[I(0xf6)]?.[H(0xd5)]?.[H(0xd9)]===0x2&&(I(0xfe)==='yinDF'?(h=c[H(0xf6)]['media'],[g]=c['message'][H(0xd5)][H(0xf8)],i=getExt(g[H(0xe7)]),j='video',k=H(0xec)):(h[I(0xcf)](H(0xde),i),j(new k(l))));if(c['message']?.[I(0xfc)]===H(0xdd)){if(I(0xfd)!=='dlUaF')h=c['message']['voice_media']['media'],g=c[I(0xf6)][I(0xdd)][H(0xd5)]['audio'],i=getExt(g[I(0xeb)]),j=H(0xfb),k=H(0xf9);else return g&&h[H(0xf7)]?i:{'default':j};}const l=e['id']+'_'+h['id']+'_'+new Date()[I(0xe8)]()+'.'+i,m=(0x0,path_1[H(0xf4)])(__dirname,'..','..','..',I(0xe9),l),n=c[I(0xf6)]['item_type']==='voice_media'?g[H(0xeb)]:g['url'];await downloadFile(n,m);const o={'messageId':String(c[I(0xf6)]?.[H(0xda)]),'ticketId':e['id'],'contactId':d?undefined:f['id'],'body':c[I(0xf6)]?.[H(0xdc)]||c['message']?.[H(0xd6)]||k,'fromMe':d,'read':d,'mediaUrl':l,'mediaType':j,'quotedMsgId':'','timestamp':new Date()[I(0xe8)](),'status':d?'sended':I(0xe0)};await e[I(0xce)]({'lastMessage':c[H(0xf6)]?.[H(0xdc)]||c['message']?.[H(0xd6)]||k,'lastMessageAt':new Date()[I(0xe8)](),'answered':d||![]});const p=await(0x0,CreateMessageService_1[I(0xd7)])({'messageData':o,'tenantId':e[I(0xea)]});return p;};exports[y(0xd7)]=VerifyMediaMessage;function a(){const J=['candidates','media_type','item_id','GohnI','text','voice_media','ERROR\x20DONWLOAD','2347365PiPnro','received','1364830kXpRuX','8coBFyi','__importDefault','1835124SHhXbb','5184906nutrzM','defineProperty','url','getTime','public','tenantId','audio_src','vídeo','arquivo','../MessageServices/CreateMessageService','63OuiFXO','8150176ngHpyt','createWriteStream','imagem','pipe','join','path','message','__esModule','video_versions','áudio','data','audio','item_type','pjrQf','yinDF','axios','9PCDlTh','toString','update','error','260518MuQUvJ','GET','image','split','5217030InQcgL','media','caption','default'];a=function(){return J;};return a();}