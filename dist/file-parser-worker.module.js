import e from"dayjs";import{cloneDeep as t}from"lodash";import{EventEmitter as a}from"events";import{v4 as i}from"uuid";import n from"fs";import s from"path";import r from"dayjs/plugin/customParseFormat";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},o.apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,m(e,t)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function c(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t,a,i){if(void 0===t&&(t=0),void 0===a&&(a=10),void 0===i&&(i=!1),"number"==typeof e)return isNaN(e)?t:e;var n;try{n=i?parseFloat(e):parseInt(e,a),isNaN(n)&&(n=t)}catch(e){n=t}return n}var u,g,p=function(e){this.lineSplit=void 0,this.timestamp=void 0,this.lineSplit=e,this.timestamp=new Date(this.lineSplit[1])},f=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).message=void 0,a.message=a.lineSplit[2],a}return l(t,e),t}(p),k=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).phaseCode=void 0,a.phaseCode=h(t[2]),a}return l(t,e),t}(p),v=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.classId=void 0,a.class=void 0,a.gearScore=void 0,a.currentHp=void 0,a.maxHp=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.classId=h(t[4]),a.class=t[5]||"UnknownClass",a.gearScore=h(t[7],0,10,!0),a.currentHp=h(t[8]),a.maxHp=h(t[9]),a}return l(t,e),t}(p),T=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.npcId=void 0,a.name=void 0,a.currentHp=void 0,a.maxHp=void 0,a.id=t[2],a.npcId=h(t[3]),a.name=t[4]||"Unknown Entity",a.currentHp=h(t[5]),a.maxHp=h(t[6]),a}return l(t,e),t}(p),I=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.killerId=void 0,a.killerName=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.killerId=t[4],a.killerName=t[5]||"Unknown Entity",a}return l(t,e),t}(p),_=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.skillId=void 0,a.skillName=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.skillId=h(t[4]),a.skillName=t[5]||"Unknown Skill",a}return l(t,e),t}(p),A=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.skillId=void 0,a.skillName=void 0,a.skillStage=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.skillId=t[4],a.skillName=t[5]||"Unknown Skill",a.skillStage=h(t[6]),a}return l(t,e),t}(p),N=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.skillId=void 0,a.skillName=void 0,a.skillEffectId=void 0,a.skillEffect=void 0,a.targetId=void 0,a.targetName=void 0,a.damage=void 0,a.damageModifier=void 0,a.currentHp=void 0,a.maxHp=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.skillId=h(t[4]),a.skillName=t[5]||"Unknown Skill",a.skillEffectId=h(t[6]),a.skillEffect=t[7],a.targetId=t[8],a.targetName=t[9]||"Unknown Entity",a.damage=h(t[10]),a.damageModifier=h(t[11],0,16),a.currentHp=h(t[12]),a.maxHp=h(t[13]),a}return l(t,e),t}(p),H=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.healAmount=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.healAmount=h(t[4]),a}return l(t,e),t}(p),y=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.buffId=void 0,a.buffName=void 0,a.isNew=void 0,a.sourceId=void 0,a.sourceName=void 0,a.shieldAmount=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a.buffId=t[4],a.buffName=t[5],a.isNew="1"==t[6],a.sourceId=t[7],a.sourceName=t[8]||"Unknown Entity",a.shieldAmount=h(t[9]),a}return l(t,e),t}(p),b=/*#__PURE__*/function(e){function t(t){var a;return(a=e.call(this,t)||this).id=void 0,a.name=void 0,a.id=t[2],a.name=t[3]||"Unknown Entity",a}return l(t,e),t}(p),S={"Serenade of Salvation":{duration:3},"Holy Aura":{duration:16e3},"Holy Protection":{duration:7e3},Demonize:{duration:1500}};!function(e){e[e.HIT_OPTION_NONE=-1]="HIT_OPTION_NONE",e[e.HIT_OPTION_BACK_ATTACK=0]="HIT_OPTION_BACK_ATTACK",e[e.HIT_OPTION_FRONTAL_ATTACK=1]="HIT_OPTION_FRONTAL_ATTACK",e[e.HIT_OPTION_FLANK_ATTACK=2]="HIT_OPTION_FLANK_ATTACK",e[e.HIT_OPTION_MAX=3]="HIT_OPTION_MAX"}(u||(u={})),function(e){e[e.HIT_FLAG_NORMAL=0]="HIT_FLAG_NORMAL",e[e.HIT_FLAG_CRITICAL=1]="HIT_FLAG_CRITICAL",e[e.HIT_FLAG_MISS=2]="HIT_FLAG_MISS",e[e.HIT_FLAG_INVINCIBLE=3]="HIT_FLAG_INVINCIBLE",e[e.HIT_FLAG_DOT=4]="HIT_FLAG_DOT",e[e.HIT_FLAG_IMMUNE=5]="HIT_FLAG_IMMUNE",e[e.HIT_FLAG_IMMUNE_SILENCED=6]="HIT_FLAG_IMMUNE_SILENCED",e[e.HIT_FLAG_FONT_SILENCED=7]="HIT_FLAG_FONT_SILENCED",e[e.HIT_FLAG_DOT_CRITICAL=8]="HIT_FLAG_DOT_CRITICAL",e[e.HIT_FLAG_DODGE=9]="HIT_FLAG_DODGE",e[e.HIT_FLAG_REFLECT=10]="HIT_FLAG_REFLECT",e[e.HIT_FLAG_DAMAGE_SHARE=11]="HIT_FLAG_DAMAGE_SHARE",e[e.HIT_FLAG_DODGE_HIT=12]="HIT_FLAG_DODGE_HIT",e[e.HIT_FLAG_MAX=13]="HIT_FLAG_MAX"}(g||(g={}));var D=/*#__PURE__*/function(e){function a(t){var a;return void 0===t&&(t=!1),(a=e.call(this)||this).resetTimer=void 0,a.debugLines=void 0,a.isLive=void 0,a.dontResetOnZoneChange=void 0,a.resetAfterPhaseTransition=void 0,a.splitOnPhaseTransition=void 0,a.removeOverkillDamage=void 0,a.phaseTransitionResetRequest=void 0,a.phaseTransitionResetRequestTime=void 0,a.game=void 0,a.encounters=void 0,a.healSources=void 0,a.resetTimer=null,a.debugLines=!1,a.isLive=t,a.dontResetOnZoneChange=!1,a.resetAfterPhaseTransition=!1,a.splitOnPhaseTransition=!1,a.removeOverkillDamage=!0,a.phaseTransitionResetRequest=!1,a.phaseTransitionResetRequestTime=0,a.resetState(),a.encounters=[],a.isLive&&setInterval(a.broadcastStateChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),100),a}l(a,e);var i=a.prototype;return i.resetState=function(){this.debugLines&&this.emit("log",{type:"debug",message:"Resetting state"});var e=t(this.game),a=+new Date;this.game={startedOn:a,lastCombatPacket:a,fightStartedOn:0,entities:{},damageStatistics:{totalDamageDealt:0,topDamageDealt:0,totalDamageTaken:0,topDamageTaken:0,totalHealingDone:0,topHealingDone:0,totalShieldDone:0,topShieldDone:0}},this.healSources=[],this.emit("reset-state",e)},i.softReset=function(){this.resetTimer=null;var e=t(this.game.entities);this.resetState();for(var a=0,i=Object.keys(e);a<i.length;a++){var n=i[a];+new Date-e[n].lastUpdate>6e5||this.updateEntity(e[n].name,{name:e[n].name,npcId:e[n].npcId,class:e[n].class,classId:e[n].classId,isPlayer:e[n].isPlayer,gearScore:e[n].gearScore,maxHp:e[n].maxHp,currentHp:e[n].currentHp})}},i.cancelReset=function(){this.resetTimer&&clearTimeout(this.resetTimer),this.resetTimer=null},i.splitEncounter=function(){var e=t(this.game);0==e.fightStartedOn||0==e.damageStatistics.totalDamageDealt&&!e.damageStatistics.totalDamageTaken||this.encounters.push(e),this.resetState()},i.broadcastStateChange=function(){var e=t(this.game);Object.values(e.entities).forEach(function(e){Object.values(e.skills).forEach(function(e){e.breakdown=[]})}),this.emit("state-change",e)},i.parseLogLine=function(e){if(e){var t=e.trim().split("|");if(!(t.length<1)&&t[0]){var a=h(t[0]);try{switch(a){case 0:this.onMessage(t);break;case 1:this.onInitEnv();break;case 2:this.onPhaseTransition(t);break;case 3:this.onNewPc(t);break;case 4:this.onNewNpc(t);break;case 5:this.onDeath(t);break;case 6:this.onSkillStart(t);break;case 7:this.onSkillStage(t);break;case 8:this.onDamage(t);break;case 9:this.onHeal(t);break;case 10:this.onBuff(t);break;case 12:this.onCounterattack(t)}}catch(e){this.emit("log",{type:"error",message:e})}}}},i.updateEntity=function(e,t){var a={lastUpdate:+new Date};this.game.entities[e]=o({},e in this.game.entities?this.game.entities[e]:{lastUpdate:0,id:"",npcId:0,name:"",class:"",classId:0,isPlayer:!1,isDead:!1,deaths:0,deathTime:0,gearScore:0,currentHp:0,maxHp:0,damageDealt:0,healingDone:0,shieldDone:0,damageTaken:0,skills:{},hits:{casts:0,total:0,crit:0,backAttack:0,frontAttack:0,counter:0}},t,a)},i.onMessage=function(e){var t=new f(e);this.debugLines&&this.emit("log",{type:"debug",message:"onMessage: "+t.message}),t.message.startsWith("Arguments:")||this.emit("message",t.message)},i.onInitEnv=function(){this.debugLines&&this.emit("log",{type:"debug",message:"onInitEnv"}),this.isLive?!1===this.dontResetOnZoneChange&&null==this.resetTimer&&(this.debugLines&&this.emit("log",{type:"debug",message:"Setting a reset timer"}),this.resetTimer=setTimeout(this.softReset.bind(this),6e3),this.emit("message","new-zone")):(this.splitEncounter(),this.emit("message","new-zone"))},i.onPhaseTransition=function(e){var t=new k(e);this.debugLines&&this.emit("log",{type:"debug",message:"onPhaseTransition: "+t.phaseCode}),this.isLive&&(this.emit("message","phase-transition-"+t.phaseCode),this.resetAfterPhaseTransition&&(this.phaseTransitionResetRequest=!0,this.phaseTransitionResetRequestTime=+new Date)),!this.isLive&&this.splitOnPhaseTransition&&this.splitEncounter()},i.onNewPc=function(e){var t=new v(e);this.debugLines&&this.emit("log",{type:"debug",message:"onNewPc: "+t.id+", "+t.name+", "+t.classId+", "+t.class+", "+t.gearScore+", "+t.currentHp+", "+t.maxHp}),this.updateEntity(t.name,o({id:t.id,name:t.name,class:t.class,classId:t.classId,isPlayer:!0},t.gearScore&&0!=t.gearScore&&{gearScore:t.gearScore},{currentHp:t.currentHp,maxHp:t.maxHp}))},i.onNewNpc=function(e){var t=new T(e);this.debugLines&&this.emit("log",{type:"debug",message:"onNewNpc: "+t.id+", "+t.name+", "+t.currentHp+", "+t.maxHp}),this.updateEntity(t.name,{id:t.id,name:t.name,npcId:t.npcId,isPlayer:!1,currentHp:t.currentHp,maxHp:t.maxHp})},i.onDeath=function(e){var t=new I(e);this.debugLines&&this.emit("log",{type:"debug",message:"onDeath: "+t.name+" "+t.killerName});var a=this.game.entities[t.name];this.updateEntity(t.name,{name:t.name,isDead:!0,deathTime:+t.timestamp,deaths:a?a.isDead?a.deaths:a.deaths+1:1})},i.onSkillStart=function(e){var t=new _(e);this.debugLines&&this.emit("log",{type:"debug",message:"onSkillStart: "+t.id+", "+t.name+", "+t.skillId+", "+t.skillName}),Object.keys(S).includes(t.skillName)&&this.healSources.push({source:t.name,expires:+t.timestamp+S[t.skillName].duration}),this.updateEntity(t.name,{name:t.name,isDead:!1});var a=this.game.entities[t.name];a&&(a.hits.casts+=1,t.skillName in a.skills||(a.skills[t.skillName]=o({},{id:0,name:"",totalDamage:0,damageWithBa:0,damageWithFa:0,maxDamage:0,hits:{casts:0,total:0,crit:0,backAttack:0,frontAttack:0,counter:0},breakdown:[]},{id:t.skillId,name:t.skillName}),a.skills[t.skillName].hits.casts+=1))},i.onSkillStage=function(e){var t=new A(e);this.debugLines&&this.emit("log",{type:"debug",message:"onSkillStage: "+t.name+", "+t.skillId+", "+t.skillName+", "+t.skillStage})},i.onDamage=function(e){if(!(e.length<13)){var t=new N(e);this.debugLines&&this.emit("log",{type:"debug",message:"onDamage: "+t.id+", "+t.name+", "+t.skillId+", "+t.skillName+", "+t.skillEffectId+", "+t.skillEffect+", "+t.targetId+", "+t.targetName+", "+t.damage+", "+t.currentHp+", "+t.maxHp}),this.phaseTransitionResetRequest&&this.phaseTransitionResetRequestTime>0&&this.phaseTransitionResetRequestTime<+new Date-1500&&(this.softReset(),this.phaseTransitionResetRequest=!1),this.updateEntity(t.name,{id:t.id,name:t.name}),this.updateEntity(t.targetName,{id:t.targetId,name:t.targetName,currentHp:t.currentHp,maxHp:t.maxHp});var a=this.game.entities[t.name],i=this.game.entities[t.targetName];!i.isPlayer&&this.removeOverkillDamage&&t.currentHp<0&&(t.damage=t.damage+t.currentHp),0===t.skillId&&0!==t.skillEffectId&&(t.skillId=t.skillEffectId,t.skillName=t.skillEffect),t.skillName in a.skills||(a.skills[t.skillName]=o({},{id:0,name:"",totalDamage:0,damageWithBa:0,damageWithFa:0,maxDamage:0,hits:{casts:0,total:0,crit:0,backAttack:0,frontAttack:0,counter:0},breakdown:[]},{id:t.skillId,name:t.skillName}));var n=15&t.damageModifier,s=(t.damageModifier>>4&7)-1;if(!("Bleed"===t.skillName&&t.damage>1e7||"Bleed"===t.skillName&&n===g.HIT_FLAG_DAMAGE_SHARE)){var r=n===g.HIT_FLAG_CRITICAL||n===g.HIT_FLAG_DOT_CRITICAL,l=s===u.HIT_OPTION_BACK_ATTACK,m=s===u.HIT_OPTION_FRONTAL_ATTACK,d=r?1:0,c=l?1:0,h=m?1:0;a.skills[t.skillName].totalDamage+=t.damage,t.damage>a.skills[t.skillName].maxDamage&&(a.skills[t.skillName].maxDamage=t.damage),a.damageDealt+=t.damage,i.damageTaken+=t.damage,"Bleed"!==t.skillName&&(a.hits.total+=1,a.hits.crit+=d,a.hits.backAttack+=c,a.hits.frontAttack+=h,a.skills[t.skillName].hits.total+=1,a.skills[t.skillName].hits.crit+=d,a.skills[t.skillName].hits.backAttack+=c,a.skills[t.skillName].hits.frontAttack+=h,a.skills[t.skillName].damageWithBa+=c*t.damage,a.skills[t.skillName].damageWithFa+=h*t.damage),a.isPlayer&&(this.game.damageStatistics.totalDamageDealt+=t.damage,this.game.damageStatistics.topDamageDealt=Math.max(this.game.damageStatistics.topDamageDealt,a.damageDealt),a.skills[t.skillName].breakdown.push({timestamp:+t.timestamp,damage:t.damage,targetEntity:i.id,isCrit:r,isBackAttack:l,isFrontAttack:m})),i.isPlayer&&(this.game.damageStatistics.totalDamageTaken+=t.damage,this.game.damageStatistics.topDamageTaken=Math.max(this.game.damageStatistics.topDamageTaken,i.damageTaken)),0===this.game.fightStartedOn&&(this.game.fightStartedOn=+t.timestamp),this.game.lastCombatPacket=+t.timestamp}}},i.onHeal=function(e){var t=new H(e);this.debugLines&&this.emit("log",{type:"debug",message:"onHeal: "+t.id+", "+t.name+", "+t.healAmount});for(var a,i="",n=c(this.healSources);!(a=n()).done;){var s=a.value;if(s.expires>=+t.timestamp){i=s.source;break}}i&&(this.updateEntity(i,{name:i}),this.game.entities[i].healingDone+=t.healAmount,this.game.entities[i].isPlayer&&(this.game.damageStatistics.totalHealingDone+=t.healAmount,this.game.damageStatistics.topHealingDone=Math.max(this.game.damageStatistics.topHealingDone,this.game.entities[i].healingDone)))},i.onBuff=function(e){var t=new y(e);this.debugLines&&this.emit("log",{type:"debug",message:"onBuff: "+t.id+", "+t.name+", "+t.buffId+", "+t.buffName+", "+t.sourceId+", "+t.sourceName+", "+t.shieldAmount}),t.shieldAmount&&t.isNew&&(this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].shieldDone+=t.shieldAmount,this.game.entities[t.name].isPlayer&&(this.game.damageStatistics.totalShieldDone+=t.shieldAmount,this.game.damageStatistics.topShieldDone=Math.max(this.game.damageStatistics.topShieldDone,this.game.entities[t.name].shieldDone)))},i.onCounterattack=function(e){var t=new b(e);this.debugLines&&this.emit("log",{type:"debug",message:"onCounterattack: "+t.id+", "+t.name}),this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].hits.counter+=1},a}(a);function L(e,t,a,r,l){try{var m=e.slice(0,-4),d=m+".json",h=n.readFileSync(s.join(a,e),"utf-8");if(!h)return l(null,"empty log");var u=new D(!1);!0===t&&(u.splitOnPhaseTransition=!0);for(var g,p=c(h.split("\n").filter(function(e){return null!=e&&""!=e}));!(g=p()).done;)u.parseLogLine(g.value);u.splitEncounter();var f=u.encounters;if(f.length>0){for(var k,v={encounters:[]},T=c(f);!(k=T()).done;){var I=k.value,_=I.lastCombatPacket-I.fightStartedOn;if(!(_<=1e3)){for(var A={name:"",damageTaken:0,isPlayer:!1},N=0,H=Object.values(I.entities);N<H.length;N++){var y=H[N];y.damageTaken>A.damageTaken&&(A={name:y.name,damageTaken:y.damageTaken,isPlayer:y.isPlayer})}var b={duration:_,mostDamageTakenEntity:A},S=i(),L=m+"_"+S+"_encounter.json";v.encounters.push(o({encounterId:S,encounterFile:L},b)),n.writeFileSync(s.join(r,L),JSON.stringify(o({},I,b)))}}return n.writeFileSync(s.join(r,d),JSON.stringify(v)),l(null,"log parsed")}return l(null,"no encounters found")}catch(e){return l(e,"log parser error")}}e.extend(r);export{L as default};
//# sourceMappingURL=file-parser-worker.module.js.map
