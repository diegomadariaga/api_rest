export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    isAdmin: boolean;
    created: Date;
    updated: Date;
    constructor(id: number, username: string, password: string, email: string, firstname: string, lastname: string, isAdmin: boolean, created: Date, updated: Date) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
        this.created = created;
        this.updated = updated;
    } 
    set setId(id: number) {
        this.id = id;
    }
    set setUsername(username: string) {
        this.username = username;
    }
    set setPassword(password: string) {
        this.password = password;
    }
    set setEmail(email: string) {
        this.email = email;
    }
    set setFirstname(firstname: string) {
        this.firstname = firstname;
    }
    set setLastname(lastname: string) {
        this.lastname = lastname;
    }
    set setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }
    set setCreated(created: Date) {
        this.created = created;
    }
    set setUpdated(updated: Date) {
        this.updated = updated;
    }
    get getId(): number {
        return this.id;
    }
    get getUsername(): string {
        return this.username;
    }
    get getPassword(): string {
        return this.password;
    }
    get getEmail(): string {
        return this.email;
    }
    get getFirstname(): string {
        return this.firstname;
    }
    get getLastname(): string {
        return this.lastname;
    }
    get getIsAdmin(): boolean {
        return this.isAdmin;
    }
    get getCreated(): Date {
        return this.created;
    }
    get getUpdated(): Date {
        return this.updated;
    }
}