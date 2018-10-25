 //make politician objects
  var makepolitico = function(polName, partyColor){
    var politico= {};

    politico.Name = polName;
    politico.elecRes = null;
    politico.totalVotes = 0;
    politico.electionresults = [];
    politico.partyColor = partyColor;

    politico.addupVotes = function(){
      this.totalVotes = 0;
      for (i=0; i<this.electionresults.length; i++){
        this.totalVotes += this.electionresults[i];
      }
     }

  return politico;
  };
  var mark = makepolitico("Mark Diller", [132,17,11]);
  var gail = makepolitico("Gail Brewer", [245,141,136]);
console.log("Mark's color is " + mark.partyColor);
console.log ("Gail's color is " + gail.partyColor);

//make arrays election results
  mark.electionresults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  gail.electionresults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//change arrays with recount results
mark.electionresults[9]=1;
gail.electionresults[9]=28;
mark.electionresults[4]=17;
gail.electionresults[4]=38;
mark.electionresults[43]=11;
gail.electionresults[43]=27;

//function to determine winner by state

var setStateResults = function (state){

  theStates[state].winner = null;

    if (mark.electionresults[state] > gail.electionresults[state]){
      theStates[state].winner = mark;

    }else if (gail.electionresults[state] > mark.electionresults[state]){
      theStates[state].winner = gail;
    }
  //set color of state to winner color

  var stateWinner = theStates[state].winner;

    if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;

    }else {theStates[state].rgbColor = [11, 32, 57];
  };


// populate tables
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var stateAbbrev = header.children[0].children[1];
  var name1 = body.children[0].children[0];
  var results1 = body.children[0].children[1];
  var name2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];
  var winnerName = body.children[2].children[1];


  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  name1.innerText = mark.Name;
  name2.innerText = gail.Name;
  results1.innerText = mark.electionresults[state];
  results2.innerText = gail.electionresults[state];
  if (theStates[state].winner === null) {
    winnerName.innerText ="Tie";
  }else {
    winnerName.innerText=theStates[state].winner.Name;
  }


};

// add up votes
  mark.addupVotes();
  gail.addupVotes();
console.log(mark.totalVotes, gail.totalVotes);

var winner = "???";
  if (mark.totalVotes < gail.totalVotes){
    winner = gail.Name;
  } else if (gail.totalVotes < mark.totalVotes){
    winner = mark.Name;
  } else {
    winner = "Tie";
  }
  var countryResultsTable = document.getElementById('countryResults');
  var tablerow = countryResultsTable.children[0].children[0];

  tablerow.children[0].innerText = mark.Name;
  tablerow.children[1].innerText = mark.totalVotes;
  tablerow.children[2].innerText = gail.Name;
  tablerow.children[3].innerText = gail.totalVotes;
  tablerow.children[5].innerText = winner;
