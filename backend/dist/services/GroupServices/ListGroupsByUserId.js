'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x73))/0x1+parseInt(l(0x75))/0x2+parseInt(l(0x7c))/0x3+-parseInt(k(0x6f))/0x4+-parseInt(k(0x77))/0x5+-parseInt(k(0x7b))/0x6+parseInt(k(0x7d))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9326));var __importDefault=this&&this[m(0x71)]||function(c){const n=m;return c&&c[n(0x7e)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x6f;let h=e[f];return h;},b(c,d);}Object[m(0x70)](exports,m(0x7e),{'value':!![]});function a(){const r=['15383186JQHdAk','__esModule','5068804fKayHM','defineProperty','__importDefault','\x0a\x20\x20\x20\x20select\x20distinct\x0a\x20\x20\x20\x20g.id\x0a\x20\x20\x20\x20,\x20g.\x22group\x22\x20as\x20name\x0a\x20\x20\x20\x20,\x20(\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(mi.*)\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22InternalMessage\x22\x20mi\x0a\x20\x20\x20\x20\x20\x20\x20\x20where\x20mi.\x22groupId\x22\x20\x20=\x20g.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20mi.\x22senderId\x22\x20!=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20mi.id\x20not\x20in\x20(\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20rmg.\x22internalMessageId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22ReadMessageGroups\x22\x20rmg,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22InternalMessage\x22\x20im2\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20rmg.\x22userGroupId\x22\x20=\x20ug.id\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20rmg.\x22internalMessageId\x22\x20=\x20im2.id\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20),\x0a\x20\x20\x20\x20mm_last_message.\x22text\x22,\x0a\x20\x20\x20\x20mm_last_message.\x22timestamp\x22\x0a\x20\x20\x20\x20from\x20\x22Groups\x22\x20g,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22UsersGroups\x22\x20ug\x0a\x20\x20\x20\x20left\x20join\x20LATERAL\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mi1.\x22text\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,\x20mi1.\x22timestamp\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,\x20mi1.\x22groupId\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,\x20mi1.\x22senderId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22InternalMessage\x22\x20mi1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20mi1.\x22createdAt\x22\x20=\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20max(\x22createdAt\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22InternalMessage\x22\x20mi2\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20mi2.\x22groupId\x22\x20=\x20g.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20AS\x20mm_last_message\x20ON\x20true\x0a\x20\x20\x20\x20where\x20ug.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20and\x20ug.\x22groupId\x22\x20=\x20g.id\x0a\x20\x20\x20\x20and\x20g.\x22isActive\x22\x20=\x20true\x0a\x20\x20\x20\x20','1186878NSmLnq','sequelize','253374huxYZv','query','4032255rQqwjB','../../models/Group','default','SELECT','6342936ATsUIY','938025AScgYs'];a=function(){return r;};return a();}const sequelize_1=require(m(0x74)),Group_1=__importDefault(require(o(0x78))),ListGroupsByUserId=async c=>{const p=m,q=o,d=p(0x72),e=await Group_1['default']['sequelize']?.[q(0x76)](d,{'replacements':{'userId':c},'type':sequelize_1['QueryTypes'][p(0x7a)],'nest':!![]});return e;};exports[m(0x79)]=ListGroupsByUserId;