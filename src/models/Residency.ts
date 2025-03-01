export class Residency {
    title: string;
    description: string;
    location: string;
    price: number;
    owner: string;
    isAvailable: boolean;
    facilities: [
        {
            bedrooms: number,
            bathrooms: number,
            area: number
        }
    ];
    images: string[];
    bookings: string[];
    inquiries: string[];

    constructor(title: string, description: string, location: string, price: number, owner: string, isAvailable: boolean, facilities: [{ bedrooms: number, bathrooms: number, area: number }], images: string[], bookings: string[], inquiries: string[]) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.owner = owner;
        this.isAvailable = isAvailable;
        this.facilities = facilities;
        this.images = images;
        this.bookings = bookings;
        this.inquiries = inquiries;
    }
}