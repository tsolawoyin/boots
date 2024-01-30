const leaderBoard = [
    {
        posn: 3,
        name: "Seun",
        chm: [17.5,57.5,47.5,92.5], // an object will help me track their progress in each topic
        bio: [0],
        eng: [-12.5,20], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 2,
        name: "Ayodeji",
        chm: [22.5,72.5,90,62.5],
        bio: [0],
        eng: [5,10], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 4,
        name: "Victoria",
        chm: [30],
        bio: [0],
        eng: [0], 
        calcScore() {
            return this.chm.reduce((a, e ) => a + e) + this.bio.reduce((a,e) => a + e) + this.eng.reduce((a,c) => a + c); // makes sense...
        }
    },
    {
        posn: 1,
        name: "Tosin",
        chm: [17.5,90,40,67.5],
        bio: [0],
        eng: [55,32.5], 
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