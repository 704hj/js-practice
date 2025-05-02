import React from "react";
//옵션 속성을 알아보자.

//interface 인터페이스_이름{
//     속성?: 타입;
// } 

interface CraftBeer {
    name: string;
    hop?: number;  //옵션 속성으로 선언언
  }
  
  let myBeer = {
    name: 'Saporo'
  };
  function brewBeer(beer: CraftBeer) {
    console.log(beer.name); // Saporo
  }
  brewBeer(myBeer);