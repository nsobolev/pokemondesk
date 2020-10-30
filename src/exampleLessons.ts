// 1. Type

let tsString = 'str';
let tsNumber = 2;

let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);

const result = tsString + tsNumber; // result: string

type StringOrNumber = string | number; // К ним можно относится как переменным для типов

const strOrNumber: StringOrNumber = 0; // Union-Type
const strOrNumber1: StringOrNumber = 2;
const strOrNumber2: StringOrNumber = 'Kirov';

type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];

// 2. Arrays
let tsArr: number[] = [1, 5];
// Он не знает, сколько элементов в массиве, поэтому доступ мы будем иметь к любому
type TsArrUnionT = (number | string);

let tsArrUnion: (number | string)[] = [1, 'str'];
let tsArrUnionTA: TsArrUnionT[] = [1, 'str'];
let tsArrUnionG: Array<TsArrUnionT> = [2, 'str']; // Индентична выше записи

// Массив определенной длины (таплл)
const tsNextArr: [string, number] = ['12', 2];
// tsNextArr[10]; // => Error

// 3. Objects
type TsObj = { 
  name: string, 
  age: number | string, 
  male?: string 
};

interface TsObjI {
  readonly name: string; // не позволяет в дальнейшем менять свойство
  age: number | string;
  male?: string;
}

const tsObj: TsObj = {
  name: 'Nikita',
  age: 26,
}

// Мы не знаем, какой объект вернется с бека - будем использовать индекс - сигнатуру
interface IndexInterface {
  [n: string]: string;
}

// 4. Functions

// Это удобно, если мы добавим новый - то тс быстро найдет файлы, где возникла ошибка
enum MethodEnum {
  add = 'add',
  sub = 'sub'
}

function calculate(method: MethodEnum, first: number, second: number): number {
  switch(method) {
    case MethodEnum.add: return first + second;
    case MethodEnum.sub: return first - second;
  }
}

calculate(MethodEnum.add, 3, 5);

// 4. Type function 
type TypeFn = () => number;
type TypeDefaultFn = () => void; // Если функция ничего не возращает, будет void, а так от возвращаемого значения

const ArrowFunc: TypeDefaultFn = () => 2;

// 5. Generics - возможность создавать компоненты, которые работают не только с одним, а с несколькими типами данных.
// Дженерики и типы данных соотносятся с друг другом, как значения и аргументы функций. 
// Мы хотим сказать, какой тип использовать при их вызове.

//Например, тождественные функции
function identity<T>(value: T): T {
  return value;
}

identity(1); // number
identity('string'); // string

// Тут и нужны дженерики, мы определим при вызове тип. Они позволяют принимать функции значения любого типа.
// Здесь наша функция может принять тип, который будет и аргументом и возвращаемым числом

// Generic Array
const tsArrG: Array<number> = [1, 2, 3, 4];

interface MyArray<T> {
  [n: number]: T;
  map<U>(fn: (el: T) => U): U[]; // Укажем U - дженерик у метода map, мы его не передаем явно. будет определен автоматически TS
}

const tsArrInterface: MyArray<number> = [1, 2, 3];
tsArrInterface.map((el => el + 1));
tsArrInterface.map((el => `${el}` + 1));

// Здесь нам нужен массив любых типов
function getLen<T extends Array<any>>(arr: T): number {
  return arr.length;
}

