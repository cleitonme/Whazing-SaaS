'use strict';const j=b,k=b;function a(){const p=['220648ushPoI','DataTypes','117oCyaPI','BOOLEAN','addColumn','describeTable','5GlbwkK','609220lSwNfh','43534mBCafE','30LPmdKv','sequelize','343jEpiJY','347912ZjyFrT','tenantId','restrict','Groups','1173210agZXdA','INTEGER','40854SUXslt','isActive','defineProperty','removeColumn','12607881ffHmrL'];a=function(){return p;};return a();}(function(c,d){const h=b,i=b,e=c();while(!![]){try{const f=parseInt(h(0x1db))/0x1*(-parseInt(h(0x1dd))/0x2)+parseInt(i(0x1ce))/0x3+-parseInt(h(0x1d5))/0x4*(-parseInt(h(0x1c7))/0x5)+parseInt(i(0x1d0))/0x6*(parseInt(i(0x1c9))/0x7)+-parseInt(h(0x1ca))/0x8*(-parseInt(i(0x1d7))/0x9)+-parseInt(i(0x1dc))/0xa+-parseInt(i(0x1d4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4a7d8));Object[j(0x1d2)](exports,'__esModule',{'value':!![]});const sequelize_1=require(j(0x1c8));function b(c,d){const e=a();return b=function(f,g){f=f-0x1c7;let h=e[f];return h;},b(c,d);}module['exports']={'up':async c=>{const l=j,m=j,d=await c[l(0x1da)](l(0x1cd));(!d||!d['tenantId'])&&await c[m(0x1d9)](l(0x1cd),m(0x1cb),{'type':sequelize_1[m(0x1d6)][m(0x1cf)],'references':{'model':'Tenants','key':'id'},'onUpdate':'CASCADE','onDelete':l(0x1cc),'allowNull':![],'defaultValue':0x1}),(!d||!d[m(0x1d1)])&&await c[l(0x1d9)](m(0x1cd),m(0x1d1),{'type':sequelize_1[l(0x1d6)][m(0x1d8)],'allowNull':![],'defaultValue':!![]});},'down':async c=>{const n=k,o=k;await c[n(0x1d3)](o(0x1cd),n(0x1cb)),await c[o(0x1d3)]('Groups',o(0x1d1));}};