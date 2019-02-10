import {LocalStorage} from "./localStorage";

enum apiType {
    localstorage = 'localstorage',
    server = 'server'
}

export class Request {
    private readonly apiType: apiType = apiType.localstorage;
    private readonly featureName: string;

    constructor(featureName: string) {
        this.featureName = featureName;
    }

    public get(id: string) {
        return this.makeGetRequest(id);
    }

    public getAll() {
        return this.makeGetAllRequest();
    }

    private makeGetRequest(data:any):any {
        switch (this.apiType) {
            case apiType.localstorage:
            default:
                const localStorageRequest = new LocalStorage();
                return localStorageRequest.get(data.id, this.featureName);

        }
    }

    private makeGetAllRequest():any {
        switch (this.apiType) {
            case apiType.localstorage:
            default:
                const localStorageRequest = new LocalStorage();
                return localStorageRequest.getAll( this.featureName);

        }
    }
}