
class StackMan {
    stack: any[];
    largestVal: string | number;
    constructor() {
        this.stack = [];
        this.largestVal = '';
    }
    push(data: string | number) {
        this.stack.push(data);
        let d = data.toString();
        if (this.largestVal < d)
            this.largestVal = d;
    }
    pop() {
        if (this.stack.length !== 0) return this.stack.pop();
        else throw new Error('Stack is empty!');
    }
    max() {
        if (this.stack.length === 0) throw new Error('Stack is empty!');
        else return this.largestVal;
    }
    stackSize() {
        if (this.stack.length === 0) throw new Error("Stack is Empty!");
        else return this.stack.length;
    }
}


let stackMan: StackMan = new StackMan();
stackMan.push(1);
stackMan.push(2);
stackMan.push('yo');
stackMan.push(4);
stackMan.push(5);
stackMan.pop();

console.log(stackMan.max());
console.log(stackMan.stackSize());
