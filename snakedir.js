var lastpos = { x:0 , y:0 };
var pos = { x:0 , y:0 };
window.addEventListener("keydown", e => 
{
    switch(e.key)
    {
        case 'ArrowUp':
        {
            if(lastpos.x != 0)return;
            pos = { x:-1 , y:0 };
        }break;
        case 'ArrowDown':
        {
            if(lastpos.x != 0)return;
            pos = { x:1 , y:0 };
        }break;
        case 'ArrowLeft':
        {
            if(lastpos.y != 0)return;
            pos = { x:0 , y:-1 };
        }break;
        case 'ArrowRight':
        {
            if(lastpos.y != 0)return;
            pos = { x:0 , y:1 };
        }break;
    }
})
export function inputdirection()
{
    lastpos=pos;
    return pos;
}