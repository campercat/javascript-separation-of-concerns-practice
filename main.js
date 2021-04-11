import Player from './Player.js'
import Team from './Team.js'
import Coach from './Coach.js'

let drogba = new Player(
  'Didier Drogba',
  11,
  'Striker'
)
let alonso = new Player(
  'Marcos Alonso',
  3,
  'Left back'
)
let messi = new Player(
  'Lionel Messi',
  10,
  'Forward',
  'Barcelona'
)
let ronaldo = new Player(
  'Cristiano Ronaldo',
  7,
  'Forward',
  'Juventus'
)

let lampard = new Coach('Frank Lampard', 1993)
let setien = new Coach('Quique Setién', 2003)
let sarri = new Coach('Maurizio Sarri', 1988)

let chelsea = new Team(
  'Chelsea',
  lampard
)

let barcelona = new Team(
  'Barcelona',
  setien
)

let juventus = new Team(
  'Juventus',
  sarri
)


lampard.gameOver('W')
lampard.gameOver('L')
setien.gameOver('D')
sarri.gameOver('W')

chelsea.signPlayer(drogba)
chelsea.signPlayer(alonso)
barcelona.signPlayer(messi)
juventus.signPlayer(ronaldo)

console.log(chelsea)
console.log(barcelona)
console.log(juventus)

drogba.score()
drogba.score()
drogba.assist()
alonso.score()
messi.assist()
messi.score()
ronaldo.assist()
ronaldo.redCard()



console.log("Drogba's stats:")
console.log(drogba.stats)
console.log("Alonso's stats:")
console.log(alonso.stats)
console.log("Messi's stats:")
console.log(messi.stats)
console.log("Ronaldo's stats:")
console.log(ronaldo.stats)

console.log(lampard.stats)
console.log(setien.stats)
console.log(sarri.stats)

console.log(`${chelsea.coach.name} is the head coach for ${chelsea.team}`)
console.log(`${lampard.name} stats:`, lampard.stats)