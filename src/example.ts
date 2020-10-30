// 1. function

type ConCat = (str: string, str1: string) => string;

const concat: ConCat = (str, str1) => {
  return `${str}${str1}`;
};

concat('Hello ', 'World');

// 2. interface
interface MyHometaskFields {
  howIDoIt: string;
  simeArray: Array<string | number>;
}

interface MyHometaskInterface extends MyHometaskFields {
  withData: Array<MyHometaskFields>
}

const MyHometask: MyHometaskInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// 3. Generic
interface MyArrayHomework<T> {
	[N: number]: T;

	reduce<U>(fn: (ac: U, cv: T) => U ): U;
}


