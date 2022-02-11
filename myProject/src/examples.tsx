// 1 Работа с простыми типами

type ConcatType = (a: string, b: string) => string;

const concat: ConcatType = (a, b) => {
  return a.concat(b);
};

// 2 Работа с интерфейсами

type withDataType = {
  howIDoIt: string;
  simeArray: Array<string | number>;
};

interface IMyHometask {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData: Array<withDataType>;
}

const MyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

//3 Типизация функций, используя Generic

interface MyArray<T> {
  [N: number]: T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: MyArray<T>
    ) => T
  ): T;
  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
}

const arr: MyArray<number> = [1, 2, 3, 4, 5];
arr.reduce((sum, current) => sum + current);

// 4 Работа с MappedTypes

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
};

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: "win",
  },
};

//5 Работа с Generic, Mapped Types, Type inference №1

//6  Работа с Generic, Mapped Types, Type inference №2

type TGetJSXProps<E extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[E];

const props: TGetJSXProps<"div"> = {
  // some: "1233", // throw error потому что не содержится в атрибутах div
  className: "handler", // не выкидывает ошибку так как валидно для div элемента
};
