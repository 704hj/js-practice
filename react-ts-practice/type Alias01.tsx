import React from "react";

//기본 타입으로 선언한 경우
const a: string = 'Josh';

//타입 별칭으로 선언한 경우
type MyName = string;
const b: MyName  = 'Josh';

type c = number;
const d: c = 3;