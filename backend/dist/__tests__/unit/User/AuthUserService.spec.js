'use strict';const s=b,u=b;(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=-parseInt(q(0x19e))/0x1*(parseInt(r(0x19b))/0x2)+-parseInt(r(0x1b0))/0x3+parseInt(r(0x1bc))/0x4*(-parseInt(r(0x1b9))/0x5)+parseInt(q(0x19c))/0x6*(-parseInt(r(0x1ac))/0x7)+parseInt(r(0x1a7))/0x8*(-parseInt(q(0x1a0))/0x9)+parseInt(q(0x1b6))/0xa*(parseInt(r(0x1ad))/0xb)+parseInt(r(0x1b2))/0xc*(parseInt(q(0x1af))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd8ff2));var __importDefault=this&&this[s(0x1a2)]||function(c){const t=s;return c&&c[t(0x19d)]?c:{'default':c};};Object['defineProperty'](exports,s(0x19d),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x199;let h=e[f];return h;},b(c,d);}const faker_1=__importDefault(require(u(0x1a8))),AppError_1=__importDefault(require(u(0x1a9))),AuthUserSerice_1=__importDefault(require(u(0x1aa))),CreateUserService_1=__importDefault(require('../../../services/UserServices/CreateUserService')),database_1=require(s(0x19f));describe('Auth',()=>{const A=s,D=u;beforeEach(async()=>{const v=b;await(0x0,database_1[v(0x1ba)])();}),afterEach(async()=>{const w=b;await(0x0,database_1[w(0x1ba)])();}),afterAll(async()=>{const x=b;await(0x0,database_1[x(0x1bb)])();}),it('should\x20be\x20able\x20to\x20login\x20with\x20an\x20existing\x20user',async()=>{const y=b,z=b;await(0x0,CreateUserService_1[y(0x199)])({'name':faker_1[y(0x199)]['name']['findName'](),'email':z(0x1b4),'password':z(0x1a5),'tenantId':0x1});const c=await(0x0,AuthUserSerice_1[z(0x199)])({'email':y(0x1b4),'password':'hardpassword'});expect(c)[y(0x1b7)](z(0x1b8));}),it(A(0x19a),async()=>{const B=A,C=A;try{await(0x0,AuthUserSerice_1['default'])({'email':faker_1[B(0x199)][C(0x1a1)][C(0x1a6)](),'password':faker_1['default'][B(0x1a1)][C(0x1bd)]()});}catch(c){expect(c)[C(0x1b3)](AppError_1[C(0x199)]),expect(c[C(0x1b5)])[C(0x1ab)](0x191),expect(c[C(0x1ae)])[C(0x1ab)](C(0x1a3));}}),it(D(0x1a4),async()=>{const E=A,F=D;await(0x0,CreateUserService_1[E(0x199)])({'name':faker_1[F(0x199)][F(0x1b1)][F(0x1be)](),'email':F(0x1b4),'password':E(0x1a5),'tenantId':0x1});try{await(0x0,AuthUserSerice_1[F(0x199)])({'email':'mail@test.com','password':faker_1['default'][F(0x1a1)]['password']()});}catch(c){expect(c)['toBeInstanceOf'](AppError_1[F(0x199)]),expect(c[F(0x1b5)])[E(0x1ab)](0x191),expect(c['message'])[F(0x1ab)]('ERR_INVALID_CREDENTIALS');}});});function a(){const G=['toBe','119tPwhEm','2354OJEqTZ','message','1981499pOxhdr','3507954AywTRZ','name','396AwLuXd','toBeInstanceOf','mail@test.com','statusCode','14010oAjKnD','toHaveProperty','token','5wAVwJd','truncate','disconnect','3289980JQYHnR','password','findName','default','should\x20not\x20be\x20able\x20to\x20login\x20with\x20not\x20registered\x20email','3104806BhcxDL','316194lGYiXR','__esModule','1YzWBYr','../../utils/database','9qWVFAS','internet','__importDefault','ERR_INVALID_CREDENTIALS','should\x20not\x20be\x20able\x20to\x20login\x20with\x20incorret\x20password','hardpassword','email','6848oiZpLN','faker','../../../errors/AppError','../../../services/UserServices/AuthUserSerice'];a=function(){return G;};return a();}