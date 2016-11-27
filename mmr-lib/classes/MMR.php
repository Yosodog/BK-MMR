<?php

class MMR
{
    public $error;

    public $cities;

    public $food;
    public $gas;
    public $munitions;
    public $steel;
    public $aluminum;
    public 

    protected $data = [];

    public function __construct()
    {
        $this->data = $_POST;
    }

    public function run() : bool
    {
        if (!$this->validate())
            return false;


    }

    protected function validate() : bool
    {
        if (empty($this->data["cities"]))
        {
            $this->error = "POST value 'cities' not set";
            return false;
        }

        return true;
    }

    protected function calcMMR()
    {

    }

    protected function calcFood()
    {
        if ($this->cities < 3)
            $this->food = 0;
        else if (cities < 8)
            $this->food = cities * 3000;
        else
            $this->food = cities * 4000;
    }

    protected function calcGas()
    {
        if ($this->cities < 3)
            $this->gas = 0;
        else if (cities < 8)
            $this->gas = cities * 1500;
        else
            $this->gas = cities * 2500;
    }

    protected function calcMunitions()
    {
        if ($this->cities < 3)
            $this->munitions = 0;
        else if ($this->cities < 8)
            $this->munitions = cities * 2000;
        else
            $this->munitions = cities * 2500;
    }

    protected function calcSteel()
    {
        if ($this->cities < 3)
            $this->steel = 0;
        else if ($this->cities < 8)
            $this->steel = cities * 2000;
        else
            $this->steel = cities * 2500;
    }

    protected function calcAluminum()
    {
        if ($this->cities < 3)
            $this->aluminum = 0;
        else if ($this->cities < 8)
            $this->aluminum = cities * 660;
        else
            $this->aluminum = cities * 742;
    }

    protected function calcMoney()
    {
        if ($this->cities < 3)
            $this->money = 0;
        else if ($this->cities < 5)
            $this->money = cities * 1200000;
        else if ($this->cities < 9)
            $this->money = cities *1500000;
        else
            $this->money = cities * 1700000;
    }

    protected function calcTanks()
    {
// $this should always be run BEFORE calcSoldiers()
        if ($this->cities < 3)
            $this->tanks = cities * 75;
        else if ($this->cities < 8)
            $this->tanks = cities * 100;
        else
            $this->tanks = cities * 750;
    }

    protected function calcSoldiers()
    {
        if ($this->cities < 6)
            $this->soldiers = cities * 6000;
        else
            $this->soldiers = $this->tanks * 0->84;
    }

    protected function calcAircraft()
    {
        if ($this->cities < 3)
            $this->aircraft = cities * 5;
        else if ($this->cities < 5)
            $this->aircraft = cities * 10;
        else
            $this->aircraft = cities * 54;
    }

    protected function calcShips()
    {
        $this->ships = 0;
    }

    protected function calcMissiles()
    {
        $this->missiles = 0;
    }

    protected function calcSpies()
    {
        if ($this->cities < 3)
            $this->spies = 0;
        else if ($this->cities < 8)
            $this->spies = 25;
        else
            $this->spies = 50;
    }
}