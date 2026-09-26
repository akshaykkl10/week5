
interface Serilizable {
    toJSON(): string;
    fromJSON(data:string): this
}

interface Printable {
    print(): void;
    getDisplayName(): string;
}

interface Validatable {
    validate(): ValidationResult
}

interface ValidationResult {
    valid: boolean;
    errors: string[];
}

class Document implements Serilizable, Printable, Validatable {
    constructor(public title: string, public content: string){}
    toJSON(): string {
        return JSON.stringify({
            title:this.title,
            content:this.content
        })
    }
    fromJSON(data: string): this {
        const parsed = JSON.parse(data)
        this.title = parsed.title
        this.content = parsed.content
        return this
    }
    getDisplayName(): string {
        return this.title
    }
    print(): void {
        console.log(`Title: ${this.title}`)
        console.log(`Content: ${this.content}`)
    }
    validate(): ValidationResult {
        const errors: string[] = []
        if (this.title.trim() == ""){
            errors.push("Title Empty")
        }
        if (this.content.trim() == ""){
            errors.push("Title Empty")
        }
        return {
            valid: errors.length == 0,
            errors
        }
    }
}

const emptyDoc1 = new Document("", "")
console.log(emptyDoc1.validate())
const doc1 = new Document("Doc 1", "Content 1")
console.log(doc1.toJSON())
const doc2 = doc1.fromJSON('{"title":"Doc 2","content":"Content 2"}')
const doc3 = doc1.fromJSON('{"title":"Doc 3","content":"Content 3"}')

doc1.print()
doc2.print()
doc3.print()

const plainObj = {
    toJSON(): string {
        return "Hello There!";
    },

    fromJSON(data: string) {
        console.log(data);
        return this;
    }
}

function plainObjFunc(item: Serilizable): void{
    item.toJSON()
    const obj = item.fromJSON("Hello there champ!")
    console.log(obj)
}
plainObjFunc(plainObj)