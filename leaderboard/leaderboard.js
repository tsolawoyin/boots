
const leaderBoard= [
    {
        posn: 2,
        name: "Seun",
        chm: [10.00,23,32.5,67.5,50,25,32.5,17.5,57.5,47.5,92.5], // an object will help me track their progress in each topic
        bio: [0],
        eng: [2.50,-2.50,100,30,95,72.5,-12.5,20], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 3,
        name: "Ayodeji",
        chm: [-5.0,31,42.5,62,5,27.5,22.5,70,22.5,72.5,90,62.5],
        bio: [0],
        eng: [15,10,40,30,0,52.5,5,10], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 4,
        name: "Victoria",
        chm: [8,40,82.5,30],
        bio: [0],
        eng: [-5.0,0], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 1,
        name: "Tosin",
        chm: [50,23,65,90,55,45,50,17.5,90,40,67.5],
        bio: [0],
        eng: [35,65,100,95,62.5,72.5,55,32.5], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
]

// get the leaderboard element

let leaderBoardEl = document.querySelector("#leaderboard-body");
// load it up....
leaderBoardHelper()

function leaderBoardHelper() {

    const posn = {1: "first", 2: "second", 3: "third", 4: "fourth"}

    leaderBoard.sort((a,b) => a.posn - b.posn); // this will surely sort the stuff for us

    for (let el of leaderBoard) {
        leaderBoardEl.innerHTML += 
            `<tr>
                <td class="col rank" id=${posn[el.posn]}>${el.posn}</td>
                <td class="col name">${el.name}</td>
                <td class="col chm">${el.chm.reduce((a,c) => a+c)}</td>
                <td class="col eng">${el.eng.reduce((a,c) => a+c)}</td>
                <td class="col bio">${el.bio.reduce((a,c) => a+c)}</td>
                <td class="col total">${el.calcScore()}</td>
            </tr>`
    }
} 