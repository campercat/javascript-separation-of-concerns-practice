class Team {
  constructor(team, coach) {
    this.team = team
    this.coach = coach
    this.players = []
  }

  signPlayer(player) {
    this.players.push(player)
  }
}

export default Team