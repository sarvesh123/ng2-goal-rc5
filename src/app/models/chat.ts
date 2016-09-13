export class Chat {
    constructor(
        public sender = {
            name: null,
            id: null    
        },
        public message: string,
        public receiver = {
            name: null,
            id: null    
        }
    ){}
}