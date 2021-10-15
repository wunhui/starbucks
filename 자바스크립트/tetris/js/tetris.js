const playground = document.querySelector(".playgound > ul");

const GAME_ROWS = 20;
const GAME_GOLS = 10;

let scroe = 0;
let doration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree: [
        [[0,0],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]
}

const movingItem = {
    type = "",
    direction: 0,
    top: 0,
    left: 0,
};
function init() {
for(let i=0; i < GAME_ROWS; i++) {
    prependNewLine()
    }
}


function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<10; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul)
    playground.prepend(li)
}
