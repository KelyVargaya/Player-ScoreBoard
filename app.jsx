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

const Header = ({ players }) => {
  
  let score = 0;
  for (var i = 0; i < players.length; i++) {
    score += players[i].score;
  }
  return (
    <section className="div_header" >
      <table className='stats'>
      <tr>
      <td>PLAYERS:
        <h3>{players.length}</h3>
      </td>
      <td className="stats">TOTAL POINTS: 
        <h3>{score}</h3>
      </td>
        </tr>
      {stopWatch()}
      </table>
    </section>
  );
}


const stopWatch = () => {
  let cont = 0;
  return (
    <div className="stopwatch container">
      <h2>STOPWATCH</h2>
      <p className="stopwatch-time">{cont}</p>
       <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-6">
          <button>START</button>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-6">
          <button>RESET</button>
        </div>
      </div>
    </div>

  );
}

const ShowList = (players) => {
  return players.map((player, index) => {
    return (
      <li key={index}>
        <section className="player">
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
        </section>
      </li>

    );
  });
}


const PlayerList = ({ players }) => {
  return (
    <div>
      <ol>{ShowList(players)}</ol>
    </div>
  );
}

const PlayerForm = () => {
  return (
    <section className="add-player-form">
      <form action="">
        <input type="text"/>
        <button id="player">
          Add Player
        </button>
      </form>
    </section>
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
