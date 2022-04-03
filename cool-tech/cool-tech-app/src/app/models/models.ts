export interface Base {
    // _id: string;
    // created_at: string;
    // updatedAt: string;
    // __v: string;
}

export interface User extends Base {
    [x: string]: any;
    username: String;
    email: String;
    password: String;
    phone: String;
    isAdmin: boolean;
    requests: String[];
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
    imageUrl: String;
    description: String;
}

export interface Project extends Base {

    title: String;
    imageUrl: String;
    description: String;
}

export interface RequestI extends Base {

    title: String;
    city: String;
    adress: String;
    issue: String;
    owner: String;

}
