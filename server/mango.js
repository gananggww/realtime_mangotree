var cron = require('node-cron');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyDiRVvtRaGvuBQ4TE6Dv7rkOZNzB5MD4fM",
  authDomain: "firebash-pertama.firebaseapp.com",
  databaseURL: "https://firebash-pertama.firebaseio.com",
  projectId: "firebash-pertama",
  storageBucket: "firebash-pertama.appspot.com",
  messagingSenderId: "391415648090"
};

  firebase.initializeApp(config);

  var db = firebase.database()

  class FruitTree {
    constructor() {
      this._age = 0;
      this._height = 0;
      this._fruits = [];
      this.totalFruit = 0;
      this.healthyStatus = true;
      this.maxHeight = 10;
      this.maxAge = 20;
      this._harvested = '';
    }

    getAge() {
      return this._age;
    }
    getHeight() {
      return this._height;
    }
    getFruits() {
      return this._fruits;
    }
    getHealtyStatus() {
      return this.healthyStatus;
    }

    grow(maxGrow) {
      this._age++;

      let tumbuh = Math.ceil(Math.random() * (this.maxHeight*1.2)) / 10;
      if(this._age < maxGrow) this._height += tumbuh;
      if(this._age >= maxGrow) this._height = this._height;
      this._height = parseFloat(this._height.toFixed(1));
      if(this._age == this.maxAge) this.healthyStatus = false;

      this.totalFruit += this.produceFruits();
    }

    produceFruits(umurBerbuah) {
      let kapasitasBuah = Math.ceil(Math.random() * 10) ;
      if (this._age >= umurBerbuah){
      for(let i = 0; i < kapasitasBuah; i++) {
        this._fruits[i] = new Fruit();
      }
    }
      return kapasitasBuah;
    }

    harvest() {
      let good = 0,
          bad  = 0;

      for(let i = 0; i < this._fruits.length; i++) {
        if(this._fruits[i].quality == 'good') {
          good++;
        } else bad++;
      }
      this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
      this._fruits = [];
    }
  }

  class Fruit {
    constructor() {
      this.quality = this.qualitySetter();
    }

    qualitySetter() {
      let random = Math.round(Math.random());
      return (random == 1 ) ? 'good': 'false';
    }
  }

  class MangoTree extends FruitTree{
    constructor(name) {
      super();
      this.name = name
      this.maxHeight = 25;
      this.maxAge = 10;
    }
  }
  class Mango extends Fruit{
    constructor () {
      super();
    }
  }

  let mangoTree = new MangoTree('mango')

  db.ref('tree').set(mangoTree)

  let grow = cron.schedule('*/5 * * * * *', function () {
    if (mangoTree.healthyStatus !== false) {
      mangoTree.grow(1000);
      mangoTree.produceFruits(5);
      mangoTree.harvest();
      db.ref('tree').set(mangoTree)
      console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${mangoTree.name} harvested = ${mangoTree._harvested}`)
    } else {
      grow.stop()
      console.log('mango tree already dead');
    }
  })
