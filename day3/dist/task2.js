class Document {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    toJSON() {
        return JSON.stringify({
            title: this.title,
            content: this.content
        });
    }
    fromJSON(data) {
        const parsed = JSON.parse(data);
        this.title = parsed.title;
        this.content = parsed.content;
        return this;
    }
    getDisplayName() {
        return this.title;
    }
    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
    validate() {
        const errors = [];
        if (this.title.trim() == "") {
            errors.push("Title Empty");
        }
        if (this.content.trim() == "") {
            errors.push("Title Empty");
        }
        return {
            valid: errors.length == 0,
            errors
        };
    }
}
const emptyDoc1 = new Document("", "");
console.log(emptyDoc1.validate());
const doc1 = new Document("Doc 1", "Content 1");
console.log(doc1.toJSON());
const doc2 = doc1.fromJSON('{"title":"Doc 2","content":"Content 2"}');
const doc3 = doc1.fromJSON('{"title":"Doc 3","content":"Content 3"}');
doc1.print();
doc2.print();
doc3.print();
const plainObj = {
    toJSON() {
        return "Hello There!";
    },
    fromJSON(data) {
        console.log(data);
        return this;
    }
};
function plainObjFunc(item) {
    item.toJSON();
    const obj = item.fromJSON("Hello there champ!");
    console.log(obj);
}
plainObjFunc(plainObj);
export {};
//# sourceMappingURL=task2.js.map