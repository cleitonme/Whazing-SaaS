'use strict';const s=b,t=b;(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=parseInt(q(0xe8))/0x1+parseInt(q(0xe4))/0x2+parseInt(q(0xe5))/0x3*(-parseInt(q(0xea))/0x4)+-parseInt(r(0xf1))/0x5+-parseInt(q(0xf4))/0x6+parseInt(q(0xef))/0x7+-parseInt(r(0xe6))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5176c));function b(c,d){const e=a();return b=function(f,g){f=f-0xe0;let h=e[f];return h;},b(c,d);}function a(){const y=['RESTRICT','2352735kQmoSr','Tags','804865nzggnu','Tenants','ContactTags','1839444BTbTQf','__esModule','INTEGER','CASCADE','DATE','defineProperty','786790cXYWTV','1384143MrEWUK','952208hHEgEp','sequelize','652130UpUqyt','createTable','4AwUiQE','dropTable','DataTypes','Contacts'];a=function(){return y;};return a();}Object[s(0xe3)](exports,s(0xf5),{'value':!![]});const sequelize_1=require(s(0xe7));module['exports']={'up':c=>{const u=t,v=t;return c[u(0xe9)](u(0xf3),{'id':{'type':sequelize_1[u(0xec)][v(0xe0)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'tagId':{'type':sequelize_1[v(0xec)][v(0xe0)],'references':{'model':u(0xf0),'key':'id'},'onUpdate':v(0xe1),'onDelete':u(0xee),'allowNull':![]},'contactId':{'type':sequelize_1['DataTypes'][v(0xe0)],'references':{'model':u(0xed),'key':'id'},'onUpdate':u(0xe1),'onDelete':v(0xe1),'allowNull':![]},'tenantId':{'type':sequelize_1[v(0xec)]['INTEGER'],'references':{'model':v(0xf2),'key':'id'},'onUpdate':v(0xe1),'onDelete':'CASCADE','allowNull':![]},'createdAt':{'type':sequelize_1[v(0xec)]['DATE'],'allowNull':![]},'updatedAt':{'type':sequelize_1['DataTypes'][v(0xe2)],'allowNull':![]}});},'down':c=>{const w=t,x=t;return c[w(0xeb)](w(0xf3));}};