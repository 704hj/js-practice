import React from "react";

interface CraftBeer {
    name: string;
    hop?: number;
  }
  
  let myBeer = {
    name: 'Saporo'
  };
  function brewBeer(beer: CraftBeer) {
    //console.log(beer.brewery); // Error: Property 'brewery' does not exist on type 'Beer'
    console.log(beer.name);
  }
  brewBeer(myBeer);