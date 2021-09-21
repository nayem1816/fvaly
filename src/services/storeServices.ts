import request from 'services/httpService';

class StoreService {
    getStores(): Promise<any> {
        return request.get('/store');
    }

    getStoreByID(id: string): Promise<any> {
        return request.get(`/store/${id}`);
    }

    addStore(body: {}): Promise<any> {
        return request.post(`/store/`, body);
    }

    updateStore(id: string, body: {}): Promise<any> {
        return request.post(`/store/${id}`, body);
    }

    delateStore(id: string): Promise<any> {
        return request.delete(`/store/${id}`);
    }
}

export default new StoreService();
