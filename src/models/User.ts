export class User {
    name: string;
    email: string;
    password: string;
    residencies: string[];
    inquiries: string[];

    constructor(name:string, email:string, password:string, residencies:string[], inquiries:string[]) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.residencies = residencies;
        this.inquiries = inquiries;
    }
}

