import ApiClient from "./Api-client";

interface Entity{
    id: number
}


class HttpService {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }


    getAll<T>(){
        const controller = new AbortController();
        const request = ApiClient.get<T[]>(this.endpoint, {
                signal: controller.signal,
            });
            return { request,  cancel: () => controller.abort() }
    }

    delete(id: number){
        ApiClient.delete(this.endpoint +"/"+ id)
    }
    create<T>(entity: T){
        ApiClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T){
        return ApiClient.put(this.endpoint+"/" +  entity.id, entity)
}

}


const create = (endpoint: string) => new HttpService(endpoint);

export default create;