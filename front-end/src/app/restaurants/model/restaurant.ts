export class Restaurant {

    _id: number;
    name: string;
    cuisine: string;
    description: string;
    location: string;
    price: number;
    days: Object;
    rating: number;

    constructor(obj? : any){
        this._id = obj && obj._id || null;
    this.name = obj && obj.name || "";
    this.cuisine = obj && obj.cuisine || "";
    this.description = obj && obj.description || "";
    this.location = obj && obj.location || "";
    this.price = obj && obj.price || 0;
    this.days = obj && obj.days || null;
    this.rating = obj && obj.rating || 0;
    }
}