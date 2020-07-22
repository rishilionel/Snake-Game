let time=0;
let game = document.getElementById("game");
import { speed , snakeprop , snakepos ,onsnake} from './snake.js';
import { foodprop , GRID_SIZE, food as food2, escape ,point} from './food.js';
function timelapse(currenttime)
{   
    if(checkdead())
    {
        if(confirm("SCORE : "+ point + "\nPress OK to restart"))
        {
            window.location = 'http://localhost:8080/';
        }
        return;
    }
    window.requestAnimationFrame(timelapse);
    const etime=(currenttime-time)/1000;
    if(etime<1/speed)
    return;
    else
    {
        snake();
        food();
        time=currenttime;
    }
}
window.requestAnimationFrame(timelapse);
function snake()
{
    game.innerHTML='';
    snakeprop(game);
}
function food()
{
    foodprop(game);

}
function checkdead()
{
    var head = snakepos[0];
    var x = head.x >GRID_SIZE || head.x<=0 || head.y<=0 || head.y>GRID_SIZE; 
    var y = onsnake(snakepos[0],true);
    return (x || y) && escape==0 ;
}