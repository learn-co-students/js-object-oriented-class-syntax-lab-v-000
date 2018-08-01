// Create boardMember class
// Properties name, homeState, training
// veto() return string "No, I must disagree"
// approve() return string "You can do that!"
// doCharity() return string "I like to help people."
// releasePressStatement() return string "You will see great things from Scuber."
// sayHi() return string "Hi, my name is ${this.name}. I am from ${this.homeState}, an I was trained in ${this.training}."
// extend Ceo
// inherits sayHello method from BoardMember
// Add new method hireEmployee returns string "Welcome aboard!"
class BoardMember {
  constructor(name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  veto() {
    return "No, I must disagree"
  }
  approve() {
    return "You can do that!"
  }
  doCharity(){
    return "I like to help people."
  }
  releasePressStatement(){
    return "You will see great things from Scuber."
  }
  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

class Ceo extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!"
  }
}
