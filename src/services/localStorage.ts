import {isNull} from "util";

export class LocalStorage {
    public get(id: string, featureName: string): any {
        return this.getFromStore(featureName).filter((item: any) => item.id === id)[0];
    }

    public getAll(featureName: string): any {
        return this.getFromStore(featureName);
    }

    private getFromStore( featureName: string): any {
        return this.parse(localStorage.getItem(featureName));
    }

    private parse(json: string | null): any {
        return isNull(json) ? {} : JSON.parse(json);
    }


}