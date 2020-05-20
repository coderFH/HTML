class PurchaseRequest {
    type : number = 0;
    price : number = 0;
    id : number = 0;

    constructor(type : number, price : number,id : number) {
        this.type = type;
        this.price = price;
        this.id = id;
    }
}

export {PurchaseRequest}