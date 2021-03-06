import restify from 'restify-clients';

class CardsService {

    constructor() {
        this._client = restify.createJsonClient({
            url:'http://localhost:3001',
        });
    }

    authorize(card) {
        return new Promise((resolve, reject) => {
            this._client.post('/cartoes/autoriza', card, (err, req, res, obj) => {
                err ? reject(err) : resolve(obj);
            });
        })
    }
}

export default CardsService;
