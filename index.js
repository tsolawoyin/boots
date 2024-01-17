// declarations
const tableContentsEl = document.querySelector("table-of-contents");
const tbodyEl = document.querySelector("#tbody")



// simple function that will help to append stuff
// structure of content is 

makeTable(tableContents, tbodyEl);

// let i = [
//     {
//         date: "20-01-2024",
//         subject: "chm",
//         topic: "atomic structure",
//         "highest performer": null
//     },
//     {
//         date: "20-01-2024",
//         subject: "eng",
//         topic: "synonyms I",
//         "highest performer": null
//     },
// ]
// el is tbody element
function makeTable(contents, el) {
    for (let c of contents) {
        if (c.score) {
            el.innerHTML +=
            `<tr class="table-success">
                <th scope="row">${c.date}</th>
                <td>${c.subject}</td>
                <td>${c.topic}</td>
                <td>${c["highest performer"] ? c["highest performer"] : "pending"}</td>
                <td>${c.score ? c.score : ""}</td>
            </tr>` 
        } else {
            el.innerHTML += 
            `<tr>
                <th scope="row">${c.date}</th>
                <td>${c.subject}</td>
                <td>${c.topic}</td>
                <td>${c["highest performer"] ? c["highest performer"] : "pending"}</td>
                <td>${c.score ? c.score : ""}</td>
            </tr>`
        }
    }

    return "done"
}
// makeTable(i, tbodyEl)

