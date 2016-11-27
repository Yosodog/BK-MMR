var MMRScore = function(cities, food, gas, munitions, steel, aluminum) {
    this.food = food;
    this.gas = gas;
    this.munitions = munitions;
    this.steel = steel;
    this.aluminum = aluminum;

    // Calculate the nation's MMR
    this.mmr = new MMR(cities);
    this.mmr.calcMMR();

    this.calcMMRScore = function() {
        this.calcFood();
        this.calcGas();
        this.calcMunitions();
        this.calcSteel();
        this.calcAluminum();
        this.addEverything();
    }

    this.calcFood = function() {
        // Calculate how much of MMR has been met
        var percOfMMR = this.food / this.mmr.food;

        // If the value is over 1, just set it to 1
        if (percOfMMR > 1)
            percOfMMR = 1;

        // Now weigh it
        this.foodWeight = percOfMMR * 0.05;
    }

    this.calcGas = function() {
        // Calculate how much of MMR has been met
        var percOfMMR = this.gas / this.mmr.gas;

        // If the value is over 1, just set it to 1
        if (percOfMMR > 1)
            percOfMMR = 1;

        // Now weigh it
        this.gasWeight = percOfMMR * 0.3;
    }

    this.calcMunitions = function() {
        // Calculate how much of MMR has been met
        var percOfMMR = this.munitions / this.mmr.munitions;

        // If the value is over 1, just set it to 1
        if (percOfMMR > 1)
            percOfMMR = 1;

        // Now weigh it
        this.munitionsWeight = percOfMMR * 0.25;
    }

    this.calcSteel = function() {
        // Calculate how much of MMR has been met
        var percOfMMR = this.steel / this.mmr.steel;

        // If the value is over 1, just set it to 1
        if (percOfMMR > 1)
            percOfMMR = 1;

        // Now weigh it
        this.steelWeight = percOfMMR * 0.3;
    }

    this.calcAluminum = function() {
        // Calculate how much of MMR has been met
        var percOfMMR = this.aluminum / this.mmr.aluminum;

        // If the value is over 1, just set it to 1
        if (percOfMMR > 1)
            percOfMMR = 1;

        // Now weigh it
        this.aluminumWeight = percOfMMR * 0.1;
    }

    this.addEverything = function() {
        var mmrScore = (this.foodWeight + this.gasWeight + this.munitionsWeight + this.steelWeight + this.aluminumWeight) * 100;
        this.mmrScore = mmrScore.toFixed(2);
    }
}