
export interface User {
    username: String;
    email: String;
    password: String;
    phone: String;
    isAdmin: boolean;
    requests: String[];
}

export interface Device {

    model: String;
    brand: String;
    class: String;
    price: String;
    imageUrl: String;
    description: String;
}

export interface Service {

    title: String;
    imageUrl: String;
    description: String;
}
export interface Project {

    title: String;
    imageUrl: String;
    description: String;
}
export interface Request {

    title: String;
    city: String;
    adress: String;
    issue: String;
    user: String;

}
