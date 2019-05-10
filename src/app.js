class App {
  constructor(text){
    this.text = text.split(" "),
    this.exercise = null
  }

  build(){
    if(this.text.length !== 10){
      throw new Error;
    }
    const rand = Math.floor(Math.random(0, this.text.length) * 10);
    const gapped = this.text.slice(0)
    gapped[rand] = '<gap>';
    this.exercise = gapped.join(" ");
  }

}

module.exports = App;