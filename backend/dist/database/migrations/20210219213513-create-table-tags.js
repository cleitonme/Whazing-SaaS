'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x1bc;let h=e[f];return h;},b(c,d);}const y=b,z=b;(function(c,d){const w=b,x=b,e=c();while(!![]){try{const f=parseInt(w(0x1ca))/0x1+parseInt(w(0x1bd))/0x2+-parseInt(x(0x1c2))/0x3+parseInt(w(0x1c9))/0x4+parseInt(x(0x1d1))/0x5*(parseInt(w(0x1cc))/0x6)+-parseInt(w(0x1c6))/0x7*(-parseInt(w(0x1cd))/0x8)+-parseInt(x(0x1d0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x49a90));Object[y(0x1c8)](exports,'__esModule',{'value':!![]});const sequelize_1=require(z(0x1bc));function a(){const D=['DATE','STRING','sequelize','190414EjayQa','Users','BOOLEAN','dropTable','all','233661dsOvnL','DataTypes','SET\x20NULL','exports','35203prnjcS','Tags','defineProperty','1305836LkEhdO','535184gBOFgI','CASCADE','1056318nvyLRI','792quvZyx','createTable','INTEGER','12845052jVGsfV','10aogEXu'];a=function(){return D;};return a();}module[y(0x1c5)]={'up':c=>{const A=z,B=z;return Promise[A(0x1c1)]([c[A(0x1ce)](B(0x1c7),{'id':{'type':sequelize_1['DataTypes']['INTEGER'],'primaryKey':!![],'autoIncrement':!![],'allowNull':![]},'tag':{'type':sequelize_1[B(0x1c3)][B(0x1d3)],'allowNull':![]},'isActive':{'type':sequelize_1['DataTypes'][A(0x1bf)],'defaultValue':!![],'allowNull':![]},'color':{'type':sequelize_1[B(0x1c3)][A(0x1d3)],'allowNull':![]},'userId':{'type':sequelize_1[B(0x1c3)]['INTEGER'],'references':{'model':A(0x1be),'key':'id'},'onUpdate':A(0x1cb),'onDelete':B(0x1c4)},'tenantId':{'type':sequelize_1[A(0x1c3)][A(0x1cf)],'references':{'model':'Tenants','key':'id'},'onUpdate':'CASCADE','onDelete':B(0x1cb),'allowNull':![],'defaultValue':0x1},'createdAt':{'type':sequelize_1['DataTypes'][A(0x1d2)],'allowNull':![]},'updatedAt':{'type':sequelize_1[A(0x1c3)][B(0x1d2)],'allowNull':![]}})]);},'down':c=>{const C=z;return Promise['all']([c[C(0x1c0)]('Tags')]);}};