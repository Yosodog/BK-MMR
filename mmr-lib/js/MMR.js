var MMR = function(cities) {
    this.cities = cities;

    this.calcMMR = function() {
        // Call all the methods to calculate MMR
        this.calcFood();
        this.calcGas();
        this.calcMunitions();
        this.calcSteel();
        this.calcAluminum();
        this.calcMoney();
        this.calcTanks();
        this.calcSoldiers();
        this.calcShips();
        this.calcAircraft();
        this.calcMissiles();
        this.calcSpies();
    };

    this.calcFood = function() {
        if (this.cities < 3)
            this.food = 0;
        else if (this.cities < 8)
            this.food = cities * 3000;
        else
            this.food = cities * 5000;
    };

    this.calcGas = function() {
        if (this.cities < 3)
            this.gas = 0;
        else if (this.cities < 8)
            this.gas = cities * 1500;
        else
            this.gas = cities * 2500;
    };

    this.calcMunitions = function() {
        if (this.cities < 3)
            this.munitions = 0;
        else if (this.cities < 8)
            this.munitions = cities * 2000;
        else
            this.munitions = cities * 2500;
    };

    this.calcSteel = function() {
        if (this.cities < 3)
            this.steel = 0;
        else if (this.cities < 8)
            this.steel = cities * 2000;
        else
            this.steel = cities * 2700;
    };

    this.calcAluminum = function() {
        if (this.cities < 3)
            this.aluminum = 0;
        else if (this.cities < 8)
            this.aluminum = cities * 660;
        else
            this.aluminum = cities * 760;
    };

    this.calcMoney = function() {
        if (this.cities < 3)
            this.money = 0;
        else if (this.cities < 5)
            this.money = cities * 1200000;
        else if (this.cities < 9)
            this.money = cities *1500000;
        else
            this.money = cities * 1700000;
    };

    this.calcTanks = function() {
        // This should always be run BEFORE calcSoldiers()
        if (this.cities < 3)
            this.tanks = cities * 75;
        else if (this.cities < 8)
            this.tanks = cities * 150;
        else
            this.tanks = cities * 750;
    };

    this.calcSoldiers = function() {
        if (this.cities < 6)
            this.soldiers = cities * 6000;
        else
            this.soldiers = this.tanks * 0.84;
    };

    this.calcAircraft = function() {
        if (this.cities < 3)
            this.aircraft = cities * 5;
        else if (this.cities < 5)
            this.aircraft = cities * 24;
        else
            this.aircraft = cities * 54;
    };

    this.calcShips = function() {
        this.ships = 0;
    };

    this.calcMissiles = function() {
        this.missiles = 0;
    };

    this.calcSpies = function() {
        if (this.cities < 3)
            this.spies = 0;
        else if (this.cities < 8)
            this.spies = 25;
        else
            this.spies = 50;
    }
};