'use strict';const M=b,N=b;(function(c,d){const K=b,L=b,e=c();while(!![]){try{const f=parseInt(K(0xaa))/0x1+-parseInt(L(0x9e))/0x2+parseInt(K(0xa6))/0x3*(-parseInt(L(0xac))/0x4)+parseInt(L(0x94))/0x5*(-parseInt(K(0x96))/0x6)+-parseInt(K(0xab))/0x7+parseInt(L(0x95))/0x8*(parseInt(L(0xa1))/0x9)+parseInt(K(0xa3))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd7a41));function a(){const S=['DATE','8963091EknSee','ApiMessages','11935160lSBXNB','dropTable','all','6wdUYoA','INTEGER','createTable','gen_random_uuid()','1190706VsFVdr','691614sCyttO','2839004zEnggk','defineProperty','Sequelize','CASCADE','3963090YBxWbp','8GhxNeM','6VqoOJS','sequelize','STRING','DataTypes','TEXT','SET\x20NULL','UUID','Whatsapps','371868mDNXrs','JSONB'];a=function(){return S;};return a();}Object[M(0xad)](exports,'__esModule',{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x94;let h=e[f];return h;},b(c,d);}const sequelize_1=require(N(0x97));module['exports']={'up':c=>{const O=N,P=M;return Promise[O(0xa5)]([c[P(0xa8)]('ApiMessages',{'id':{'allowNull':![],'primaryKey':!![],'type':sequelize_1[O(0x99)][O(0x9c)],'defaultValue':sequelize_1[P(0xae)]['literal'](P(0xa9))},'messageId':{'type':sequelize_1[O(0x99)]['STRING'],'allowNull':!![],'defaultValue':null},'externalKey':{'type':sequelize_1['DataTypes'][P(0x98)],'allowNull':!![],'defaultValue':null},'body':{'type':sequelize_1[O(0x99)][P(0x9a)],'allowNull':![],'validate':{'notEmpty':!![]}},'ack':{'type':sequelize_1[O(0x99)][P(0xa7)],'allowNull':![],'defaultValue':0x0},'number':{'type':sequelize_1[P(0x99)]['STRING'],'allowNull':![],'validate':{'notEmpty':!![],'len':[0xc,0xe]}},'mediaName':{'type':sequelize_1[O(0x99)][O(0x9a)],'allowNull':!![],'defaultValue':null},'timestamp':{'type':sequelize_1[P(0x99)][P(0xa7)],'allowNull':!![],'defaultValue':null},'sessionId':{'type':sequelize_1[P(0x99)]['INTEGER'],'references':{'model':P(0x9d),'key':'id'},'onUpdate':P(0xaf),'onDelete':P(0x9b)},'tenantId':{'type':sequelize_1[P(0x99)][P(0xa7)],'references':{'model':'Tenants','key':'id'},'onUpdate':P(0xaf),'onDelete':P(0xaf),'allowNull':![],'defaultValue':0x1},'messageWA':{'type':sequelize_1[O(0x99)][O(0x9f)],'allowNull':!![],'defaultValue':null},'apiConfig':{'type':sequelize_1[P(0x99)][P(0x9f)],'allowNull':!![],'defaultValue':null},'createdAt':{'type':sequelize_1[O(0x99)][P(0xa0)],'allowNull':![]},'updatedAt':{'type':sequelize_1['DataTypes'][O(0xa0)],'allowNull':![]}})]);},'down':c=>{const Q=N,R=M;return Promise[Q(0xa5)]([c[Q(0xa4)](Q(0xa2))]);}};