// Rover Object Goes Here
// ======================
var rover = {
  direction:"N",
  x : 0,
  y : 0,
  travelLog: [],
};

// ======================
var grid = [
  ['R','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']
];

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(roverDirection){
    case 'N':
      roverDirection = "W";
      break;
    case 'W':
      roverDirection = "S";
      break;
    case 'S':
      roverDirection = "E";
      break;
    case 'E':
      roverDirection = "N";
      break;
    default:
      console.log("Direction incorrect.");
  }
  console.log("The Rover it is facing " + roverDirection);
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(roverDirection){
    case 'N':
      roverDirection = "E";
      break;
    case 'E':
      roverDirection = "S";
      break;
    case 'S':
      roverDirection = "W";
      break;
    case 'W':
      roverDirection = "N";
      break;
    default:
      console.log("Direction incorrect.");
  }
  console.log("The Rover it is facing " + roverDirection);
}
function moveForward(rover){
  rover.validateCommand = true;
  console.log("moveForward was called");
  switch (roverDirection) {
    case "N":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.y != 0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover moves north: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=0){
        console.log("There is an obstacle Rover can not advance");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not advance, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "E":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.x != 9 && rover.validateCommand === true && grid[rover.y][rover.x +1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover moves East: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=9){
        console.log("There is an obstacle Rover can not advance");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not advance, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "S":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.y !=9 && rover.validateCommand === true && grid[rover.y +1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover moves South: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=9){
        console.log("There is an obstacle Rover can not advance");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not advance, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "W":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.x !=0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.x--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover moves West: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=0){
        console.log("There is an obstacle Rover can not advance");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not advance, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    default:
      console.log("This is North South West East, it is not Proa Popa Port or Starboard");
      break;
  }
}
function moveBackward(rover){
  rover.validateCommand = true;
  console.log("moveForward was called");
  switch (roverDirection) {
    case "N":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.y != 9 && rover.validateCommand === true && grid[rover.y +1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover back to the South: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=9){
        console.log("There is an obstacle Rover can not go back!");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not go back, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "E":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.x != 0 && rover.validateCommand === true && grid[rover.y][rover.x -1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover back to the West: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=0){
        console.log("There is an obstacle Rover can not go back!");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not go back, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "S":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.y !=0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover back to the North: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=0){
        console.log("There is an obstacle Rover can not go back!");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not go back, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "W":
      console.log("The Rover it is facing " + roverDirection);
      if(rover.x !=9 && rover.validateCommand === true && grid[rover.y][rover.x +1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover back to the East: is in " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=9){
        console.log("There is an obstacle Rover can not go back!");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover can not go back, restricted area. Interrupted command list");
        console.log("rover is in " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    default:
      console.log("This is North South West East, it is not Proa Popa Port or Starboard");
      break;
  }
}
function validate(command){
  var validate = 0;
  for(var i = 0; i < command.length; i++){
    if(command[i]==="f" || command[i]==="l" || command[i]==="r" || command[i]==="b"){
      validate++;
    }
  }
  if(validate === command.length){
    rover.validateCommand = true;
  }else{
    rover.validateCommand = false;
  }
}
function goForward(command){
  validate(command);
  if(rover.validateCommand === true){
    console.log("se inicia la lista de comandos");
    for(var i = 0; i < command.length; i++){
      if(rover.validateCommand === true){
        switch (command[i]) {
          case "f":
            moveForward(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
          default:
            console.log("Interrupted command list");
            break;
        }
      }
    }
    console.log("Command list completed");
  }else{
      console.log("Incorrect command");
    }
  console.log("TravelLog")
  rover.travelLog.forEach(function(travelLog){
    console.log(travelLog);
  });
}
function randomNum(){
  return Math.floor(Math.random() * 10);
}
for (var i = 0; i < 10; i++){
  var row = randomNum();
  var column = randomNum();
  if (grid[column][row]!="R") {
    grid[column][row] = "O";
    console.log("Row " + row + " " + "Column " + column);
  }else{
    console.log("Rover en Row "+ 0 + " " + "Column" + 0);
  }
}