export class User {
    _id!: String;
    name!: String;
    email!: String;
    password!: String;
}

export class Device {
    _id!: String;
    model!: String;
    brand!: String;
    class!: String;
    price!: String;
    description!: String;
}

export class Service {
    _id!: String;
    title!: String;
    imageURL!: String;
    description!: String;
}
export class Project {
    _id!: String;
    title!: String;
    imageURL!: String;
    description!: String;
}
export class Request {
    _id!: String;
    title!: String;
    city!: String;
    adress!: String;
    issue!: String;
    user!: String;
    
}
