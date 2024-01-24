
export type todo = {
    Todo_id: number,
    Todo_name: string,
    Todo_description: string,
    Todo_time: Date,
    number_of_love: number,
}

class Todo {
    Todo_id: number;
    Todo_name: string;
    Todo_description: string;
    Todo_time: Date;
    number_of_love: number;
    constructor(Todo_id: number, Todo_name: string, Todo_description: string, Todo_time: Date, number_of_love: number) {
        this.Todo_id = Todo_id;
        this.Todo_name = Todo_name;
        this.Todo_description = Todo_description;
        this.Todo_time = Todo_time;
        this.number_of_love = number_of_love;
    }

    check = (): boolean => {
        if(typeof(this.Todo_id) !== "number"){
            console.log(typeof(this.Todo_id));
            return false;
        }
        if(typeof(this.Todo_name) !== "string"){
            console.log(typeof(this.Todo_name));
            return false;
        }
        if(typeof(this.Todo_description) !== "string"){
            console.log(typeof(this.Todo_description));
            return false;
        }
        if(typeof(this.Todo_time) !== "object"){
            console.log(typeof(this.Todo_time));
            return false;
        }
        if(typeof(this.number_of_love) !== "number"){
            console.log(typeof(this.number_of_love));
            return false;
        }
        return true;
    }
}

export default Todo;