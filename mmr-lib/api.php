<?php

require "classes/MMR.php";
require "classes/MMRScore.php";
// If we needed more classes, create an autoloader. For now, fuck it

/**
 * This API is going to be very, very, very simple
 *
 * There are two endpoints, one to calculate someone's MMR and another to calculate someone's MMR Score
 * No fancy routing, just basic, vanilla, PHP :/
 */

class API {

    protected $endpoint;

    protected $response = [];

    public function __construct()
    {
        if (isset($_POST["endpoint"]))
        {
            $this->endpoint = $_POST["endpoint"];
            $this->route();
        }
        else
            $this->error("Please specify and endpoint using POST: 'endpoint'");

    }

    protected function route()
    {
        switch ($this->endpoint)
        {
            case "mmr":
                $this->mmr();
                break;
            case "mmrscore":
                $this->mmrScore();
                break;
            default:
                $this->error("Endpoint could not be determined");
        }
    }

    protected function mmr()
    {
        $mmr = new MMR();
        if (!$mmr->run())
        {
            $this->error($mmr->error);
            return;
        }
    }

    protected function mmrScore()
    {

    }

    protected function error(string $error)
    {
        $this->response["error"] = $error;

        $this->return(400);
    }

    protected function return(int $response = 200)
    {
        // Set headers
        header("Content-Type: application/json");
        // Change response code
        http_response_code($response);

        // Now echo out the JSON response
        echo json_encode($this->response, 128);
    }
}

// Create an instance of API and it should do everything we want it to
new API();