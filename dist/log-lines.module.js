function i(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,n(i,t)}function n(i,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},n(i,t)}function t(i,n,t){if(void 0===n&&(n=0),void 0===t&&(t=10),"number"==typeof i)return isNaN(i)?n:i;var o;try{o=parseInt(i,t),isNaN(o)&&(o=n)}catch(i){o=n}return o}var o=function(i){this.lineSplit=void 0,this.timestamp=void 0,this.lineSplit=i,this.timestamp=new Date(this.lineSplit[1])},e=/*#__PURE__*/function(n){function t(i){var t;return(t=n.call(this,i)||this).message=void 0,t.message=t.lineSplit[2],t}return i(t,n),t}(o),r=/*#__PURE__*/function(n){function t(i){var t;return(t=n.call(this,i)||this).playerId=void 0,t.playerId=i[2],t}return i(t,n),t}(o),d=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).phaseCode=void 0,o.phaseCode=t(i[2]),o}return i(o,n),o}(o),a=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.classId=void 0,o.class=void 0,o.gearScore=void 0,o.currentHp=void 0,o.maxHp=void 0,o.id=i[2],o.name=i[3]||"Unknown Entity",o.classId=t(i[4]),o.class=i[5]||"UnknownClass",o.gearScore=i[7],o.currentHp=t(i[8]),o.maxHp=t(i[9]),o}return i(o,n),o}(o),l=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.currentHp=void 0,o.maxHp=void 0,o.id=i[2],o.name=i[4]||"Unknown Entity",o.currentHp=t(i[5]),o.maxHp=t(i[6]),o}return i(o,n),o}(o),s=/*#__PURE__*/function(n){function t(i){var t;return(t=n.call(this,i)||this).id=void 0,t.name=void 0,t.killerId=void 0,t.killerName=void 0,t.id=i[2],t.name=i[3]||"Unknown Entity",t.killerId=i[4],t.killerName=i[5]||"Unknown Entity",t}return i(t,n),t}(o),u=/*#__PURE__*/function(n){function t(i){var t;return(t=n.call(this,i)||this).id=void 0,t.name=void 0,t.skillId=void 0,t.skillName=void 0,t.id=i[2],t.name=i[3]||"Unknown Entity",t.skillId=i[4],t.skillName=i[5]||"Unknown Skill",t}return i(t,n),t}(o),v=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.skillId=void 0,o.skillName=void 0,o.skillStage=void 0,o.id=i[2],o.name=i[3]||"Unknown Entity",o.skillId=i[4],o.skillName=i[5]||"Unknown Skill",o.skillStage=t(i[6]),o}return i(o,n),o}(o),c=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.skillId=void 0,o.skillName=void 0,o.skillEffectId=void 0,o.skillEffect=void 0,o.targetId=void 0,o.targetName=void 0,o.damage=void 0,o.damageModifier=void 0,o.isCrit=void 0,o.isBackAttack=void 0,o.isFrontAttack=void 0,o.currentHp=void 0,o.maxHp=void 0,o.id=i[2],o.name=i[3]||"Unknown Entity",o.skillId=t(i[4]),o.skillName=i[5]||"Unknown Skill",o.skillEffectId=t(i[6]),o.skillEffect=i[7],o.targetId=i[8],o.targetName=i[9]||"Unknown Entity",o.damage=t(i[10]),o.damageModifier=t(i[11],0,16),o.currentHp=t(i[12]),o.maxHp=t(i[13]),o}return i(o,n),o}(o),m=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.healAmount=void 0,o.id=i[2],o.name=i[3]||"Unknown Entity",o.healAmount=t(i[4]),o}return i(o,n),o}(o),f=/*#__PURE__*/function(n){function o(i){var o;return(o=n.call(this,i)||this).id=void 0,o.name=void 0,o.buffId=void 0,o.buffName=void 0,o.isNew=void 0,o.sourceId=void 0,o.sourceName=void 0,o.shieldAmount=void 0,o.id=i[2],o.name=i[3]||"Unknown Entity",o.buffId=i[4],o.buffName=i[5],o.isNew="1"==i[6],o.sourceId=i[7],o.sourceName=i[8]||"Unknown Entity",o.shieldAmount=t(i[9]),o}return i(o,n),o}(o),k=/*#__PURE__*/function(n){function t(i){var t;return(t=n.call(this,i)||this).id=void 0,t.name=void 0,t.id=i[2],t.name=i[3]||"Unknown Entity",t}return i(t,n),t}(o);export{f as LogBuff,k as LogCounterattack,c as LogDamage,s as LogDeath,m as LogHeal,r as LogInitEnv,e as LogMessage,l as LogNewNpc,a as LogNewPc,d as LogPhaseTransition,v as LogSkillStage,u as LogSkillStart};
//# sourceMappingURL=log-lines.module.js.map
