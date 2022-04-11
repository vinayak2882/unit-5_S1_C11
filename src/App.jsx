import {useState} from "react";


function App() {

  const[Score,setScore]=useState(0);
  const[Wicket,setWicket]=useState(0);
  const[Over,setOver]=useState(0);

  const handlescore = (value)=>{
    if(Score<=0){
      return;
    }
    setScore(Score+value);
  }

  const handleWicket = (value)=>{
    if(Wicket<=0){
      return;
    }
    setScore(Wicket+value);
  }

  const handleOver = (value)=>{
    if(Over<=0){
      return;
    }
    setScore(Over+value);
  }

// const handle

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1">Add 1</button>
        <button className="addScore4">Add 4</button>
        <button className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;