class BoardMember {
  constructor (name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto() {
    return "No, I must disagree"
  }

  doCharity() {
    return "I like to help people."
  }

  releasePressStatement() {
    return "You will see great things from Scuber."
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }

  approve() {
    return 'You can do that!'
  }
}

class Ceo extends BoardMember {
  hireEmployee() {
    return "Welcome aboard!"
  }
}
