
class Subject {
    constructor (title, topics) {
        this.title = title;
        this.topic = topics;
    }
    // methods come later...
}

const chemistry = new Subject("Chemistry", ["atomic structure", "chemical bonding"])
const biology = new Subject("Biology", ["cell", "skeletal system"])
const english = new Subject("English", ["antonym", "synonym"])

const available = [english, biology, chemistry]

export { available }