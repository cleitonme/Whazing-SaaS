'use strict';const a2=b,a7=b;(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=parseInt(a0(0x135))/0x1*(-parseInt(a0(0x14b))/0x2)+parseInt(a0(0x133))/0x3+-parseInt(a1(0x111))/0x4*(-parseInt(a1(0x143))/0x5)+-parseInt(a0(0x142))/0x6+-parseInt(a0(0x11f))/0x7+parseInt(a1(0x124))/0x8*(parseInt(a0(0x129))/0x9)+-parseInt(a1(0x131))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5dc34));function a(){const ad=['15WkNPDC','scheduled','object','null','userId','processing','dataValues','HasMany','7850KAPqld','sequelize-typescript','status','BelongsTo','tenantId','./User','ENUM','campaignContacts','PROXY_PORT','sessionId','__esModule','TURYJ','canceled','env','CreatedAt','Table','598132iXyrlz','__decorate','design:paramtypes','eYEuZ','AfterFind','metadata','default','./Tenant','message2','__importDefault','./Whatsapp','function','defineProperty','prototype','1166102JnRIyt','UpdatedAt','length','Column','pendentesEnvio','400yhUaZc','user','getOwnPropertyDescriptor','includes','isArray','88227qWYkZZ','design:type','decorate','mediaUrl','./CampaignContacts','createdAt','pending','session','2683340RpLyEC','/public/','1995459fngQda','contactsCount','153MqoZRM','name','recebidas','getDataValue','delay','updatedInstances','design:returntype','message1','ForeignKey','STRING','finished','pendentesEntrega','PrimaryKey','1106430hIRGQy'];a=function(){return ad;};return a();}var __decorate=this&&this[a2(0x112)]||function(e,f,g,h){const a3=a2,a4=a2;var j=arguments['length'],k=j<0x3?f:h===null?h=Object[a3(0x126)](f,g):h,l;if(typeof Reflect===a3(0x145)&&typeof Reflect[a3(0x12b)]===a4(0x11c))k=Reflect[a4(0x12b)](e,f,g,h);else{for(var m=e[a3(0x121)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this['__metadata']||function(c,d){const a5=a2,a6=a2;if(typeof Reflect==='object'&&typeof Reflect['metadata']===a5(0x11c))return Reflect[a5(0x116)](c,d);},__importDefault=this&&this[a2(0x11a)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[a7(0x11d)](exports,a2(0x155),{'value':!![]});const sequelize_typescript_1=require(a2(0x14c)),CampaignContacts_1=__importDefault(require(a2(0x12d))),Tenant_1=__importDefault(require(a2(0x118))),User_1=__importDefault(require(a7(0x150))),Whatsapp_1=__importDefault(require(a7(0x11b)));let Campaign=class Campaign extends sequelize_typescript_1['Model']{get[a2(0x12c)](){const a8=a2,a9=a2,c=this[a8(0x138)](a9(0x12c));if(c&&c!==a9(0x146)){if(a9(0x10c)!==a8(0x114)){const {BACKEND_URL:d}=process['env'];return d+':'+process[a9(0x10e)][a8(0x153)]+a9(0x132)+c;}else{var f=arguments[a8(0x121)],g=f<0x3?z:A===null?B=C[a8(0x126)](D,E):F,h;if(typeof G===a8(0x145)&&typeof H[a8(0x12b)]===a8(0x11c))g=I[a8(0x12b)](J,K,L,M);else{for(var i=N[a8(0x121)]-0x1;i>=0x0;i--)if(h=O[i])g=(f<0x3?h(g):f>0x3?h(P,Q,g):h(R,S))||g;}return f>0x3&&g&&T['defineProperty'](U,V,g),g;}}return null;}static async[a2(0x13a)](c){const aa=a2;if(!Array[aa(0x128)](c))return c;const d=await Promise['all'](c['map'](async e=>{const ab=aa,ac=aa;if(![ab(0x12f),ab(0x13f),ac(0x10d)][ab(0x127)](e[ac(0x14d)])){const f=+e[ab(0x149)][ac(0x140)],g=+e[ab(0x149)][ac(0x123)],h=+e[ac(0x149)][ab(0x137)],i=+e[ab(0x149)]['lidas'],j=+e[ab(0x149)][ab(0x134)],k=f+g+h+i;if(e[ac(0x14d)]==='scheduled'&&j===g)return e;return j!==k&&(e[ab(0x14d)]=ac(0x148),await e['update']({'status':ab(0x148)})),j===k&&(e[ab(0x14d)]=ac(0x13f),await e['update']({'status':ac(0x13f)})),e;}}));return d;}};function b(c,d){const e=a();return b=function(f,g){f=f-0x10c;let h=e[f];return h;},b(c,d);}__decorate([sequelize_typescript_1[a7(0x141)],sequelize_typescript_1['AutoIncrement'],sequelize_typescript_1[a2(0x122)],__metadata(a7(0x12a),Number)],Campaign[a7(0x11e)],'id',void 0x0),__decorate([sequelize_typescript_1[a2(0x122)],__metadata(a2(0x12a),String)],Campaign[a2(0x11e)],a7(0x136),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a2(0x12a),Date)],Campaign['prototype'],'start',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(a2(0x12f)),(0x0,sequelize_typescript_1[a7(0x122)])(sequelize_typescript_1['DataType'][a7(0x151)]('pending',a2(0x144),a2(0x148),'canceled',a2(0x13f))),__metadata(a7(0x12a),String)],Campaign[a2(0x11e)],'status',void 0x0),__decorate([sequelize_typescript_1[a7(0x122)],__metadata(a7(0x12a),String)],Campaign[a2(0x11e)],a2(0x13c),void 0x0),__decorate([sequelize_typescript_1[a2(0x122)],__metadata(a2(0x12a),String)],Campaign[a2(0x11e)],a7(0x119),void 0x0),__decorate([sequelize_typescript_1[a7(0x122)],__metadata('design:type',String)],Campaign[a2(0x11e)],'message3',void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1['DataType'][a7(0x13e)]),__metadata(a2(0x12a),String),__metadata(a7(0x113),[])],Campaign['prototype'],a2(0x12c),null),__decorate([sequelize_typescript_1['Column'],__metadata(a7(0x12a),String)],Campaign[a2(0x11e)],'mediaType',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x13d)])(()=>User_1[a7(0x117)]),sequelize_typescript_1['Column'],__metadata(a2(0x12a),Number)],Campaign['prototype'],a2(0x147),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x14e)])(()=>User_1[a2(0x117)]),__metadata(a2(0x12a),User_1[a2(0x117)])],Campaign['prototype'],a7(0x125),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Whatsapp_1[a7(0x117)]),sequelize_typescript_1[a7(0x122)],__metadata(a7(0x12a),Number)],Campaign[a7(0x11e)],a7(0x154),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x14e)])(()=>Whatsapp_1[a7(0x117)]),__metadata(a7(0x12a),Whatsapp_1[a2(0x117)])],Campaign[a2(0x11e)],a2(0x130),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x13d)])(()=>Tenant_1['default']),sequelize_typescript_1['Column'],__metadata(a2(0x12a),Number)],Campaign[a2(0x11e)],a7(0x14f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x14e)])(()=>Tenant_1[a2(0x117)]),__metadata(a2(0x12a),Tenant_1[a7(0x117)])],Campaign[a2(0x11e)],'tenant',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x14a)])(()=>CampaignContacts_1[a2(0x117)]),__metadata('design:type',Array)],Campaign['prototype'],a7(0x152),void 0x0),__decorate([sequelize_typescript_1[a7(0x10f)],__metadata('design:type',Date)],Campaign[a7(0x11e)],a7(0x12e),void 0x0),__decorate([sequelize_typescript_1[a7(0x120)],__metadata(a7(0x12a),Date)],Campaign[a2(0x11e)],'updatedAt',void 0x0),__decorate([sequelize_typescript_1[a2(0x122)],__metadata(a2(0x12a),Number)],Campaign[a7(0x11e)],a7(0x139),void 0x0),__decorate([sequelize_typescript_1[a2(0x115)],__metadata('design:type',Function),__metadata(a2(0x113),[Object]),__metadata(a2(0x13b),Promise)],Campaign,a7(0x13a),null),Campaign=__decorate([sequelize_typescript_1[a7(0x110)]],Campaign),exports[a2(0x117)]=Campaign;