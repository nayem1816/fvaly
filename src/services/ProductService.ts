import request from 'services/httpService';

class ProductService {
    getProducts(): Promise<any> {
        return request.get('/product');
    }

    getProductByID(id: string): Promise<any> {
        return request.get(`/product/${id}`);
    }

    addProduct(body: {}): Promise<any> {
        return request.post(`/product/`, body);
    }

    updateProduct(id: string, body: {}): Promise<any> {
        return request.post(`/product/${id}`, body);
    }

    delateProduct(id: string): Promise<any> {
        return request.delete(`/product/${id}`);
    }
}

export default new ProductService();
