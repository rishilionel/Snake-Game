export const speed=8;
import { inputdirection } from './snakedir.js';
var ignorehead;
export const snakepos = 
[
    { x:10 , y:10 },
];
export function snakeprop(game)
{
    draw(game);
    update();
}
function draw(game)
{
    snakepos.forEach(element => {
        const snake = document.createElement("div");
        snake.style.gridRowStart=element.x;
        snake.style.gridColumnStart=element.y;
        snake.classList.add("snake"); 
        game.appendChild(snake);
    });
}
function update()
{
    const inputdir = inputdirection();
    for(var i=snakepos.length-2;i>=0;i--)
    {
        snakepos[i+1]= {... snakepos[i] };
    }
    snakepos[0].x+= inputdir.x;
    snakepos[0].y+= inputdir.y; 
}
export function onsnake(position ,ignorehead)
{
    return snakepos.some((segment,index) => 
        {
            if(ignorehead && index === 0) 
            {
                return false;
            }
            return segment.x === position.x && segment.y===position.y;
        }
    );
}
export function expandsnake(expand_rate)
{
    for(var i=0;i<expand_rate;i++)
    {
        snakepos.push({... snakepos[(snakepos.length)-1]});
    }
}