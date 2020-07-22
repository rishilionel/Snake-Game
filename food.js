import { expandsnake , onsnake } from './snake.js';
const expand_rate=1;
export var point=0;
export var escape=1;
export const GRID_SIZE=20;
export var food = randompos();
export function foodprop(game)
{
    draw(game);
    update();
}
function draw(game)
{
    escape=0;
    var foodele = document.createElement("div");
    foodele.style.gridRowStart = food.x;
    foodele.style.gridColumnStart = food.y;
    foodele.classList.add("food");
    game.appendChild(foodele);
}
function update()
{
    if(onsnake(food ,false))
    {
        point++;
        expandsnake(expand_rate);
        food=randompos();
        escape=1;
    }
}

function randompos()
{
    let newfoodpos;
    while(newfoodpos==null ||  onsnake(newfoodpos))
    {
        newfoodpos = randomgrid();
    }
    return newfoodpos;
}

function randomgrid()
{
    return{
        x : Math.floor(Math.random() * GRID_SIZE) +1 ,
        y : Math.floor(Math.random() * GRID_SIZE) +1
    }
            
}