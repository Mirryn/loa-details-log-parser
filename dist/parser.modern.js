import e from"lodash/cloneDeep.js";import t from"events";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},i.apply(this,arguments)}function s(e,t=0,i=10){if("number"==typeof e)return isNaN(e)?t:e;let s;try{s=parseInt(e,i),isNaN(s)&&(s=t)}catch(e){s=t}return s}class a{constructor(e){this.lineSplit=void 0,this.timestamp=void 0,this.lineSplit=e,this.timestamp=new Date(this.lineSplit[1])}}class n extends a{constructor(e){super(e),this.message=void 0,this.message=this.lineSplit[2]}}class m extends a{constructor(e){super(e),this.phaseCode=void 0,this.phaseCode=s(e[2])}}class h extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.classId=void 0,this.class=void 0,this.gearScore=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.classId=s(e[4]),this.class=e[5]||"UnknownClass",this.gearScore=e[7],this.currentHp=s(e[8]),this.maxHp=s(e[9])}}class o extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=e[2],this.name=e[4]||"Unknown Entity",this.currentHp=s(e[5]),this.maxHp=s(e[6])}}class r extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.killerId=void 0,this.killerName=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.killerId=e[4],this.killerName=e[5]||"Unknown Entity"}}class l extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.skillId=e[4],this.skillName=e[5]||"Unknown Skill"}}class d extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.skillStage=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.skillId=e[4],this.skillName=e[5]||"Unknown Skill",this.skillStage=s(e[6])}}class g extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.skillEffectId=void 0,this.skillEffect=void 0,this.targetId=void 0,this.targetName=void 0,this.damage=void 0,this.damageModifier=void 0,this.isCrit=void 0,this.isBackAttack=void 0,this.isFrontAttack=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.skillId=s(e[4]),this.skillName=e[5]||"Unknown Skill",this.skillEffectId=s(e[6]),this.skillEffect=e[7],this.targetId=e[8],this.targetName=e[9]||"Unknown Entity",this.damage=s(e[10]),this.damageModifier=s(e[11],0,16),this.currentHp=s(e[12]),this.maxHp=s(e[13])}}class c extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.healAmount=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.healAmount=s(e[4])}}class u extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.buffId=void 0,this.buffName=void 0,this.isNew=void 0,this.sourceId=void 0,this.sourceName=void 0,this.shieldAmount=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity",this.buffId=e[4],this.buffName=e[5],this.isNew="1"==e[6],this.sourceId=e[7],this.sourceName=e[8]||"Unknown Entity",this.shieldAmount=s(e[9])}}class p extends a{constructor(e){super(e),this.id=void 0,this.name=void 0,this.id=e[2],this.name=e[3]||"Unknown Entity"}}const k={"Serenade of Salvation":{duration:3},"Holy Aura":{duration:16e3},"Holy Protection":{duration:7e3},Demonize:{duration:1500}};var T;!function(e){e[e.HIT_FLAG_NORMAL=0]="HIT_FLAG_NORMAL",e[e.HIT_FLAG_CRITICAL=1]="HIT_FLAG_CRITICAL",e[e.HIT_FLAG_MISS=2]="HIT_FLAG_MISS",e[e.HIT_FLAG_INVINCIBLE=3]="HIT_FLAG_INVINCIBLE",e[e.HIT_FLAG_DOT=4]="HIT_FLAG_DOT",e[e.HIT_FLAG_IMMUNE=5]="HIT_FLAG_IMMUNE",e[e.HIT_FLAG_IMMUNE_SILENCED=6]="HIT_FLAG_IMMUNE_SILENCED",e[e.HIT_FLAG_FONT_SILENCED=7]="HIT_FLAG_FONT_SILENCED",e[e.HIT_FLAG_DOT_CRITICAL=8]="HIT_FLAG_DOT_CRITICAL",e[e.HIT_FLAG_DODGE=9]="HIT_FLAG_DODGE",e[e.HIT_FLAG_REFLECT=10]="HIT_FLAG_REFLECT",e[e.HIT_FLAG_DAMAGE_SHARE=11]="HIT_FLAG_DAMAGE_SHARE",e[e.HIT_FLAG_DODGE_HIT=12]="HIT_FLAG_DODGE_HIT",e[e.HIT_FLAG_MAX=13]="HIT_FLAG_MAX",e[e.HIT_OPTION_BACK_ATTACK=16]="HIT_OPTION_BACK_ATTACK",e[e.HIT_OPTION_FRONTAL_ATTACK=32]="HIT_OPTION_FRONTAL_ATTACK",e[e.HIT_OPTION_FLANK_ATTACK=64]="HIT_OPTION_FLANK_ATTACK"}(T||(T={}));class v{constructor(e=!1){this.eventEmitter=void 0,this.resetTimer=void 0,this.debugLines=void 0,this.isLive=void 0,this.dontResetOnZoneChange=void 0,this.resetAfterPhaseTransition=void 0,this.splitOnPhaseTransition=void 0,this.removeOverkillDamage=void 0,this.phaseTransitionResetRequest=void 0,this.phaseTransitionResetRequestTime=void 0,this.game=void 0,this.encounters=void 0,this.healSources=void 0,this.eventEmitter=new t,this.resetTimer=null,this.debugLines=!1,this.isLive=e,this.dontResetOnZoneChange=!1,this.resetAfterPhaseTransition=!1,this.splitOnPhaseTransition=!1,this.removeOverkillDamage=!0,this.phaseTransitionResetRequest=!1,this.phaseTransitionResetRequestTime=0,this.resetState(),this.encounters=[],this.isLive&&setInterval(this.broadcastStateChange.bind(this),100)}resetState(){this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"Resetting state"});const e=+new Date;this.game={startedOn:e,lastCombatPacket:e,fightStartedOn:0,entities:{},damageStatistics:{totalDamageDealt:0,topDamageDealt:0,totalDamageTaken:0,topDamageTaken:0,totalHealingDone:0,topHealingDone:0,totalShieldDone:0,topShieldDone:0}},this.healSources=[],this.eventEmitter.emit("reset-state")}softReset(){this.resetTimer=null;const t=e(this.game.entities);this.resetState();for(const e of Object.keys(t))+new Date-t[e].lastUpdate>6e5||this.updateEntity(t[e].name,{name:t[e].name,class:t[e].class,isPlayer:t[e].isPlayer,gearScore:t[e].gearScore,maxHp:t[e].maxHp,currentHp:t[e].currentHp})}cancelReset(){this.resetTimer&&clearTimeout(this.resetTimer),this.resetTimer=null}splitEncounter(){const t=e(this.game);0==t.fightStartedOn||0==t.damageStatistics.totalDamageDealt&&!t.damageStatistics.totalDamageTaken||this.encounters.push(t),this.resetState()}broadcastStateChange(){this.eventEmitter.emit("state-change",this.game)}parseLogLine(e){if(!e)return;const t=e.trim().split("|");if(t.length<1||!t[0])return;const i=s(t[0]);try{switch(i){case 0:this.onMessage(t);break;case 1:this.onInitEnv();break;case 2:this.onPhaseTransition(t);break;case 3:this.onNewPc(t);break;case 4:this.onNewNpc(t);break;case 5:this.onDeath(t);break;case 6:this.onSkillStart(t);break;case 7:this.onSkillStage(t);break;case 8:this.onDamage(t);break;case 9:this.onHeal(t);break;case 10:this.onBuff(t);break;case 11:this.onCounterattack(t)}}catch(e){this.eventEmitter.emit("log",{type:"error",message:e})}}updateEntity(e,t){const s={lastUpdate:+new Date};this.game.entities[e]=i({},e in this.game.entities?this.game.entities[e]:{lastUpdate:0,id:"",name:"",class:"",isPlayer:!1,isDead:!1,deathTime:0,gearScore:"",currentHp:0,maxHp:0,damageDealt:0,healingDone:0,shieldDone:0,damageTaken:0,skills:{},hits:{total:0,crit:0,backAttack:0,frontAttack:0,counter:0}},t,s)}onMessage(e){const t=new n(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onMessage: ${t.message}`}),t.message.startsWith("Arguments:")||this.eventEmitter.emit("message",t.message)}onInitEnv(){this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onInitEnv"}),this.isLive?!1===this.dontResetOnZoneChange&&null==this.resetTimer&&(this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"Setting a reset timer"}),this.resetTimer=setTimeout(this.softReset.bind(this),6e3),this.eventEmitter.emit("message","new-zone")):(this.splitEncounter(),this.eventEmitter.emit("message","new-zone"))}onPhaseTransition(e){const t=new m(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onPhaseTransition: ${t.phaseCode}`}),this.isLive&&(this.eventEmitter.emit("message",`phase-transition-${t.phaseCode}`),this.resetAfterPhaseTransition&&(this.phaseTransitionResetRequest=!0,this.phaseTransitionResetRequestTime=+new Date)),!this.isLive&&this.splitOnPhaseTransition&&this.splitEncounter()}onNewPc(e){const t=new h(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onNewPc: ${t.id}, ${t.name}, ${t.classId}, ${t.class}, ${t.gearScore}, ${t.currentHp}, ${t.maxHp}`}),this.updateEntity(t.name,i({name:t.name,class:t.class,isPlayer:!0},t.gearScore&&"0"!=t.gearScore&&{gearScore:t.gearScore},{currentHp:t.currentHp,maxHp:t.maxHp}))}onNewNpc(e){const t=new o(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onNewNpc: ${t.id}, ${t.name}, ${t.currentHp}, ${t.maxHp}`}),this.updateEntity(t.name,{name:t.name,isPlayer:!1,currentHp:t.currentHp,maxHp:t.maxHp})}onDeath(e){const t=new r(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onDeath: ${t.name} ${t.killerName}`}),this.updateEntity(t.name,{name:t.name,isDead:!0,deathTime:t.timestamp.getTime()})}onSkillStart(e){const t=new l(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onSkillStart: ${t.id}, ${t.name}, ${t.skillId}, ${t.skillName}`}),Object.keys(k).includes(t.skillName)&&this.healSources.push({source:t.name,expires:+t.timestamp+k[t.skillName].duration}),this.updateEntity(t.name,{name:t.name,isDead:!1})}onSkillStage(e){const t=new d(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onSkillStage: ${t.name}, ${t.skillId}, ${t.skillName}, ${t.skillStage}`})}onDamage(e){if(e.length<16)return;const t=new g(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onDamage: ${t.id}, ${t.name}, ${t.skillId}, ${t.skillName}, ${t.skillEffectId}, ${t.skillEffect}, ${t.targetId}, ${t.targetName}, ${t.damage}, ${t.currentHp}, ${t.maxHp}`}),this.phaseTransitionResetRequest&&this.phaseTransitionResetRequestTime>0&&this.phaseTransitionResetRequestTime<+new Date-1500&&(this.softReset(),this.phaseTransitionResetRequest=!1),this.updateEntity(t.name,{name:t.name}),this.updateEntity(t.targetName,{name:t.targetName,currentHp:t.currentHp,maxHp:t.maxHp});const s=this.game.entities[t.name],a=this.game.entities[t.targetName];if(!a.isPlayer&&this.removeOverkillDamage&&t.currentHp<0&&(t.damage=t.damage+t.currentHp),t.skillName in this.game.entities[t.name].skills||(this.game.entities[t.name].skills[t.skillName]=i({},{name:"",totalDamage:0,maxDamage:0,hits:{total:0,crit:0,backAttack:0,frontAttack:0,counter:0}},{name:t.skillName})),"Bleed"===t.skillName&&t.damage>1e7)return;if("Bleed"===t.skillName&&11===t.damageModifier)return;const n=(t.damageModifier&(T.HIT_FLAG_CRITICAL|T.HIT_FLAG_DOT_CRITICAL))>0?1:0,m=(t.damageModifier&T.HIT_OPTION_BACK_ATTACK)>0?1:0,h=(t.damageModifier&T.HIT_OPTION_FRONTAL_ATTACK)>0?1:0;this.game.entities[t.name].skills[t.skillName].totalDamage+=t.damage,t.damage>this.game.entities[t.name].skills[t.skillName].maxDamage&&(this.game.entities[t.name].skills[t.skillName].maxDamage=t.damage),this.game.entities[t.name].damageDealt+=t.damage,this.game.entities[t.targetName].damageTaken+=t.damage,"Bleed"!==t.skillName&&(this.game.entities[t.name].hits.total+=1,this.game.entities[t.name].hits.crit+=n,this.game.entities[t.name].hits.backAttack+=m,this.game.entities[t.name].hits.frontAttack+=h,this.game.entities[t.name].skills[t.skillName].hits.total+=1,this.game.entities[t.name].skills[t.skillName].hits.crit+=n,this.game.entities[t.name].skills[t.skillName].hits.backAttack+=m,this.game.entities[t.name].skills[t.skillName].hits.frontAttack+=h),s.isPlayer&&(this.game.damageStatistics.totalDamageDealt+=t.damage,this.game.damageStatistics.topDamageDealt=Math.max(this.game.damageStatistics.topDamageDealt,s.damageDealt)),a.isPlayer&&(this.game.damageStatistics.totalDamageTaken+=t.damage,this.game.damageStatistics.topDamageTaken=Math.max(this.game.damageStatistics.topDamageTaken,a.damageTaken)),0===this.game.fightStartedOn&&(this.game.fightStartedOn=+t.timestamp),this.game.lastCombatPacket=+t.timestamp}onHeal(e){const t=new c(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onHeal: ${t.id}, ${t.name}, ${t.healAmount}`});let i="";for(const e of this.healSources)if(e.expires>=+t.timestamp){i=e.source;break}i&&(this.updateEntity(i,{name:i}),this.game.entities[i].healingDone+=t.healAmount,this.game.entities[i].isPlayer&&(this.game.damageStatistics.totalHealingDone+=t.healAmount,this.game.damageStatistics.topHealingDone=Math.max(this.game.damageStatistics.topHealingDone,this.game.entities[i].healingDone)))}onBuff(e){const t=new u(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onBuff: ${t.id}, ${t.name}, ${t.buffId}, ${t.buffName}, ${t.sourceId}, ${t.sourceName}, ${t.shieldAmount}`}),t.shieldAmount&&t.isNew&&(this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].shieldDone+=t.shieldAmount,this.game.entities[t.name].isPlayer&&(this.game.damageStatistics.totalShieldDone+=t.shieldAmount,this.game.damageStatistics.topShieldDone=Math.max(this.game.damageStatistics.topShieldDone,this.game.entities[t.name].shieldDone)))}onCounterattack(e){const t=new p(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:`onCounterattack: ${t.id}, ${t.name}`}),this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].hits.counter+=1}}export{v as LogParser};
//# sourceMappingURL=parser.modern.js.map
