'use strict';var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=parseInt(a0(0x1ba))/0x1*(parseInt(a1(0x1b6))/0x2)+parseInt(a1(0x1a3))/0x3+parseInt(a0(0x1bd))/0x4+-parseInt(a0(0x1b4))/0x5+parseInt(a0(0x1cc))/0x6*(parseInt(a0(0x1ce))/0x7)+parseInt(a0(0x1c8))/0x8*(parseInt(a1(0x1cb))/0x9)+parseInt(a0(0x1c4))/0xa*(-parseInt(a0(0x1b9))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x889ce));function b(c,d){var e=a();return b=function(f,g){f=f-0x1a0;var h=e[f];return h;},b(c,d);}var __decorate=this&&this[a2(0x1bf)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x1c3)],k=j<0x3?f:h===null?h=Object[a3(0x1ae)](f,g):h,l;if(typeof Reflect===a4(0x1c5)&&typeof Reflect[a4(0x1a5)]===a4(0x1a4))k=Reflect[a3(0x1a5)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this[a2(0x1bc)]||function(c,d){var a6=a5,a7=a5;if(typeof Reflect===a6(0x1c5)&&typeof Reflect['metadata']===a6(0x1a4))return Reflect[a7(0x1a9)](c,d);},__importDefault=this&&this[a2(0x1c9)]||function(c){var a8=a5;return c&&c[a8(0x1b8)]?c:{'default':c};};Object['defineProperty'](exports,a2(0x1b8),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),User_1=__importDefault(require(a2(0x1cd))),AutoReply_1=__importDefault(require(a2(0x1b3))),StepsReplyAction_1=__importDefault(require('./StepsReplyAction'));function a(){var a9=['design:type','updatedAt','prototype','PrimaryKey','getOwnPropertyDescriptor','idAutoReply','default','createdAt','Column','./AutoReply','3307300EhVcaD','DATE','45386yHfEHz','reply','__esModule','11WqNvrk','29VvIlMl','HasMany','__metadata','808964LjtDra','BelongsTo','__decorate','Default','CreatedAt','DataType','length','13284010TzVCbo','object','ForeignKey','UpdatedAt','4456ptysCZ','__importDefault','Model','12483ZNHwuB','12zAEuiq','./User','1292158VKpmQv','userId','user','Table','1642026VZZcsy','function','decorate','autoReply','BOOLEAN','AutoIncrement','metadata'];a=function(){return a9;};return a();}let StepsReply=class StepsReply extends sequelize_typescript_1[a5(0x1ca)]{};__decorate([sequelize_typescript_1[a5(0x1ad)],sequelize_typescript_1[a5(0x1a8)],sequelize_typescript_1[a5(0x1b2)],__metadata(a5(0x1aa),String)],StepsReply[a5(0x1ac)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x1c2)]['TEXT']),__metadata(a2(0x1aa),String)],StepsReply[a5(0x1ac)],a2(0x1b7),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1c0)])(![]),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1['DataType'][a5(0x1a7)]),__metadata(a5(0x1aa),Boolean)],StepsReply[a2(0x1ac)],'initialStep',void 0x0),__decorate([sequelize_typescript_1[a5(0x1b2)],(0x0,sequelize_typescript_1[a5(0x1c6)])(()=>AutoReply_1['default']),__metadata(a2(0x1aa),Number)],StepsReply[a5(0x1ac)],'idAutoReply',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1be)])(()=>AutoReply_1['default'],a2(0x1af)),__metadata(a2(0x1aa),AutoReply_1[a2(0x1b0)])],StepsReply[a2(0x1ac)],a2(0x1a6),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x1c6)])(()=>User_1[a5(0x1b0)]),sequelize_typescript_1[a2(0x1b2)],__metadata('design:type',Number)],StepsReply[a5(0x1ac)],a5(0x1a0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1be)])(()=>User_1['default']),__metadata(a5(0x1aa),User_1[a2(0x1b0)])],StepsReply['prototype'],a2(0x1a1),void 0x0),__decorate([sequelize_typescript_1[a5(0x1c1)],(0x0,sequelize_typescript_1[a2(0x1b2)])(sequelize_typescript_1[a5(0x1c2)][a2(0x1b5)](0x6)),__metadata('design:type',Date)],StepsReply[a5(0x1ac)],a2(0x1b1),void 0x0),__decorate([sequelize_typescript_1[a5(0x1c7)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a5(0x1c2)][a5(0x1b5)](0x6)),__metadata(a2(0x1aa),Date)],StepsReply[a5(0x1ac)],a2(0x1ab),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x1bb)])(()=>StepsReplyAction_1['default']),__metadata('design:type',StepsReplyAction_1[a2(0x1b0)])],StepsReply[a5(0x1ac)],'stepsReplyAction',void 0x0),StepsReply=__decorate([(0x0,sequelize_typescript_1[a2(0x1a2)])({'freezeTableName':!![]})],StepsReply),exports[a2(0x1b0)]=StepsReply;