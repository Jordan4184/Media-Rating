class Media {
    constructor(title){
      this._book = Book; 
      this._movie = Movie; 
      this._cd = CD;
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings; 
    }
  
    toggleCheckOutStatus(){
      if(this._isCheckedOut === false){
        return true; 
      } else {
        return false; 
      }
    }
  
    getAverageRating(){
      return this._ratings.reduce((accumulator, currentValue) => {
        return ((accumulator + currentValue)/(this._ratings.length));
      })
    }
    addRating(rating){
      return this._ratings.push(rating);
    }
    set isCheckedOut(newIsCheckedOut){
      this.isCheckedOut = newIsCheckedOut;
    }
  }
  
  
  class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
    super(author, title, pages, isCheckedOut, ratings)
    this._ratings = [];
    this._isCheckedOut = false; 
    }
    get author(){
      return this.author; 
    }
    get title(){
      return this.title;
    }
    get pages(){
      return this.pages;
    }
    get isCheckedOut(){
      return false;
    }
    get ratings(){
      return this.ratings; 
    }
  
    static getAverageRating(){
      ratings.reduce(function ratingSum(accumulator, currentValue){
        return accumulator + currentValue; 
      })
    }
  
  }
  
  
  class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut, ratings){
      super (director, title, runTime, isCheckedOut, ratings)
        this.isCheckedOut === false;
        this._ratings = [];
      }
      get director(){
        return this.director;
      }
      get title(){
        return this.title;
      }
      get runTime(){
        return this.runTime; 
      }
      get isCheckedOut(){
        return this._isCheckedOut;
      }
      get ratings(){
        return this.ratings;
      }
  
      static getAverageRating(){
        ratings.reduce(function avgRating(accumulator, currentValue){
          return accumulator + currentValue;
        })
      }
      static toggleCheckOutStatus(){
        if(isCheckedOut = false){
          return isCheckedOut = true;
        } else {
          return false; 
        }
      }
      static addRating(){ 
        return ratings.push();
      }
  }
  
  
  class CD extends Media {
    constructor(artist, title, isCheckedOut, ratings, songs){
      super(artist, title, isCheckedOut, ratings, songs);
    this.isCheckedOut = false;
    this.ratings = [];
    this.songs = [];
    }
    get artist(){
      return this.artist;
    }
    get title(){
      return this.title;
    }
    get isCheckedOut(){
      return this.isCheckedOut;
    } 
    get ratings(){
      return this.ratings;
    } 
    get songs(){
      return this.songs;
    }
  
    static getAverageRating(){
      ratings.reduce(function ratingSum(accumulator, currentValue){
        return accumulator + currentValue;
        })
      }
  
    static toggleCheckOutStatus(){
      if(isCheckedOut = false){
        return isCheckedOut = true; 
      } else {
        return false; 
      }
    }
  
    static addRating(){
      return ratings.push(); 
    }
  }
  
  
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  console.log(historyOfEverything.toggleCheckOutStatus());
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  
  historyOfEverything.addRating(5)
  
  historyOfEverything.addRating(5)
  
  console.log(historyOfEverything.getAverageRating())
  
  console.log(historyOfEverything.getAverageRating())
  
  
  
  let speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  
  speed.addRating(1); 
  
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  