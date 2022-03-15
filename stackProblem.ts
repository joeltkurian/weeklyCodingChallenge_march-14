

class StackMan {
    stack: any[];
    largestVal: any;
    constructor() {
        this.stack = [];
        this.largestVal = '';
    }
    push(data: any) {
        this.stack.push(data);
        if (this.largestVal < data)
            this.largestVal = data;
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




