class App {
  constructor(){
    this.length = 0,
    this.minimum = 10,
    this.rate = 10,
    this.gaps = 0
  }

  build(str){
    const array = str.split(" ");
    this.checkLength(array);
    this.changeRate(this.length, this.rate);
    return array.join(" ");
  }

  changeRate(len, rate){
    this.gaps = Math.ceil(len / rate);
  }

  checkLength(array){
    if(array.length < this.minimum){
      throw new Error;
    }
    else {
      this.length = array.length;
    }
  }
}

module.exports = App;