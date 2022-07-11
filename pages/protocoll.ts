export class Protocoll {

    private content: Array<Detail>;

    constructor(content: Array<Detail>) {
        this.content = content
    }

    public getContent(): Array<Detail> {
        return this.content
    }
}
export class Detail {
    name: string;
    text: string;

    constructor(name: string, text: string) {
        this.name = name;
        this.text = text;
    }

    toString(): string {
        return this.name + ": " + this.text;
    }

    string(): string {
        return this.name + ": " + this.text;
    }
}