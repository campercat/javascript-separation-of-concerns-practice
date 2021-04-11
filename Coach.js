class Coach {
  constructor(name, firstYear) {
    this.name = name
    this.firstYear = firstYear
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
      matchesPlayed: 0
    }
  }

  gameOver(result) {
    this.stats.matchesPlayed++
    if(result === "W") {
      this.stats.wins++
    } else if(result === "L") {
      this.stats.losses++
    } else if(result === "D") {
      this.stats.draws++
    }
  }
}

export default Coach