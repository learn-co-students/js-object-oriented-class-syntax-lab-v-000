class BoardMember {
  constructor(n, h, t) {
    this.name = n;
    this.homeState = h;
    this.training = t;
  }

  veto() {
    return "No, I must disagree";
  }

  approve() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people."
  }

  releasePressStatement() {
    return "You will see great things from Scuber."
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}

class Ceo extends BoardMember {
  hireEmployee() {
    return "Welcome aboard!";
  }
}
