'use strict';const a7=b,a8=b;(function(c,d){const a4=b,a5=b,e=c();while(!![]){try{const f=parseInt(a4(0x9d))/0x1*(parseInt(a5(0xe7))/0x2)+parseInt(a4(0x9c))/0x3+-parseInt(a5(0xb8))/0x4*(parseInt(a5(0xea))/0x5)+-parseInt(a4(0xe3))/0x6+-parseInt(a5(0xcb))/0x7+parseInt(a4(0xc4))/0x8+-parseInt(a4(0xb1))/0x9*(-parseInt(a4(0x9e))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2b76c));var __importDefault=this&&this['__importDefault']||function(c){const a6=b;return c&&c[a6(0xd8)]?c:{'default':c};};Object['defineProperty'](exports,a7(0xd8),{'value':!![]});const lodash_1=require('lodash'),Utils_1=require(a8(0xac)),Index_1=require(a8(0xc5)),User_1=__importDefault(require(a7(0xb3))),logger_1=require(a8(0x8b)),events={},JoinChatServer=c=>{const a9=a7,aa=a8,{user:d}=c[a9(0xa1)]['auth'];logger_1[aa(0x81)]['info'](aa(0x9a)+d['name']);const {tenantId:e}=d,f=aa(0x9f)+e;let g;g=Index_1[aa(0xa0)][f];if(g){if(a9(0xc2)===a9(0xc2))g[aa(0xc8)][d['id']]={'sockets':[c['id']],'user':d},g[a9(0xd7)][aa(0xbf)](c),(0x0,Utils_1['sendToSelf'])(c,'joinSuccessfully');else{const i=l['idleUsers'][m['id']][aa(0xd7)];(0x0,n[a9(0xd5)])(i)<0x2?delete u['idleUsers'][v['id']]:w[aa(0x91)][x['id']][a9(0xd7)]=(0x0,y[a9(0xbc)])(i,z['id']);}}if(!g){if(aa(0xa6)===aa(0xa6))Index_1[a9(0xa0)][f]={'sockets':[],'usersOnline':{},'idleUsers':{}},g=Index_1['shared'][f],g[aa(0xc8)][d['id']]={'sockets':[c['id']],'user':d},g['sockets'][aa(0xbf)](c),(0x0,Utils_1[a9(0x95)])(c,d['tenantId']+':joinSuccessfully');else{let j=q[a9(0xa0)][r];j?.[aa(0x91)][s['id']]&&delete j?.[a9(0x91)][E['id']],!j&&(F[a9(0xa0)][G]={'sockets':[],'usersOnline':{},'idleUsers':{}},j=H[a9(0xa0)][I],j[a9(0xc8)][aa(0xbf)](J['id'])),j?.['usersOnline']&&(j[a9(0xc8)][K['id']]={'sockets':[L['id']],'user':M}),C(D);}}},UpdateUsers=c=>{const ab=a7,ac=a8,{user:d}=c[ab(0xa1)][ab(0xd6)],e=ac(0x9f)+d['tenantId'],f=Index_1[ac(0xa0)][e],g=(0x0,Utils_1[ac(0xab)])(f[ab(0xc8)]);(0x0,lodash_1[ab(0x83)])(g,h=>{const ad=ac,ae=ab;if(ad(0xbd)===ad(0x9b))e(f);else{const j=h[ae(0x99)],{sockets:k}=h;j&&k[ad(0xdc)]>0x0&&(0x0,lodash_1[ad(0x83)])(k,l=>{const af=ae,ag=ad;if(af(0xb7)===ag(0xb7)){const m=(0x0,lodash_1[af(0xb4)])(f[af(0xd7)],n=>{const ah=ag,ai=af;if(ah(0x8f)==='BoFQK'){const p=l[ai(0xc8)][m['id']][ah(0xd7)];(0x0,n['size'])(p)<0x2?delete u[ah(0xc8)][h['id']]:w[ai(0xc8)][x['id']][ai(0xd7)]=(0x0,y['without'])(p,z['id']);}else return n['id']===l;});m&&((j[ag(0xcc)][af(0x8a)]||j[ag(0xcc)]['isAgent'])&&m[af(0xe1)](ag(0x90),g));}else h[ag(0xc8)][i['id']][af(0xd7)]=(0x0,j[af(0xbc)])(k,l['id']);});}});},UpdateOnlineBubbles=c=>{const aj=a7,ak=a8,{user:d}=c[aj(0xa1)][ak(0xd6)],e=ak(0x9f)+d['tenantId'],f=Index_1[aj(0xa0)][e],g=(0x0,lodash_1[ak(0x8e)])((0x0,lodash_1[ak(0xd2)])((0x0,lodash_1[ak(0xe4)])(f['usersOnline']),i=>{return i[0x0];})),h=(0x0,lodash_1[ak(0x8e)])((0x0,lodash_1[aj(0xd2)])((0x0,lodash_1[ak(0xe4)])(f[aj(0x91)]),i=>{const al=aj,am=aj;if(al(0xe5)===al(0xcd))i(p[al(0x99)]['id'])===q(r)&&(A=B[al(0x99)]),u(v[al(0x99)]['id'])===w(x)&&(C=D[am(0x99)]);else return i[0x0];}));(0x0,Utils_1[aj(0xbe)])(c,d[ak(0xc9)]+ak(0xa7),{'sortedUserList':g,'sortedIdleList':h});},SpawnOpenChatWindows=c=>{const an=a8,ao=a7,{user:d}=c[an(0xa1)][ao(0xd6)],e=User_1[an(0xd4)][ao(0xdd)](d['id']);(0x0,Utils_1['sendToSelf'])(c,an(0xa3),e);},spawnChatWindow=c=>{const ap=a8;c['on'](ap(0xa3),async d=>{const aq=ap,ar=ap,e=await User_1[aq(0xd4)]['findByPk'](d,{'attributes':['id',aq(0xa9),ar(0xb2),aq(0xa4)]});(0x0,Utils_1[aq(0x95)])(c,'spawnChatWindow',e);});},onSetUserIdle=c=>{const as=a7,at=a8,{user:d}=c[as(0xa1)][at(0xd6)],e=as(0x9f)+d[at(0xc9)];c['on'](d[at(0xc9)]+at(0xba),()=>{const au=at,av=at;let f;f=Index_1[au(0xa0)][e];f&&(f[au(0x91)][d['id']]={'sockets':[c['id']],'user':d});!f&&(Index_1[au(0xa0)][e]={'sockets':[],'usersOnline':{},'idleUsers':{}},f=Index_1['shared'][e],f['idleUsers'][av(0xbf)](c['id']));if(f?.[au(0xc8)][d['id']]){if(au(0xc1)===au(0xb6)){if(d){}else{}}else delete f?.['usersOnline'][d['id']];}UpdateOnlineBubbles(c);});},onSetUserActive=c=>{const aw=a7,ax=a7,{user:d}=c[aw(0xa1)][aw(0xd6)],e='socketData_'+d[aw(0xc9)];c['on'](d['tenantId']+ax(0xe0),()=>{const ay=ax,az=ax;let f=Index_1['shared'][e];f?.[ay(0x91)][d['id']]&&(az(0xaa)===az(0xaa)?delete f?.[az(0x91)][d['id']]:delete e[az(0xc8)][f['id']]),!f&&(ay(0x93)!==az(0x94)?(Index_1[ay(0xa0)][e]={'sockets':[],'usersOnline':{},'idleUsers':{}},f=Index_1[az(0xa0)][e],f[az(0xc8)][ay(0xbf)](c['id'])):(g(h),i(j))),f?.['usersOnline']&&(ay(0x84)!==ay(0x84)?delete e[ay(0x91)][f['id']]:f['usersOnline'][d['id']]={'sockets':[c['id']],'user':d}),UpdateOnlineBubbles(c);});},onUpdateUsers=c=>{const aA=a8;c['on'](aA(0x90),UpdateUsers);},onChatMessage=c=>{const aB=a7,aC=a7,{user:d}=c[aB(0xa1)][aB(0xd6)],{tenantId:e}=d,f=aB(0x9f)+e;c['on'](aC(0x82),function(g){const aD=aB,aE=aC;if('gXKGd'===aD(0xa8)){const h=Index_1['shared'][f];if(h){const {to:i}=g,{from:j}=g;console[aE(0x8d)]('TO',i),console['log'](aE(0x80),j);const k=g[aE(0xaf)];if(g[aE(0xaf)]==='s'){if(aE(0xd9)===aE(0xe9))return e['id']===f;else g[aD(0xaf)]='r';}else{if(aD(0xb9)==='NyBjS'){const {to:n}=n;let o=null;(0x0,o[aD(0xb4)])(p['usersOnline'],B=>{const aF=aE;o(B[aF(0x99)]['id'])===z(n)&&(o=B['user']);});if((0x0,s[aD(0xe6)])(o))return;t[aD(0x96)]=o,(0x0,u[aD(0xcf)])(v[aE(0xd7)],w[aE(0xc8)],o['name'],aE(0x88),x);}else g[aD(0xaf)]='s';}(0x0,Utils_1[aE(0xcf)])(h[aE(0xd7)],h[aE(0xc8)],g['toUser'][aE(0x97)],aE(0x82),g),g[aE(0xaf)]=k,(0x0,Utils_1[aE(0xcf)])(h[aE(0xd7)],h['usersOnline'],g[aD(0x7f)][aD(0x97)],'chatMessage',g);}}else d=aE(0x86);});},onChatTyping=c=>{const aG=a7,aH=a7,{user:d}=c['handshake'][aG(0xd6)],{tenantId:e}=d,f=aH(0x9f)+e;c['on'](aG(0xd1),g=>{const aI=aG,aJ=aG;if(aI(0xc3)!==aJ(0x87)){const h=Index_1['shared'][f];if(h){if(aJ(0xc7)!==aJ(0xc6)){const {to:i}=g,{from:j}=g;let k=null,l=null;(0x0,lodash_1[aI(0xb4)])(h[aJ(0xc8)],function(m){const aK=aI,aL=aI;String(m[aK(0x99)]['id'])===String(i)&&(k=m['user']),String(m[aL(0x99)]['id'])===String(j)&&(l=m[aK(0x99)]);});if((0x0,lodash_1['isNull'])(k)||(0x0,lodash_1[aJ(0xe6)])(l))return;g[aI(0x96)]=k,g[aI(0x7f)]=l,(0x0,Utils_1[aI(0xcf)])(h[aI(0xd7)],h[aJ(0xc8)],k['name'],aI(0xd1),g);}else j[aJ(0xa0)][k]={'sockets':[],'usersOnline':{},'idleUsers':{}},l=m[aI(0xa0)][n],o[aI(0x91)][aI(0xbf)](p['id']);}}else q['shared'][r]={'sockets':[],'usersOnline':{},'idleUsers':{}},s=t['shared'][u],v[aI(0xc8)][w['id']]={'sockets':[x['id']],'user':y},z[aI(0xd7)][aI(0xbf)](A),(0x0,B['sendToSelf'])(C,D[aI(0xc9)]+':joinSuccessfully');});},onChatStopTyping=c=>{const aM=a8,aN=a7,{user:d}=c[aM(0xa1)]['auth'],{tenantId:e}=d,f=aN(0x9f)+e;c['on']('chatStopTyping',g=>{const aO=aN,aP=aN,h=Index_1[aO(0xa0)][f];if(h){if(aO(0xa5)!==aO(0xa5))delete e?.[aP(0xc8)][f['id']];else{const {to:j}=g;let k=null;(0x0,lodash_1['find'])(h[aO(0xc8)],l=>{const aQ=aO,aR=aP;String(l[aQ(0x99)]['id'])===String(j)&&(aR(0xb5)===aR(0xb5)?k=l['user']:f['on'](aQ(0xd0),()=>{i(j);}));});if((0x0,lodash_1[aP(0xe6)])(k)){if('KuXxH'===aP(0xdf))e(f[aO(0xc9)]);else return;}g['toUser']=k,(0x0,Utils_1[aO(0xcf)])(h[aP(0xd7)],h['usersOnline'],k['name'],aO(0x88),g);}}});},saveChatWindow=c=>{const aS=a8;c['on'](aS(0xce),async d=>{const aT=aS,aU=aS;if(aT(0x7e)===aT(0x89)){if(t[aU(0xc8)][u['id']]){const g=K[aU(0xc8)][L['id']][aT(0xd7)];(0x0,M[aU(0xd5)])(g)<0x2?delete T[aT(0xc8)][U['id']]:V['usersOnline'][W['id']]['sockets']=(0x0,X[aU(0xbc)])(g,Y['id']);}const f=(0x0,E[aT(0xe2)])(F['sockets'],{'id':G['id']});H[aU(0xd7)]=(0x0,I[aT(0xbc)])(J['sockets'],f);}else{const {userId:f}=d,{remove:g}=d,h=await User_1['default'][aT(0xdd)](f);if(h){if(aU(0xb0)===aT(0xdb))e=f[aT(0x99)];else{if(g){}else{}}}}});},onDisconnect=c=>{const aV=a8;c['on'](aV(0xad),async d=>{const aW=aV,aX=aV;if(aW(0xe8)==='IjLEf'){const {user:e}=c[aW(0xa1)]['auth'],{tenantId:f}=e,g=aX(0x9f)+f,h=Index_1[aW(0xa0)][g];if(h?.['usersOnline']){if(h[aW(0xc8)][e['id']]){const l=h[aW(0xc8)][e['id']][aX(0xd7)];(0x0,lodash_1['size'])(l)<0x2?delete h[aW(0xc8)][e['id']]:h['usersOnline'][e['id']][aX(0xd7)]=(0x0,lodash_1[aX(0xbc)])(l,c['id']);}const k=(0x0,lodash_1[aW(0xe2)])(h[aX(0xd7)],{'id':c['id']});h[aX(0xd7)]=(0x0,lodash_1[aW(0xbc)])(h[aW(0xd7)],k);}if(h?.[aX(0x91)]){if(h[aW(0x91)][e['id']]){const n=h[aW(0x91)][e['id']][aX(0xd7)];if((0x0,lodash_1[aX(0xd5)])(n)<0x2){if(aX(0xd3)===aX(0xd3))delete h[aX(0x91)][e['id']];else return g&&h['__esModule']?m:{'default':j};}else h[aW(0x91)][e['id']][aX(0xd7)]=(0x0,lodash_1['without'])(n,c['id']);}const m=(0x0,lodash_1[aW(0xe2)])(h[aX(0xd7)],{'id':c['id']});h[aX(0xd7)]=(0x0,lodash_1[aW(0xbc)])(h[aX(0xd7)],m);}const j=await User_1[aW(0xd4)][aW(0xdd)](e['id']);j?.['update']({'status':aX(0x92),'lastOnline':new Date()}),UpdateOnlineBubbles(c),d==='transport\x20error'&&(d=aW(0x86)),logger_1[aX(0x81)]['debug'](aX(0xda)+d+'):\x20'+e[aX(0xa9)]+aX(0xde)+c['id']);}else{const {to:r}=v,{from:s}=w;x['log']('TO',r),y[aW(0x8d)](aW(0x80),s);const t=z['type'];A['type']==='s'?O[aX(0xaf)]='r':P[aW(0xaf)]='s',(0x0,D[aX(0xcf)])(E[aW(0xd7)],F[aX(0xc8)],G['toUser']['username'],'chatMessage',H),I[aX(0xaf)]=t,(0x0,J['sendToUser'])(K[aX(0xd7)],L[aW(0xc8)],M[aX(0x7f)][aW(0x97)],aW(0x82),N);}});};events['onSetUserIdle']=onSetUserIdle,events[a7(0x98)]=onSetUserActive,events[a7(0x8c)]=onUpdateUsers,events['spawnChatWindow']=spawnChatWindow,events[a7(0xc0)]=onChatMessage,events[a8(0x85)]=onChatTyping,events['onChatStopTyping']=onChatStopTyping,events[a8(0xce)]=saveChatWindow,events[a8(0xbb)]=onDisconnect,events[a7(0xa2)]=c=>{const aY=a8,aZ=a8,{user:d}=c[aY(0xa1)][aY(0xd6)];c['on'](d[aZ(0xc9)]+aY(0xa7),()=>{UpdateOnlineBubbles(d['tenantId']);});},events[a8(0xd0)]=c=>{const b0=a7;c['on'](b0(0xd0),()=>{const b1=b0,b2=b0;if('AdpNN'==='UvQjx'){let e;e=q[b1(0xa0)][r],e&&(e[b2(0x91)][E['id']]={'sockets':[F['id']],'user':G}),!e&&(H[b1(0xa0)][I]={'sockets':[],'usersOnline':{},'idleUsers':{}},e=J['shared'][K],e[b1(0x91)]['push'](L['id'])),e?.[b1(0xc8)][A['id']]&&delete e?.['usersOnline'][M['id']],C(D);}else SpawnOpenChatWindows(c);});};function register(c){const b3=a8,b4=a8;if(!c[b3(0xa1)]?.[b4(0xd6)]?.[b4(0xc9)]){if('iegSv'===b4(0xae)){const {user:e}=g[b4(0xa1)][b3(0xd6)],f=h[b4(0xd4)][b4(0xdd)](e['id']);(0x0,i[b4(0x95)])(j,b3(0xa3),f);}else return;}events['onSetUserIdle'](c),events[b3(0x98)](c),events['onUpdateUsers'](c),events[b3(0xa2)](c),events[b3(0xa3)](c),events[b4(0xd0)](c),events[b4(0xc0)](c),events[b3(0x85)](c),events[b4(0xca)](c),events[b3(0xce)](c),events[b4(0xbb)](c),c[b3(0xa1)][b3(0xd6)][b3(0x99)]['id']&&JoinChatServer(c);}function a(){const b5=['push','onChatMessage','Iaccw','REnHt','zUvPj','922256yEvhwj','./Index','RnUdx','ZCoQM','usersOnline','tenantId','onChatStopTyping','405034LNJOtM','role','xtSaA','saveChatWindow','sendToUser','getOpenChatWindows','chatTyping','sortBy','WZPvn','default','size','auth','sockets','__esModule','GpdnX','User\x20disconnected\x20(','ZyJts','length','findByPk','\x20-\x20','Bzycv',':setUserActive','emit','findKey','1788534yCYBfN','toPairs','qQstX','isNull','7694MllLFe','IjLEf','HNqXX','3920XPzFeV','JLMMM','fromUser','FROM','logger','chatMessage','forEach','oqaJN','onChatTyping','client\x20terminated','GBVMA','chatStopTyping','pkXar','isAdmin','../../utils/logger','onUpdateUsers','log','fromPairs','AYvTe','updateUsers','idleUsers','offline','awFSb','jIMwl','sendToSelf','toUser','username','onSetUserActive','user','joinChatServer\x20USER\x20','bQzIa','791265WSAMFu','15HJruji','8110JqmYot','socketData_','shared','handshake','updateOnlineBubbles','spawnChatWindow','profile','Kehrr','tjOCf',':chat:updateOnlineBubbles','gXKGd','name','zjKoh','sortByKeys','./Utils','disconnect','AjZAy','type','XGsuG','1575gLfFEI','email','../../models/User','find','CLcep','amPyq','aoUtk','228fnZyEh','OnCLM',':setUserIdle','onDisconnect','without','reEcE','sendToAllConnectedClients'];a=function(){return b5;};return a();}const eventLoop=c=>{UpdateUsers(c),UpdateOnlineBubbles(c);},chat={'events':events,'eventLoop':eventLoop,'register':register};function b(c,d){const e=a();return b=function(f,g){f=f-0x7e;let h=e[f];return h;},b(c,d);}exports[a8(0xd4)]=chat;