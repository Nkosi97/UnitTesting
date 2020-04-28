class Verify {
    constructor(number, msg) {
        this.number = number;
        this.msg = msg

    }
    getNumber() {
        return this.number;
    }

    getText() {

        return this.msg;
    }


    notification() {

        console.log(`Hello this number ${this.getNumber()} is succefully ${this.getText()}`)
        return (`Hello this number ${this.getNumber()} is succefully ${this.getText()}`)
    }
}

var user = new Verify('0815523468', "registerd");

user.notification();
