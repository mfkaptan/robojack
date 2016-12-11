var robot = require("robotjs");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var rx = 775, lx = 660 , y = 360;
var side = "left";
var log;
var pos = lx;

sleep(10000);
robot.keyTap("left");

while(1)
{
    log = (robot.getPixelColor(pos, y) == "a17438");

    if(log)
    {
        if(side == "left")
        {
            side = "right";
            pos = rx;
        }
        else
        {
            side = "left";
            pos = lx;
        }
    }

    robot.keyTap(side);
    sleep(15);
    robot.keyTap(side);
    sleep(180);
}
