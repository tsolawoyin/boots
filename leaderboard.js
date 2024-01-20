const leaderBoard = [
    {
        posn: 1,
        name: "Seun",
        chm: 92.5,
        bio: 0,
        eng: 0, 
        calcScore() {
            return this.chm + this.bio + this.eng; // makes sense...
        }
    },
    {
        posn: 2,
        name: "Ayodeji",
        chm: 90,
        bio: 0,
        eng: 0, 
        calcScore() {
            return this.chm + this.bio + this.eng; // makes sense...
        }
    },
    {
        posn: 4,
        name: "Victoria",
        chm: 30,
        bio: 0,
        eng: 0, 
        calcScore() {
            return this.chm + this.bio + this.eng; // makes sense...
        }
    },
    {
        posn: 3,
        name: "Tosin",
        chm: 40,
        bio: 0,
        eng: 0, 
        calcScore() {
            return this.chm + this.bio + this.eng; // makes sense...
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
                <td class="col chm">${el.chm}</td>
                <td class="col eng">${el.eng}</td>
                <td class="col bio">${el.bio}</td>
                <td class="col total">${el.calcScore()}</td>
            </tr>`
    }
} 