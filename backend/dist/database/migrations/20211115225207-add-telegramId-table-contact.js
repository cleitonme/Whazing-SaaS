'use strict';const q=b,r=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=parseInt(o(0x8b))/0x1+parseInt(o(0x7c))/0x2*(-parseInt(p(0x80))/0x3)+parseInt(p(0x83))/0x4*(-parseInt(p(0x81))/0x5)+parseInt(o(0x8d))/0x6*(-parseInt(o(0x8f))/0x7)+parseInt(p(0x93))/0x8*(-parseInt(p(0x94))/0x9)+parseInt(p(0x8a))/0xa+-parseInt(p(0x82))/0xb*(-parseInt(o(0x7d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdf80e));Object['defineProperty'](exports,q(0x87),{'value':!![]});const sequelize_1=require(r(0x89));function b(c,d){const e=a();return b=function(f,g){f=f-0x7b;let h=e[f];return h;},b(c,d);}function a(){const w=['357ztfHzo','25LTUnWf','1017214NrqfeK','347416EfdOoy','number','unique_constraint_contact_number_tenant','exports','__esModule','Contacts','sequelize','1605060rinXRK','1394148nSyufl','unique','8376636IfYRin','changeColumn','7iXOZOy','telegramId','STRING','tenantId','505048FyJKZK','261Rkoejr','BIGINT','14486RYTohx','504nMOlZt','DataTypes','removeConstraint'];a=function(){return w;};return a();}module[q(0x86)]={'up':c=>{const s=q,t=q;return Promise['all']([c['addColumn']('Contacts',s(0x90),{'type':sequelize_1[s(0x7e)][t(0x7b)],'defaultValue':null,'allowNull':!![]}),c[s(0x7f)](s(0x88),t(0x85)),c['changeColumn'](t(0x88),s(0x84),{'type':sequelize_1[t(0x7e)][s(0x91)],'allowNull':!![],'unique':![],'defaultValue':null})]);},'down':c=>{const u=r,v=q;return Promise['all']([c['removeColumn'](u(0x88),v(0x90)),c[u(0x8e)]('Contacts','number',{'type':sequelize_1[u(0x7e)][v(0x91)],'allowNull':![],'unique':!![]}),c['addConstraint'](v(0x88),['number',u(0x92)],{'type':v(0x8c),'name':'unique_constraint_contact_number_tenant'})]);}};