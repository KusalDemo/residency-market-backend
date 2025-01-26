export class Booking {
    residency: string;
    user: string;
    startDate: Date;
    endDate: Date;
    total: number;
    status: string;

    constructor(residency: string, user: string, startDate: Date, endDate: Date, total: number, status: string) {
        this.residency = residency;
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
        this.total = total;
        this.status = status;
    }
}