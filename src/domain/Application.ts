export class Application {

    constructor(private _name: string, private _key: string) { }

    public get Name(): string { return this._name; };
    public get Key(): string { return this._key; };
}