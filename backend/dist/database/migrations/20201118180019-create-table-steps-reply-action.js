'use strict';const w=b,x=b;(function(c,d){const u=b,v=b,e=c();while(!![]){try{const f=parseInt(u(0x157))/0x1+-parseInt(v(0x156))/0x2*(parseInt(v(0x14e))/0x3)+parseInt(u(0x161))/0x4+-parseInt(u(0x160))/0x5*(parseInt(u(0x14f))/0x6)+parseInt(u(0x150))/0x7+-parseInt(v(0x154))/0x8+parseInt(v(0x158))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf396a));function a(){const B=['SET\x20NULL','Users','INTEGER','2871654ShtrHC','6174JlVNvk','10074722vvFUuY','sequelize','StepsReply','DATE','15858632YXmcCO','DataTypes','2mrMELt','1369126MglbVK','11690676zDcali','createTable','STRING','__esModule','StepsReplyActions','CASCADE','exports','defineProperty','9035WaOMBD','6757408XGktjT'];a=function(){return B;};return a();}Object[w(0x15f)](exports,w(0x15b),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x14d;let h=e[f];return h;},b(c,d);}const sequelize_1=require(w(0x151));module[x(0x15e)]={'up':c=>{const y=x,z=x;return c[y(0x159)](z(0x15c),{'id':{'type':sequelize_1[y(0x155)]['INTEGER'],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'stepReplyId':{'type':sequelize_1[y(0x155)][z(0x14d)],'references':{'model':y(0x152),'key':'id'},'onUpdate':y(0x15d),'onDelete':z(0x15d)},'words':{'type':sequelize_1['DataTypes'][z(0x15a)],'allowNull':![]},'action':{'type':sequelize_1['DataTypes']['INTEGER'],'allowNull':![],'defaultValue':0x0},'reply':{'type':sequelize_1[z(0x155)][y(0x15a)],'allowNull':![]},'userId':{'type':sequelize_1['DataTypes'][z(0x14d)],'references':{'model':y(0x163),'key':'id'},'onUpdate':y(0x15d),'onDelete':y(0x162)},'createdAt':{'type':sequelize_1[z(0x155)][y(0x153)],'allowNull':![]},'updatedAt':{'type':sequelize_1['DataTypes'][z(0x153)],'allowNull':![]}});},'down':c=>{const A=x;return c['dropTable'](A(0x15c));}};