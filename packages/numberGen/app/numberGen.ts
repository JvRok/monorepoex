export class NumberGen { 
    floor: number;
    maximum: number;
    constructor() {
        this.floor = 0;
        this.maximum = 1000; 
    }

    public getNumber(): number {
        return this.floor + Math.random() * this.maximum;
    }

}