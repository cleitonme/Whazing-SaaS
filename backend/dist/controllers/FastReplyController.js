'use strict';const M=b,N=b;function a(){const a1=['message','status','default','1719613MzBXhQ','382510hBmfjk','required','mcyft','hasOwnProperty','wDfNF','remove','../errors/AppError','BkgSS','index','__importDefault','defineProperty','body','shape','validate','create','vhUIn','profile','1542FAVfOx','call','get','__importStar','json','2385HkROvY','../services/FastReplyServices/CreateFastReplyService','getOwnPropertyDescriptor','number','ERJgp','prototype','writable','update','128eCacVE','configurable','string','__setModuleDefault','gTwSS','__esModule','admin','568930pMKrKA','yup','1181760leSgrg','ElJPv','6711lDLMWp','ERR_NO_PERMISSION','params','user','../services/FastReplyServices/ListFastReplyService','9970NdZwPL','object','18qTtcsS','../services/FastReplyServices/DeleteFastReplyService','Fast\x20Reply\x20deleted'];a=function(){return a1;};return a();}(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=parseInt(G(0x1e1))/0x1+parseInt(H(0x1ea))/0x2+parseInt(G(0x1dc))/0x3*(parseInt(G(0x1d1))/0x4)+-parseInt(G(0x1c9))/0x5*(parseInt(H(0x1c4))/0x6)+parseInt(G(0x1e9))/0x7+-parseInt(G(0x1da))/0x8+parseInt(G(0x1e3))/0x9*(-parseInt(G(0x1d8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20ce5));var __createBinding=this&&this['__createBinding']||(Object['create']?function(c,d,e,f){const I=b,J=b;if(f===undefined)f=e;var g=Object[I(0x1cb)](d,e);(!g||('get'in g?!d[I(0x1d6)]:g[I(0x1cf)]||g[J(0x1d2)]))&&(g={'enumerable':!![],'get':function(){const K=I,L=I;if(K(0x1ec)!==K(0x1ee))return d[e];else{if(p===q)r=s;var i=t[L(0x1cb)](u,v);(!i||(K(0x1c6)in i?!w[L(0x1d6)]:i[L(0x1cf)]||i[L(0x1d2)]))&&(i={'enumerable':!![],'get':function(){return i[F];}}),z[L(0x1bd)](A,B,i);}}}),Object[I(0x1bd)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[M(0x1d4)]||(Object[N(0x1c1)]?function(c,d){const O=M,P=N;Object[O(0x1bd)](c,O(0x1e8),{'enumerable':!![],'value':d});}:function(c,d){c['default']=d;}),__importStar=this&&this[M(0x1c7)]||function(c){const Q=M,R=M;if(c&&c[Q(0x1d6)])return c;var d={};if(c!=null){for(var e in c)if(e!==R(0x1e8)&&Object[Q(0x1ce)][R(0x1ed)][R(0x1c5)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[M(0x1bc)]||function(c){const S=M;return c&&c[S(0x1d6)]?c:{'default':c};};Object[M(0x1bd)](exports,M(0x1d6),{'value':!![]}),exports['remove']=exports[N(0x1d0)]=exports[M(0x1bb)]=exports['store']=void 0x0;const Yup=__importStar(require(N(0x1d9))),AppError_1=__importDefault(require(M(0x1f0))),CreateFastReplyService_1=__importDefault(require(N(0x1ca))),ListFastReplyService_1=__importDefault(require(M(0x1e0))),DeleteFastReplyService_1=__importDefault(require(N(0x1e4))),UpdateFastReplyService_1=__importDefault(require('../services/FastReplyServices/UpdateFastReplyService')),store=async(c,d)=>{const T=M,U=N,{tenantId:e}=c[T(0x1df)];if(c[U(0x1df)]['profile']!==U(0x1d7))throw new AppError_1[(T(0x1e8))](T(0x1dd),0x193);const f={...c[U(0x1be)],'userId':c[T(0x1df)]['id'],'tenantId':e},g=Yup['object']()[U(0x1bf)]({'key':Yup[T(0x1d3)]()[T(0x1eb)](),'message':Yup[U(0x1d3)]()[U(0x1eb)](),'userId':Yup[U(0x1cc)]()['required'](),'tenantId':Yup[U(0x1cc)]()[T(0x1eb)]()});try{await g[U(0x1c0)](f);}catch(i){if(T(0x1ba)===U(0x1ba))throw new AppError_1['default'](i[U(0x1e6)]);else f[U(0x1bd)](g,T(0x1e8),{'enumerable':!![],'value':h});}const h=await(0x0,CreateFastReplyService_1[U(0x1e8)])(f);return d[U(0x1e7)](0xc8)['json'](h);};exports['store']=store;const index=async(c,d)=>{const V=N,W=M,{tenantId:e}=c[V(0x1df)],f=await(0x0,ListFastReplyService_1['default'])({'tenantId':e});return d[V(0x1e7)](0xc8)[V(0x1c8)](f);};exports['index']=index;function b(c,d){const e=a();return b=function(f,g){f=f-0x1ba;let h=e[f];return h;},b(c,d);}const update=async(c,d)=>{const X=M,Y=M,{tenantId:e}=c['user'];if(c[X(0x1df)][X(0x1c3)]!=='admin'){if(X(0x1db)!==X(0x1db))throw new d[(X(0x1e8))]('ERR_NO_PERMISSION',0x193);else throw new AppError_1[(Y(0x1e8))](X(0x1dd),0x193);}const f={...c['body'],'userId':c[X(0x1df)]['id'],'tenantId':e},g=Yup[Y(0x1e2)]()[X(0x1bf)]({'key':Yup[X(0x1d3)]()[Y(0x1eb)](),'message':Yup['string']()[X(0x1eb)](),'userId':Yup['number']()[X(0x1eb)]()});try{if(X(0x1d5)!==Y(0x1cd))await g[X(0x1c0)](f);else throw new e['default'](f[Y(0x1e6)]);}catch(l){throw new AppError_1[(Y(0x1e8))](l[Y(0x1e6)]);}const {fastReplyId:h}=c[X(0x1de)],i=await(0x0,UpdateFastReplyService_1[Y(0x1e8)])({'fastReplyData':f,'fastReplyId':h});return d[Y(0x1e7)](0xc8)[Y(0x1c8)](i);};exports[N(0x1d0)]=update;const remove=async(c,d)=>{const Z=M,a0=M,{tenantId:e}=c[Z(0x1df)];if(c['user'][a0(0x1c3)]!=='admin'){if('YvcvW'!==Z(0x1c2))throw new AppError_1['default'](Z(0x1dd),0x193);else e[a0(0x1e8)]=f;}const {fastReplyId:f}=c['params'];return await(0x0,DeleteFastReplyService_1[Z(0x1e8)])({'id':f,'tenantId':e}),d[Z(0x1e7)](0xc8)[a0(0x1c8)]({'message':a0(0x1e5)});};exports[M(0x1ef)]=remove;