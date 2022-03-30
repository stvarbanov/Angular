export interface Base {
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: string;
}
export interface User extends Base {
    username: String;
    email: String;
    password: String;
}

export interface Device extends Base {

    model: String;
    brand: String;
    class: String;
    price: String;
    imageUrl: String;
    description: String;
}

export interface Service extends Base {

    title: String;
    imageURL: String;
    description: String;
}
export interface Project extends Base {

    title: String;
    imageURL: String;
    description: String;
}
export interface Request extends Base {

    title: String;
    city: String;
    adress: String;
    issue: String;
    user: String;

}
