'use strict';const M=b,N=b;function a(){const S=['15EBcJeU','TEXT','ApiMessages','UUID','1285515IGDQzy','createTable','6JJpAXA','Whatsapps','all','sequelize','literal','6594648EKpbEU','4569544IlhaPR','exports','Sequelize','DATE','DataTypes','JSONB','__esModule','CASCADE','2YIaTHc','INTEGER','dropTable','SET\x20NULL','1200699OsAfXz','1431087PfyJPu','gen_random_uuid()','1520604OdJHhj','5471719bJkrTY','Tenants','70cGIQPM','STRING'];a=function(){return S;};return a();}(function(c,d){const K=b,L=b,e=c();while(!![]){try{const f=-parseInt(K(0x1ff))/0x1+-parseInt(K(0x1fb))/0x2*(parseInt(L(0x200))/0x3)+parseInt(L(0x1e2))/0x4*(-parseInt(L(0x1e7))/0x5)+-parseInt(L(0x1ed))/0x6*(-parseInt(L(0x1f3))/0x7)+-parseInt(L(0x1f2))/0x8+parseInt(L(0x1eb))/0x9+parseInt(K(0x1e5))/0xa*(parseInt(K(0x1e3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b0ee));Object['defineProperty'](exports,M(0x1f9),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x1e2;let h=e[f];return h;},b(c,d);}const sequelize_1=require(M(0x1f0));module[M(0x1f4)]={'up':c=>{const O=M,P=M;return Promise[O(0x1ef)]([c[O(0x1ec)](O(0x1e9),{'id':{'allowNull':![],'primaryKey':!![],'type':sequelize_1[P(0x1f7)][O(0x1ea)],'defaultValue':sequelize_1[P(0x1f5)][P(0x1f1)](O(0x201))},'messageId':{'type':sequelize_1['DataTypes'][P(0x1e6)],'allowNull':!![],'defaultValue':null},'externalKey':{'type':sequelize_1[P(0x1f7)][O(0x1e6)],'allowNull':!![],'defaultValue':null},'body':{'type':sequelize_1['DataTypes'][O(0x1e8)],'allowNull':![],'validate':{'notEmpty':!![]}},'ack':{'type':sequelize_1[P(0x1f7)][O(0x1fc)],'allowNull':![],'defaultValue':0x0},'number':{'type':sequelize_1[P(0x1f7)][P(0x1e6)],'allowNull':![],'validate':{'notEmpty':!![],'len':[0xc,0xe]}},'mediaName':{'type':sequelize_1[P(0x1f7)][P(0x1e8)],'allowNull':!![],'defaultValue':null},'timestamp':{'type':sequelize_1[O(0x1f7)][O(0x1fc)],'allowNull':!![],'defaultValue':null},'sessionId':{'type':sequelize_1[P(0x1f7)][O(0x1fc)],'references':{'model':P(0x1ee),'key':'id'},'onUpdate':'CASCADE','onDelete':O(0x1fe)},'tenantId':{'type':sequelize_1[P(0x1f7)][O(0x1fc)],'references':{'model':O(0x1e4),'key':'id'},'onUpdate':O(0x1fa),'onDelete':O(0x1fa),'allowNull':![],'defaultValue':0x1},'messageWA':{'type':sequelize_1[O(0x1f7)][O(0x1f8)],'allowNull':!![],'defaultValue':null},'apiConfig':{'type':sequelize_1[O(0x1f7)][O(0x1f8)],'allowNull':!![],'defaultValue':null},'createdAt':{'type':sequelize_1[P(0x1f7)][O(0x1f6)],'allowNull':![]},'updatedAt':{'type':sequelize_1['DataTypes'][P(0x1f6)],'allowNull':![]}})]);},'down':c=>{const Q=N,R=M;return Promise['all']([c[Q(0x1fd)](Q(0x1e9))]);}};