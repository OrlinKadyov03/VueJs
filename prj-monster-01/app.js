function AttackedHealt(max,min){
    return Math.floor(Math.random() * (max - min) + min)
}

function Healing(max,min){
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
  data(){
    return{
        monsterHealth: 100,
        playerHealth: 100,
        currentRound: 0,
        winner: null,
        logs: []
    }
  },
  computed:{
   StyleMonster(){
    if(this.monsterHealth < 0){
        return {width: '0px'}
    }
    return {width: this.monsterHealth + '%'}
   },
   StylePlayer(){
    if(this.playerHealth < 0){
        return {width: '0px'}
    }
    return {width: this.playerHealth + '%'}
   },
   DisableSpecialAttack(){
    return this.currentRound % 3 !== 0
   },
  },
  methods:{
    surrender(){
        this.winner = 'monster'
    },
    startNewGame(){
      this.monsterHealth = 100,
      this.playerHealth = 100,
      this.currentRound = 0,
      this.winner = null
      this.logs = []
    },
    attackMonster(){
        this.currentRound ++
        const attackMonster = AttackedHealt(12,5)
        this.monsterHealth -= attackMonster
        this.attackHuman()
        this.AddLogs('monster','attack',attackMonster)
    },
    attackHuman(){
        const attackPlayer = AttackedHealt(15,8)
        this.playerHealth -= attackPlayer
        this.AddLogs('player','attack',attackPlayer)

    },
    specialMonsterAttack(){
        this.currentRound ++
        const attackMonster = AttackedHealt(30,10)
        this.monsterHealth -= attackMonster
        this.attackHuman()
        this.AddLogs('monster','special-attack',attackMonster)
    },
    heal(){
        this.currentRound++
        const healing = Healing(20,8)
        if(this.playerHealth + healing > 100){
            this.playerHealth = 100
        }else{
            this.playerHealth += healing
        }
        this.attackHuman()
        this.AddLogs('player','healing',healing)
    },
    AddLogs(who,what,value){
        this.logs.unshift({
            actionBy: who,
            actionType: what,
            actionValue: value
        })
    }
  },
  watch: {
    monsterHealth(value){
        if(value <= 0 && this.playerHealth <= 0){
          this.winner = 'draw'
        }else if(value <= 0){
          this.winner = 'player'
        }
    },
    playerHealth(value){
       if(value <= 0 && this.monsterHealth <= 0){
         this.winner = 'draw'
       }else if(value <=0){
         this.winner = 'monster'
       }
    }
  }
})

app.mount('#game')