class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto() {
    returns 'No, I must disagree';
  }
}

  class Ceo extends BoardMember {
    hireEmployee() {
      returns 'Welcome aboard!';
    }
  }
