'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x131;let h=e[f];return h;},b(c,d);}const I=b,J=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=parseInt(G(0x13a))/0x1*(parseInt(G(0x149))/0x2)+parseInt(H(0x142))/0x3*(parseInt(H(0x133))/0x4)+-parseInt(H(0x136))/0x5*(-parseInt(G(0x145))/0x6)+-parseInt(H(0x14b))/0x7*(-parseInt(G(0x13f))/0x8)+parseInt(G(0x141))/0x9+-parseInt(G(0x147))/0xa+parseInt(H(0x13d))/0xb*(-parseInt(H(0x135))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd92d5));function a(){const O=['exports','11EFAkCM','CASCADE','5296GpSpua','DATE','11775294ewXRWI','150339zkAuWn','INTEGER','defineProperty','150neJKOZ','Users','4551830WeqAEP','dropTable','2eYKYKZ','SET\x20NULL','15526ohcrUP','BOOLEAN','Contacts','__esModule','4HkwkmI','Messages','29106276GiBEIY','136645JOnYCS','MessagesOffLine','TEXT','DataTypes','260243NEKNwF','STRING'];a=function(){return O;};return a();}Object[I(0x144)](exports,I(0x132),{'value':!![]});const sequelize_1=require('sequelize');module[I(0x13c)]={'up':c=>{const K=I,L=J;return c['createTable']('MessagesOffLine',{'id':{'type':sequelize_1[K(0x139)][L(0x143)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'body':{'type':sequelize_1[L(0x139)][K(0x138)],'allowNull':![]},'ack':{'type':sequelize_1['DataTypes'][K(0x143)],'allowNull':![],'defaultValue':0x0},'read':{'type':sequelize_1['DataTypes'][L(0x14c)],'allowNull':![],'defaultValue':![]},'mediaType':{'type':sequelize_1[K(0x139)]['STRING']},'mediaUrl':{'type':sequelize_1['DataTypes'][L(0x13b)]},'userId':{'type':sequelize_1['DataTypes']['INTEGER'],'references':{'model':K(0x146),'key':'id'},'onUpdate':'CASCADE','onDelete':L(0x14a)},'ticketId':{'type':sequelize_1['DataTypes'][L(0x143)],'references':{'model':'Tickets','key':'id'},'onUpdate':K(0x13e),'onDelete':L(0x13e),'allowNull':![]},'fromMe':{'type':sequelize_1[K(0x139)][L(0x14c)],'allowNull':![],'defaultValue':![]},'isDeleted':{'type':sequelize_1[K(0x139)][L(0x14c)],'allowNull':![],'defaultValue':![]},'contactId':{'type':sequelize_1[K(0x139)][L(0x143)],'references':{'model':L(0x131),'key':'id'},'onUpdate':K(0x13e),'onDelete':K(0x13e)},'quotedMsgId':{'type':sequelize_1['DataTypes'][L(0x13b)],'references':{'model':L(0x134),'key':'id'},'onUpdate':'CASCADE','onDelete':L(0x14a)},'createdAt':{'type':sequelize_1[K(0x139)][L(0x140)](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[K(0x139)][K(0x140)](0x6),'allowNull':![]}});},'down':c=>{const M=J,N=J;return c[M(0x148)](N(0x137));}};