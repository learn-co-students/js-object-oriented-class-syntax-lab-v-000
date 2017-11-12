class BoardMember {
    public name: string;
    public homeState: string;
    public training: string;

    constructor(name: string, homeState: string, training: string) {
        this.name = name;
        this.homeState = homeState;
        this.training = training;
    }

    public veto(): string {
        return "No, I must disagree";
    }
    public approve(): string {
        return "You can do that!";
    }
    public doCharity(): string {
        return "I like to help people.";
    }
    public releasePressStatement(): string {
        return "You will see great things from Scuber.";
    }
    public sayHi(): string {
        return `Hi, my name is ${this.name}. I am from ${this
            .homeState}, and I was trained in ${this.training}.`;
    }
}

class Ceo extends BoardMember {
    public hireEmployee(): string {
        return "Welcome aboard!";
    }
}
