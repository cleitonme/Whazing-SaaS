'use strict';var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=parseInt(a0(0x16d))/0x1+parseInt(a0(0x15d))/0x2+parseInt(a1(0x14d))/0x3+parseInt(a1(0x15e))/0x4*(-parseInt(a1(0x165))/0x5)+parseInt(a0(0x153))/0x6+parseInt(a1(0x167))/0x7+-parseInt(a0(0x152))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6d86b));function a(){var a8=['1416975jTPKVL','CreatedAt','PrimaryKey','getOwnPropertyDescriptor','UpdatedAt','18608216ApabFC','1370460QTWljY','design:type','object','defineProperty','Column','prototype','function','ForeignKey','__decorate','./Tenant','1026244lbWxCR','436588JsLczr','createdAt','AutoIncrement','__esModule','metadata','__metadata','default','5kqWQDB','length','6045725zAOcwa','isActive','tenant','__importDefault','BelongsTo','color','806261umptjh','userId','decorate'];a=function(){return a8;};return a();}var __decorate=this&&this[a2(0x15b)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x166)],k=j<0x3?f:h===null?h=Object[a3(0x150)](f,g):h,l;if(typeof Reflect===a4(0x155)&&typeof Reflect['decorate']===a4(0x159))k=Reflect[a4(0x14c)](e,f,g,h);else{for(var m=e[a4(0x166)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this[a2(0x163)]||function(c,d){var a6=a2;if(typeof Reflect==='object'&&typeof Reflect[a6(0x162)]==='function')return Reflect['metadata'](c,d);},__importDefault=this&&this[a2(0x16a)]||function(c){var a7=a5;return c&&c[a7(0x161)]?c:{'default':c};};function b(c,d){var e=a();return b=function(f,g){f=f-0x14c;var h=e[f];return h;},b(c,d);}Object[a2(0x156)](exports,a2(0x161),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),Tenant_1=__importDefault(require(a5(0x15c))),User_1=__importDefault(require('./User'));let Tags=class Tags extends sequelize_typescript_1['Model']{};__decorate([sequelize_typescript_1[a5(0x14f)],sequelize_typescript_1[a5(0x160)],sequelize_typescript_1[a2(0x157)],__metadata(a2(0x154),Number)],Tags[a5(0x158)],'id',void 0x0),__decorate([sequelize_typescript_1[a2(0x157)],__metadata('design:type',String)],Tags[a2(0x158)],'tag',void 0x0),__decorate([sequelize_typescript_1[a5(0x157)],__metadata(a2(0x154),String)],Tags[a5(0x158)],a2(0x16c),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(!![]),sequelize_typescript_1[a5(0x157)],__metadata(a5(0x154),Boolean)],Tags[a2(0x158)],a2(0x168),void 0x0),__decorate([sequelize_typescript_1[a2(0x14e)],__metadata(a2(0x154),Date)],Tags[a2(0x158)],a5(0x15f),void 0x0),__decorate([sequelize_typescript_1[a2(0x151)],__metadata(a2(0x154),Date)],Tags[a5(0x158)],'updatedAt',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x15a)])(()=>User_1['default']),sequelize_typescript_1[a2(0x157)],__metadata(a2(0x154),Number)],Tags[a5(0x158)],a5(0x16e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x16b)])(()=>User_1['default']),__metadata('design:type',User_1[a5(0x164)])],Tags[a2(0x158)],'user',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x15a)])(()=>Tenant_1[a2(0x164)]),sequelize_typescript_1[a2(0x157)],__metadata('design:type',Number)],Tags[a5(0x158)],'tenantId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x16b)])(()=>Tenant_1['default']),__metadata(a5(0x154),Tenant_1[a2(0x164)])],Tags['prototype'],a2(0x169),void 0x0),Tags=__decorate([sequelize_typescript_1['Table']],Tags),exports[a2(0x164)]=Tags;