'use strict';const j=b,k=b;(function(c,d){const h=b,i=b,e=c();while(!![]){try{const f=parseInt(h(0xd7))/0x1*(-parseInt(i(0xd2))/0x2)+-parseInt(h(0xce))/0x3*(-parseInt(i(0xd5))/0x4)+parseInt(i(0xc3))/0x5+parseInt(h(0xd4))/0x6+parseInt(i(0xc5))/0x7+parseInt(h(0xc2))/0x8+parseInt(i(0xcd))/0x9*(-parseInt(h(0xcb))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6e3c5));function a(){const p=['DataTypes','9ofXOns','1077168KuJNpV','restrict','isActive','tenantId','25410zoEmYE','Groups','3184944VNnKjX','4yNbdjF','__esModule','11YxVzxE','exports','BOOLEAN','1418224JDqiFR','3091790wWyryA','INTEGER','5747595qfuBue','defineProperty','addColumn','describeTable','sequelize','CASCADE','19153210NVPNAi'];a=function(){return p;};return a();}Object[j(0xc6)](exports,k(0xd6),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0xc0;let h=e[f];return h;},b(c,d);}const sequelize_1=require(j(0xc9));module[j(0xc0)]={'up':async c=>{const l=k,m=k,d=await c[l(0xc8)](l(0xd3));(!d||!d['tenantId'])&&await c[l(0xc7)](m(0xd3),l(0xd1),{'type':sequelize_1[l(0xcc)][m(0xc4)],'references':{'model':'Tenants','key':'id'},'onUpdate':l(0xca),'onDelete':l(0xcf),'allowNull':![],'defaultValue':0x1}),(!d||!d[l(0xd0)])&&await c[l(0xc7)](m(0xd3),l(0xd0),{'type':sequelize_1['DataTypes'][l(0xc1)],'allowNull':![],'defaultValue':!![]});},'down':async c=>{const n=j,o=j;await c['removeColumn'](n(0xd3),o(0xd1)),await c['removeColumn'](o(0xd3),o(0xd0));}};