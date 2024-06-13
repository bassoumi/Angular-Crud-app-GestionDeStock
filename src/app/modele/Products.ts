export class Product {
    id?: number ; 
    email: string = '';
    name?: string = '';
    price: number = 0; // Initialisez avec une valeur par défaut
    description?: string = '';
    subject: string = 'Unpublished'; // Initialisez avec une valeur par défaut

    constructor(email: string, name: string, price: number, description: string, subject: string) {
        this.email = email;
        this.name = name;
        this.price = price;
        this.description = description;
        this.subject = subject;
    }

}