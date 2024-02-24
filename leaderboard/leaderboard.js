
const leaderBoard= [
    {
        posn: 2,
        name: "Seun",
        chm: [87.5,45,100,0,45,37.5,75,45,45,10,23,32.5,67.5,50,25,32.5,17.5,57.5,47.5,92.5], // an object will help me track their progress in each topic
        bio: [94.44,80.56,0],
        eng: [52.5,65.00,100,80,55,100,105,100,2.50,-2.50,100,30,95,72.5,-12.5,20], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 3,
        name: "Ayodeji",
        chm: [45,90,22.5,10,50,65,57.5,60,-5.0,31,42.5,62,5,27.5,22.5,70,22.5,72.5,90,62.5],
        bio: [88.9,88.9],
        eng: [60,60,52.5,67,52.5,30,75,80,15,10,40,30,0,52.5,5,10], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 4,
        name: "Victoria",
        chm: [40,70,95,82.5,72.5,55,42.5,8,40,82.5,30],
        bio: [0],
        eng: [55,50,45,60,35,90,52.5,-5.0,0], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 1,
        name: "Tosin",
        chm: [60,85,85,32.5,80,52.5,67.5,50,60,50,23,65,90,55,45,50,17.5,90,40,67.5],
        bio: [44.44,100],
        eng: [95,100,95,85,75,100,115,100,35,65,100,95,62.5,72.5,55,32.5],
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
]

for (let e of leaderBoard) {
    console.log(e.name, e.eng.length) // making sense
}

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