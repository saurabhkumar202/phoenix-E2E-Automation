
export class ScenarioContext {
    private static map = new Map([]);

    static getMap(){
        return this.map;
    }

    static add(key : any, value:any){
        this.map.set(key, value);
        return this.map;
    }

    static get(key : any){
        return this.map.get(key);
    }

    static delete(key : any) {
            this.map.delete(key);
    }

    static contains(key: any): boolean {
        return this.map.has(key)
    }

    static clearAll(){
        this.map.clear();
    }



}