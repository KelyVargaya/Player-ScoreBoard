let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const stopWatch = () => {
  let contador = 0;
  return (
    <div className="stopwatch container">
      <h2>STOPWATCH</h2>
      <p className="stopwatch-time">{contador}</p>
       <div className="row">
        <div className="col-md-6">
          <button>START</button>
        </div>
        <div className="col-md-6">
          <button>RESET</button>
        </div>
      </div>
    </div>

  );
}

const Header = ({ players }) => {
  let score = 0;
  let playersNum = players.length;
  for (var i = 0; i < players.length; i++) {
    score += parseInt(players[i].score);
  }
  return (
    <div className="div_header" >
      <td>PLAYERS: <h1 >{playersNum}</h1></td>
      <td className="stats">TOTAL POINTS: <h1 >{score}</h1></td>
      {stopWatch()}

    </div>
  );
}

const getPlayersList = (players) => {
  return players.map((player, index) => {
    return (
      <li key={index}>
        <div className="player">
          <p className="player-name ">{player.name}</p>
          <div className="counter">
            <button className= "counter-action decrement btn-danger"> 
              -
            </button>
            <p className= "counter-score">{player.score}</p>
            <button className= "counter counter-action increment btn-success">
              +
              </button>
          </div>
        </div>
      </li >

    );
  });
}


const PlayerList = ({ players }) => {
  return (
    <div>
      <ul>{getPlayersList(players)}</ul>
    </div>
  );
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text"/>
        <button id="player">
          ADD PLAYER
        </button>
      </form>
    </div>
  );
}

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));