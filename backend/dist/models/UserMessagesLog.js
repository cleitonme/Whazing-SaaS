'use strict';var a2=b,a7=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=parseInt(a0(0x85))/0x1*(-parseInt(a0(0x74))/0x2)+-parseInt(a1(0x82))/0x3*(parseInt(a0(0x66))/0x4)+-parseInt(a0(0x78))/0x5+-parseInt(a0(0x80))/0x6*(-parseInt(a1(0x89))/0x7)+parseInt(a1(0x70))/0x8+-parseInt(a0(0x91))/0x9+-parseInt(a0(0x73))/0xa*(-parseInt(a1(0x7e))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaab5d));function b(c,d){var e=a();return b=function(f,g){f=f-0x66;var h=e[f];return h;},b(c,d);}var __decorate=this&&this[a2(0x6a)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x79)],k=j<0x3?f:h===null?h=Object[a3(0x72)](f,g):h,l;if(typeof Reflect===a4(0x76)&&typeof Reflect[a3(0x77)]===a3(0x7a))k=Reflect[a4(0x77)](e,f,g,h);else{for(var m=e[a3(0x79)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this['__metadata']||function(c,d){var a5=a2,a6=a2;if(typeof Reflect===a5(0x76)&&typeof Reflect[a6(0x84)]===a6(0x7a))return Reflect[a5(0x84)](c,d);},__importDefault=this&&this[a7(0x6d)]||function(c){var a8=a7;return c&&c[a8(0x68)]?c:{'default':c};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_typescript_1=require(a2(0x7f)),Message_1=__importDefault(require('./Message')),Ticket_1=__importDefault(require('./Ticket')),User_1=__importDefault(require(a2(0x86)));let UserMessagesLog=class UserMessagesLog extends sequelize_typescript_1[a7(0x8c)]{};function a(){var a9=['./User','createdAt','ForeignKey','3325147ddRnvU','PrimaryKey','Table','Model','messageId','AllowNull','user','Column','2049723SizTFW','49732KXPSdr','DataType','__esModule','AutoIncrement','__decorate','ticketId','DATE','__importDefault','UpdatedAt','userId','548960qzJsvK','design:type','getOwnPropertyDescriptor','10ZTrJcW','4zKdEns','message','object','decorate','6671975vQOzjJ','length','function','default','BelongsTo','Default','35221736gEsVUD','sequelize-typescript','12vsyPOH','updatedAt','309nUVboI','prototype','metadata','339334CfhGTl'];a=function(){return a9;};return a();}__decorate([sequelize_typescript_1[a7(0x8a)],sequelize_typescript_1[a2(0x69)],sequelize_typescript_1[a2(0x90)],__metadata(a2(0x71),Number)],UserMessagesLog['prototype'],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x88)])(()=>User_1[a7(0x7b)]),sequelize_typescript_1[a2(0x90)],__metadata('design:type',Number)],UserMessagesLog[a7(0x83)],a2(0x6f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x7c)])(()=>User_1[a2(0x7b)]),__metadata(a7(0x71),User_1['default'])],UserMessagesLog[a2(0x83)],a2(0x8f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x88)])(()=>Message_1['default']),(0x0,sequelize_typescript_1[a2(0x7d)])(null),sequelize_typescript_1[a2(0x8e)],sequelize_typescript_1[a7(0x90)],__metadata(a2(0x71),String)],UserMessagesLog[a7(0x83)],a2(0x8d),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>Message_1[a2(0x7b)],'messageId'),__metadata(a2(0x71),Message_1[a2(0x7b)])],UserMessagesLog['prototype'],a2(0x75),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Ticket_1[a7(0x7b)]),(0x0,sequelize_typescript_1[a7(0x7d)])(null),sequelize_typescript_1['AllowNull'],sequelize_typescript_1[a2(0x90)],__metadata(a7(0x71),Number)],UserMessagesLog[a2(0x83)],a7(0x6b),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>Ticket_1[a2(0x7b)]),__metadata(a2(0x71),Ticket_1[a7(0x7b)])],UserMessagesLog[a2(0x83)],'ticket',void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],(0x0,sequelize_typescript_1[a7(0x90)])(sequelize_typescript_1[a2(0x67)]['DATE'](0x6)),__metadata(a7(0x71),Date)],UserMessagesLog['prototype'],a2(0x87),void 0x0),__decorate([sequelize_typescript_1[a2(0x6e)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x67)][a7(0x6c)](0x6)),__metadata(a2(0x71),Date)],UserMessagesLog[a7(0x83)],a2(0x81),void 0x0),UserMessagesLog=__decorate([(0x0,sequelize_typescript_1[a7(0x8b)])({'freezeTableName':!![]})],UserMessagesLog),exports[a7(0x7b)]=UserMessagesLog;