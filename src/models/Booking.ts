export class Booking {
    residency: string;
    user: string;
    startDate: Date;
    endDate: Date;

    constructor(residency: string, user: string, startDate: Date, endDate: Date) {
        this.residency = residency;
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}