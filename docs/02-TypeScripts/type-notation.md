---
sidebar_position: 1
---

해당 문서는 [The essentials of TypeScript](https://exploringjs.com/tackling-ts/ch_typescript-essentials.html)를 참고하고 번역한 문서입니다.

자세한 내용은 위 링크를 참고해 주세요.

## 1. What you'll learn

---

이 글을 읽고 나면, 여러분은 아래의 코드를 이해할 수 있을 것입니다.

```tsx
interface Array<T> {
	concat(...items: Array<T[] | T>): T[];
	reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U;
	// ···
}
```

만약 이게 무슨 코드인가 싶다고 해도 이해합니다. 하지만 이 형식은 비교적 배우기 쉽습니다. 그리고 일단 이해하면 코드가 어떻게 동작하는지 즉각적이고 정확한 종합적인 요약을 제공합니다. 그럼 영어로 된 긴 설명을 읽을 필요가 없죠.

## 2. Specifying the comprehensiveness of type checking(타입 체크의 범위 구체화)

---

타입스크립트 컴파일러는 여러가지 방법으로 구성할 수 있습니다. 하나의 중요한 옵션 그롭은 컴파일러가 타입스크립트 코드를 얼마나 철저하게 검사할지 제어합니다. 최대 설정은 `--strict`를 활성화 하는 것인데, 저는 항상 이렇게 사용할 것을 추천합니다. 이는 프로그램을 약간 쓰기 힘들게 만들지만, 우리는 또한 정적 타입 체크라는 엄청난 이익을 얻게 됩니다.

> 이것이 지금 당신이 알아야 할 `--strict`에 대한 전부입니다.  
> 만약 이에 대한 좀 더 디테일한 설명을 원한다면 읽어보세요.

`--strict`를 true로 설정하면, 밑의 모든 옵션이 true로 따라옵니다.

- `--noImplicitAny`: 타입스크립트가 타입을 유추할 수 없는 경우, 이 유형을 지정해야 합니다. 즉, any 타입으로 암시한 표현식과 선언에 오류를 발생시킵니다.
- `--noImplicitThis`: any 타입으로 암시한 this 표현식에 오류를 보고합니다.
- `--alwaysStrict`: 가능하면 자바스크립트의 strict mode를 사용하게 합니다. 즉, 각 소스파일에 대해 strict mode에서 파싱하고 각 파일에 대해 use strict를 내보냅니다.
- `--strictNullChecks`: null은 어떤 유형에도 속하지 않으며(null이외의 자체 유형) 허용 가능한 값이면 명시적으로 언급되어야 합니다.
- `--strictFunctionTypes`: 함수 타입에 대해 더 강력하게 검사합니다.
- `--strictPropertyInitialization`: 프로퍼티가 undefined값을 가질 수 없으면, 생성자에서 이걸 초기화해야만 합니다. 반대로 말하면 undefined가 아닌 클래스 프로퍼티가 생성자에서 초기화 되도록 합니다. 이 옵션을 적용하려면 `--strictNullChecks`가 활성화되어야 합니다.

우리가 npm 패키지나 웹 앱을 타입스크립로 만들 때 이 책의 뒷부분에서 더 많은 컴파일러 옵션들을 볼 수 있을 것입니다. 타입스크립트 핸드북의 "[Compiler Option](https://www.typescriptlang.org/docs/handbook/compiler-options.html)"을 참조하세요. 여기에 종합적인 문서가 있습니다.

## 3. Types in TypeScript

---

타입은 단순히 값의 집합입니다. 자바스크립트 언어(타입스크립트 말고)는 오직 여덟개의 타입이 있습니다.

1.  `Undefined`: undefined라는 유일한 요소를 가집니다.
2.  `Null`: null이라는 유일한 요소를 가집니다.
3.  `Boolean`: false와 true라는 두 원소를 가집니다.
4.  `Number`: 모든 숫자들의 집합니다.
5.  `BigInt`: 더욱 자세한 정수들(소수와 같은)의 집합니다.
6.  `String`: 모든 문자열들의 집합니다.
7.  `Symbol`: 모든 심볼들의 집합입니다.
8.  `Object`: 모든 객체(함수와 배열을 포함한)들의 집합입니다.

이 모든 타입은 동적이고 우리는 이 타입들을 런타임에서 사용할 수 있습니다.

타입스크립트는 자바스크립트에 정적 타입을 추가합니다. 이 정적 타입은 소스 코드를 컴파일링하거나 타입-체크를 할 때에만 존재합니다. 각 저장 위치(변수, 프로퍼티 등)에는 이 동적인 값을 예측하는 정적 타입이 있습니다. 타입-체크를 통해 이 예측이 옳음을 보장할 수 있습니다.

그리고 코드를 실행하지 않고 정적으로 체크할 수 있는 것이 많습니다. 예를 들어, 만약 함수 `toString(num)`의 `num`이라는 파라미터가 number라는 정적 타입을 가질 경우, 함수는 `toString('abc')`는 이상하다고 말할 것입니다. 인수 abc는 잘못된 정적 타입이기 때문이죠.

## 4. Type annotations

---

```tsx
function toString(num: number): string {
	return String(num);
}
```

이 코드에서는 아까 함수 선언문에서는 두 가지 타입의 주석(: number와 같은 것을 말함)을 찾아 볼 수 있습니다.  
`: number`와 같은 것을 앞으로 밑에서 annotation이라고 명명하겠습니다.

- num 파라미터: number 타입을 따릅니다.
- `toString()`의 결과 값: string 타입을 따릅니다.

number와 string 모두 저장 위치의 타입을 구체화 해주는 타입 표현들입니다.

## 5. Type inference

---

종종, 타입스크립트는 만약 타입에 annotation이 없으면 정적 타입을 스스로 추론할 수 있습니다. 예를 들어, 만약 우리가 `toString()`의 반환 타입을 생략하면, 타입스크립트는 이를 string이라고 추론합니다.

```tsx
// %inferred-type: (num: number) => string
function toString(num: number) {
	return String(num);
}
```

타입을 추론하는 것은 어림잡아 짐작하는것이 아닙니다. 타입 추론은 명시적으로 지정되지 않은 타입을 파생시키기 위한 명확한 규칙(arithmetic과 유사하게)을 따릅니다. 이 경우, return 문은 임의의 값을 문자열로 매핑하는 함수 `String()`을 number타입의 `num`값에 적용하고 결과를 반환합니다. 이것이 반환 타입이 string으로 추론된 이유입니다.

만약 타입 위치가 명시적으로 지정되지 않았거나 추론이 불가한경우, 타입스크립트는 이것에 any라는 타입을 사용합니다. 이 타입은 값에 해당 타입이 있으면 우리는 아무거나 할수있는, 모든 값을 가지는 타입이면서 비장의 카드입니다.

`--strict`를 사용하면, any 타입의 사용은 만약 우리가 그 값을 명시적으로 사용하는 경우(annotation)에만 허락합니다. 다른 말로, 모든 위치에는 명시적이거나 추론된 정적 타입이 있어야합니다. 예제를 보면, 파라미터 `num`에는 둘 다 이가 적용되어 있지 않으며 이 때문에 컴파일 오류가 발생합니다.

```tsx
// @ts-expect-error: Parameter 'num' implicitly has an 'any' type. (7006)
function toString(num) {
	return String(num);
}
```

## 6. specifying types via type sxpressions

---

`:` 뒤에 타입을 명시해주는 type annotation은 간단한 것에서부터 복잡한 것 까지 다음을 따릅니다.

기본적인 타입은 유효한 타입 표현입니다.

- 자바스크립트의 동적 타입에 대한 정적 타입
  - undefined, null
  - boolean, number, bigint, string
  - symbol
  - object
- 타입스크립트의 특정 유형
  - Array (엄밀하게 자바스크립트의 유형이 아님)
  - any (모든 값을 갖는 타입)
  - Etc

새로운 결합된 타입을 만들기 위해 기본 타입들을 결합하는 많은 방법이 있습니다. 예를 들어, 교집합이나 합집합과 같이 집합을 결합하는 방법과 유사하게 타입을 결합하는 type operator가 있습니다. 곧 어떻게 하는지 살펴보겠습니다.

## 7. The two language levels: dynamic vs. static

---

타입스크립트는 두 개의 language levels 가 존재합니다.

- dynamic level은 런타임에서 자바스크립트에 의해 관리되며 코드와 값으로 구성됩니다. 동적 수준이라고 말하겠습니다.
- static level은 컴파일 시간에 타입스크립트(자바스크립트를 제외한)에 의해 관리되며 정적 타입으로 구성됩니다. 정적 수준이라고 말하겠습니다.

문맥에서 levels 들을 확인할 수 있습니다.

```tsx
const undef: undefined = undefined;
```

- 동적 수준에서, 우리는 자바스크립트를 사용해 변수 `undef`을 선언하고 그 값을 undefined로 초기화합니다.
- 정적 수준에서, 우리는 타입스크립트를 사용해 변수 `undef`가 정적 타입 undefined를 가진다고 명시합니다.

이 두 가지 언어 수준에 대한 인식을 키우려고 노력합시다.  
이 노력은 타입스크립트를 이애하는 데 상당한 도움이 됩니다.

- 동일한 구문인 undefined는 동적 수준에서 사용되는지 정적 수준에서 사용되는지에 따라 다르다는 것을 의미한다는 점을 기억하세요.

## 8. Type aliases

---

type을 사용해 기존 타입에 대한 새로운 이름을 만들 수 있습니다.

```tsx
type Age = number;
const age: Age = 82;
```

## 9. Typing Arrays

---

배열은 자바스크립트에서 두 가지 역할을 수행합니다.(둘 중 하나 혹은 둘다)

- List: 모든 원소가 같은 타입을 가집니다. 배열의 길이가 다양합니다.
- Tuple: 배얄의 길이가 고정되어있습니다. 원소는 일반적으로 같은 타입을 가지지 않습니다.

### 9.1 Array as lists

배열 arr가 모든 원소가 전부 숫자인 리스트로 사용된다는 사실을 표현하는 두 가지 방법이 있습니다.

```tsx
let arr1: number[] = [];
let arr2: Array<number> = [];
```

일반적으로 할당이 있을 경우 타입스크립트는 변수 타입을 추론할 수 있습니다. 이 경우에는 우리가 실제로 도움을 주어야 합니다. 왜냐하면 빈 배열에서는 타입스크립트가 원소의 타입을 확인할 수 없기 때문입니다.

꺽쇠를 이용한 notation의 경우는 나중에 알아보겠습니다.

### 9.2 Array as Tuples

만약 2차원의 점을 배열에 저장한다면, 배열을 튜플로 사용하는 것입니다. 튜플은 다음과 같이 생겼습니다.

```tsx
let point: [number, number] = [7, 5];
```

배열 리터럴의 경우 튜플 타입이 아닌 타입스크립트가 리스트 타입으로 추론하기 때문에 배열을 이용한 튜플에서는 type annotation이 필요합니다.

```tsx
// %inferred-type: number[]
let point = [7, 5];
```

튜플의 다른 예시로 `Object.entries(obj)`의 결과를 들 수 있습니다. `Object.entries(obj)`는 obj의 각 프로퍼티에 대해 하나의 \[키-값\] 쌍을 갖는 배열입니다.

```tsx
// %inferred-type: [string, number][]
const entries = Object.entries({ a: 1, b: 2 });

assert.deepEqual(entries, [
	['a', 1],
	['b', 2],
]);
```

결과적으로 추론된 타입은 튜플로 이루어진 배열입니다.

## 10. Function types

---

함수 타입의 예시입니다.

```tsx
(num: number) => string;
```

이 함수는 number타입의 단일 파라미터를 가지고 string을 반환하는 모든 함수로 구성됩니다. 이를 사용한 예시입니다.

```tsx
const toString: (num: number) => string = (num: number) => String(num); // (A) // (B)
```

일반적으로 우리는 함수에 대한 파라미터 타입을 명시해야합니다. 하지만 B의 num 타입은 A의 함수 타입에서 추론할 수 있습니다. 그래서 이 경우, B의 num타입은 생략 가능합니다.

```tsx
const toString: (num: number) => string = (num) => String(num);
```

만약 우리가 `toString`에 대한 annotation을 생략하면, 타입스크립트는 화살표 함수로부터 타입을 추론합니다.

```tsx
// %inferred-type: (num: number) => string
const toString = (num: number) => String(num);
```

이 때에는, `num`은 꼭 annotation이 필요합니다.

### 10.1 A more complicated example

이 예제는 좀 더 복잡합니다.

```tsx
function stringify123(callback: (num: number) => string) {
	return callback(123);
}
```

이 경우 함수 타입을 사용해 `stringify123()`의 `callback` 파라미터를 설명하고 있습니다. 이 type annotation 때문에, 타입스크립트는 다음 함수 호출을 거부합니다.

```tsx
// @ts-expect-error: Argument of type 'NumberConstructor' is not
// assignable to parameter of type '(num: number) => string'.
//   Type 'number' is not assignable to type 'string'.(2345)
stringify123(Number);
```

하지만 이러한 함수 호출은 받아들이죠.

```tsx
assert.equal(stringify123(String), '123');
```

### 10.2 Return types of function declarations

타입스크립트는 일반적으로 함수의 반환 타입을 추론할 수 있지만 명시적으로 지정하는 것을 허용하며 때로는 이렇게 하는 것이 유용하기도 합니다.(적어도 해를 끼치진 않습니다.)

`stringify123()`에서 다음과 같이 반환 타입을 명시해줄 수 있습니다.

```tsx
function stringify123(callback: (num: number) => string): string {
	return callback(123);
}
```

void는 함수의 특별한 반환값입니다. 타입스크립트에서는 이 함수가 항상 undefined를 반환한다고 알려줍니다.  
이것은 명시적으로 할 수 있고, 암묵적으로 할 수도 있습니다.

```tsx
// 명시적으로 한 경우
function f1(): void {
	return undefined;
}
// 암묵적으로 한 경우
function f2(): void {}
```

그러나 이러한 함수는 undefined 이외의 값을 명시적으로 반환할 수 없습니다.

```tsx
function f3(): void {
	// @ts-expect-error: Type '"abc"' is not assignable to type 'void'. (2322)
	return 'abc';
}
```

### 10.3 Optional parameters

식별자뒤에 `?`가 있으면 파라미터가 optional하다는 것을 의미합니다. 다음은 그 예시입니다.

```tsx
function stringify123(callback?: (num: number) => string) {
	if (callback === undefined) {
		callback = String;
	}
	return callback(123); // (A)
}
```

타입스크립트는 `callback`이 undefined(파라미터가 생략된 경우)가 아닌 경우에만 A의 함수 호출을 허용합니다.

타입스크립트는 파라미터 defult 값을 지원합니다.

```tsx
function createPoint(x = 0, y = 0): [number, number] {
	return [x, y];
}

assert.deepEqual(createPoint(), [0, 0]);
assert.deepEqual(createPoint(1, 2), [1, 2]);
```

defult 값은 파라미터가 optional하게 만듭니다. 우리는 일반적으로 type annotation을 생략할수 있습니다. 왜냐하면 타입스크립트가 타입을 추론할 수 있기 때문입니다. 예를 들어, 위의 경우 `x`와 `y` 모두 number 타입을 가진다는 것을 추론할 수 있습니다.

만약 type annotations를 추가하고 싶다면 다음과 같이 작성하면 됩니다.

```tsx
function createPoint(x: number = 0, y: number = 0): [number, number] {
	return [x, y];
}
```

### 10.4 Rest parameters

또한 타입스크립트 파라미터 정의에서 rest 파라미터(ex `...a`)를 사용할 수 있습니다. 이 정적 타입들은 배열(리스트나 튜플)이어야할 겁니다.

```tsx
function joinNumbers(...nums: number[]): string {
	return nums.join('-');
}
assert.equal(joinNumbers(1, 2, 3), '1-2-3');
```

## 11. Union types

---

변수에 의해 유지되는 값들은 다른 타입들의 멤버들일 수 있습니다. 이 경우, 우리는 union type이 필요합니다.

다음 코드에서 `stringOrNumber`는 string이나 number 타입입니다.

```tsx
function getScore(stringOrNumber: string | number): number {
	if (typeof stringOrNumber === 'string' && /^\*{1,5}$/.test(stringOrNumber)) {
		return stringOrNumber.length;
	} else if (typeof stringOrNumber === 'number' && stringOrNumber >= 1 && stringOrNumber <= 5) {
		return stringOrNumber;
	} else {
		throw new Error('Illegal value: ' + JSON.stringify(stringOrNumber));
	}
}

assert.equal(getScore('*****'), 5);
assert.equal(getScore(3), 3);
```

`stringOrNumber`는 `string|number`타입을 가집니다. `s|t`와 같은 타입 표현의 결과는 타입 `s`와 `t`(집합으로 해석된)의 이론적-집합 결합입니다.

### 11.1 By default, undefined and null are not included in types

많은 프로그래밍 언어에서 null은 모든 객체 타입의 일부입니다. 예를 들어 변수의 타입이 Java의 String일 때마다 우리는 이를 null로 설정할 수 있으며 JAVA에서 에러나 경고와 같은 불만을 내뱉지 않습니다.

이와 반대로 타입스크립트에서 undefined와 null은 분리된 별도의 타입으로 처리됩니다. 위 JAVA 같이 허용하려면 `defined|string`이나 `null|string`과 같은 union 타입이 필요합니다.

이를 받아들이고 코드를 작성한다면 다음과 같습니다.

```tsx
let maybeNumber: null | number = null;
maybeNumber = 123;
```

반대로 이를 받아들이지 않으면 에러가 납니다.

```tsx
// @ts-expect-error: Type 'null' is not assignable to type 'number'. (2322)
let maybeNumber: number = null;
maybeNumber = 123;
```

타입스크립트는 선언과 동시에 초기화 하도록 강제하지 않습니다.(변수를 초기화하기 전에 변수에서 읽지 않는 한)

```tsx
let myNumber: number; // OK
myNumber = 123;
```

### 11.2 Making omissions explict

앞선 코드를 가져오겠습니다.

```tsx
function stringify123(callback?: (num: number) => string) {
	if (callback === undefined) {
		callback = String;
	}
	return callback(123); // (A)
}
```

`callback` 파라미터가 더 이상 optional하지 않게 `stringify123()`을 다시 쓰겠습니다. 만약 호출자가 함수를 제공하지 않으려면 null을 명시적으로 전달해야 합니다. 결과는 다음과 같습니다.

```tsx
function stringify123(callback: null | ((num: number) => string)) {
	const num = 123;
	if (callback === null) {
		// (A)
		callback = String;
	}
	return callback(num); // (B)
}

assert.equal(stringify123(null), '123');

// @ts-expect-error: Expected 1 arguments, but got 0. (2554)
assert.throws(() => stringify123());
```

다시 한번 말하지면, A줄 과 같이 함수가 `callback`이 아닌 경우를 처리해야합니다. B에서 함수 호출을 하기 전에 말이죠. 그렇게 하지 않았다면 타입스크립트에서 그 줄에 오류를 띄웁니다.

### 12. Optional vs. default value vs. `undefined | T`

---

다음 세 가지 파라미터 선언은 매우 유사합니다.

- 파라미터가 optional합니다. : `x?: number`
- 파라미터가 default 값을 가집니다. : `x = 456`
- 파라미터가 union 타입을 가집니다. : `undefined | number`

만약 파라미터가 optional하다면, 생략 가능합니다. 이 경우, 값은 undefined을 가지게 됩니다.

```tsx
function f1(x?: number) {
	return x;
}

assert.equal(f1(123), 123); // OK
assert.equal(f1(undefined), undefined); // OK
assert.equal(f1(), undefined); // can omit
```

만약 파라미터가 defult 값을 가진다면, 이 값은 파라미터를 생략하거나 undefined으로 설정할 수 있습니다.

```tsx
function f2(x = 456) {
	return x;
}

assert.equal(f2(123), 123); // OK
assert.equal(f2(undefined), 456); // OK
assert.equal(f2(), 456); // can omit
```

만약 파라미터가 union 타입을 가진다면, 생략 불가합니다. 하지만 이것을 undefined로 설정할 수 있습니다.

```tsx
function f3(x: undefined | number) {
	return x;
}

assert.equal(f3(123), 123); // OK
assert.equal(f3(undefined), undefined); // OK

// @ts-expect-error: Expected 1 arguments, but got 0. (2554)
f3(); // can’t omit
```

## 13. Typing objects

---

배열과 비슷하게, 자바스크립트에서 객체는 두 가지 규칙을 따릅니다.(때때로 둘이 섞이기도 하죠)

- `Records`: 개발 시점에 알려진 프로퍼티의 고정된 개수입니다. 각 프로퍼티는 다른 타입을 가질 수 있습니다.
- `Dictionaries`: 개발 시점에 알려지지 않은 프로퍼티의 임의의 개수입니다. 모든 프로퍼티는 같은 타입을 가집니다.

dictionaries 객체에 대한 자세한 설명은 [여기](https://exploringjs.com/tackling-ts/ch_typing-objects.html#index-signatures)를 참고해 주세요.

### 13.1 Typing object-as-records via interfaces

Interfaces는 객체를 `records`로 묘사합니다. 다음과 같이 말이죠

```tsx
interface Point {
	x: number;
	y: number;
}
```

멤버를 콤마로 나눠줄 수도 있습니다.

```tsx
interface Point {
	x: number;
	y: number;
}
```

### 13.2 TypeScript's structural typing vs. nominal typing

타입스크립트의 타입 시스템의 가장 큰 장점 중 하나는 명목적이 아닌 구조적으로 작동한다는 것입니다. 즉, `Point` interface는 적절한 구조를 가진 모든 객체와 매칭됩니다.

```tsx
interface Point {
	x: number;
	y: number;
}
function pointToString(pt: Point) {
	return `(${pt.x}, ${pt.y})`;
}

assert.equal(
	pointToString({ x: 5, y: 7 }), // compatible structure
	'(5, 7)',
);
```

반대로 자바의 명목적 시스템에서는 interface를 상속받는 각 클래스들을 명시적으로 선언해야만합니다. 따라서 클래스는 생성시 존재하는 interfaces만 상속받을 수 있습니다.

### 13.3 Object literal types

Object literal types는 익명 interface입니다.

```tsx
type Point = {
	x: number;
	y: number;
};
```

`Object literal types`의 한 가지 이득은 인라인으로 사용할 수 있다는 점입니다.

```tsx
function pointToString(pt: { x: number; y: number }) {
	return `(${pt.x}, ${pt.y})`;
}
```

### 13.4 Optional properties

만약 프로퍼티가 생략 가능하다면, 이름 뒤에 `?`를 넣어주면 됩니다.

```tsx
interface Person {
	name: string;
	company?: string;
}
```

다음 예시에 따르면, `john`과 `jane` 모두 `Person` interface에 매치 됩니다.

```tsx
const john: Person = {
	name: 'John',
};
const jane: Person = {
	name: 'Jane',
	company: 'Massive Dynamic',
};
```

### 13.5 Methods

Interface는 메소드를 포함할 수도 있습니다.

```tsx
interface Point {
	x: number;
	y: number;
	distance(other: Point): number;
}
```

값이 함수인 메소드 정의나 프로퍼티는 다음과 같이 합니다.

```tsx
interface HasMethodDef {
	simpleMethod(flag: boolean): void;
}
interface HasFuncProp {
	simpleMethod: (flag: boolean) => void;
}

const objWithMethod: HasMethodDef = {
	simpleMethod(flag: boolean): void {},
};
const objWithMethod2: HasFuncProp = objWithMethod;

const objWithOrdinaryFunction: HasMethodDef = {
	simpleMethod: function (flag: boolean): void {},
};
const objWithOrdinaryFunction2: HasFuncProp = objWithOrdinaryFunction;

const objWithArrowFunction: HasMethodDef = {
	simpleMethod: (flag: boolean): void => {},
};
const objWithArrowFunction2: HasFuncProp = objWithArrowFunction;
```

프로퍼티가 어떻게 설정이 필요한지 잘 표현되는 구문을 사용하는 것을 추천합니다.

## 14. Type variables and generic types

---

타입스크립트의 두 language level을 상기시켜 봅시다.

- 값은 `dynamic level`(동적 수준)에 존재합니다.
- 타입은 `static level`(정적 수준)에 존재합니다.  
  비슷하게
- 평범한 함수는 동적 수준에 존재하며 값을 만들어내고(원문에서는 값을 만드는 공장이라고 표현됩니다.) 값을 나타내는 파라미터를 가집니다. 그리고 파라미터는 괄호 사이에 선언됩니다.

```tsx
const valueFactory = (x: number) => x; // definition
const myValue = valueFactory(123); // use
```

> 타입 파라미터 네이밍  
> 타입스크립트에서 타입 파라미터를 위해 한 개의 대문자(T, I, O 같은)를 평범하게 사용합니다. 그러나 모든 옳게 작성된 자바스크립트 식별자는 허용되고 긴 네이밍을 종종 코드를 이해하기 쉽게 만들어줍니다.

### 14.1 Example: a container for values

```tsx
// Factory for types
interface ValueContainer {
	value: Value;
}
// Creating one type
type StringContainer = ValueContainer;
```

Value는 타입 변수입니다. 한개 이상의 타입 변수가 꺽쇠 사이에 표현될 수 있습니다.

## 15. Example: a generic class

---

클래스도 타입 파라미터를 가질 수 있습니다.

```tsx
class SimpleStack<Elem> {
	#data: Array<Elem> = [];
	push(x: Elem): void {
		this.#data.push(x);
	}
	pop(): Elem {
		const result = this.#data.pop();
		if (result === undefined) {
			throw new Error();
		}
		return result;
	}
	get length() {
		return this.#data.length;
	}
}
```

`SimpleStack` 클래스는 `Elem`이라는 타입 파라미터를 가지고 클래스를 인스턴스화할 때 타입 파라미터에 대한 값 또한 제공합니다.

```tsx
const stringStack = new SimpleStack();
stringStack.push('first');
stringStack.push('second');
assert.equal(stringStack.length, 2);
assert.equal(stringStack.pop(), 'second');
```

### 15.1 Example: Maps

Maps는 타입스크립트에서 일반적으로 다음과 같이 입력됩니다.

```tsx
const myMap: Map<boolean, string> = new Map([
	[false, 'no'],
	[true, 'yes'],
]);
```

타입 추론(`new Map()`의 파라미터로부터 추론) 덕분에 타입 파라미터를 생략해 줄 수 있겠네요.

```tsx
// %inferred-type: Map<boolean, string>
const myMap = new Map([
	[false, 'no'],
	[true, 'yes'],
]);
```

### 15.2 Type variables for functions and methods

함수 선언에서 이렇게 타입 변수를 쓸 수 있습니다.

```tsx
function identity(arg: Arg): Arg {
	return arg;
}
```

이 함수는 다음과 같이 쓸 수 있겠네요.

```tsx
// %inferred-type: number
const num1 = identity(123);
```

이 경우에도 타입 추론 덕분에 타입 파라미터를 생략 가능합니다.

```tsx
// %inferred-type: 123
const num2 = identity(123);
```

타입스크립트는 숫자의 집합인 123의 타입을 추론했고 number 타입보다 더 구체적입니다.

화살표 함수에서도 타입 파라미터를 가질 수 있습니다.

```tsx
const identity = (arg: Arg): Arg => arg;
```

위의 identity 메소드는 다음과 같은 타입 파라미터 문법을 씁니다.

```tsx
const obj = {
	identity<Arg>(arg: Arg): Arg {
		return arg;
	},
};
```

### 15.3 A more complicated function example

```tsx
function fillArray(len: number, elem: T): T[] {
	return new Array(len).fill(elem);
}
```

타입 변수인 `T`는 이 코드에서 총 네 번 나타납니다.

- `fillArray<T>`를 통해 처음 나옵니다. 그러므로 이 타입 변수의 스코프는 `fillArray<T>`함수겠네요.
- `elem` 파라미터의 type annotation으로 처음 사용됩니다.
- `fillArray()`의 반환 타입을 지정하는게 두 번째로 사용됩니다.
- `new Array()`의 타입 변수로도 사용됩니다.

타입스크립트는 `elem` 파라미터로부터 `T`를 추론할 수 있기 때문에 `fillArray()`(A줄에서)를 호출할 때 타입 파라미터를 생략할 수 있습니다.

```tsx
// %inferred-type: string[]
const arr1 = fillArray<string>(3, '*');
assert.deepEqual(arr1, ['*', '*', '*']);

// %inferred-type: string[]
const arr2 = fillArray(3, '*'); // (A)
```

## Conclusion: understanding the initial example

---

이제 우리가 앞서 보았던 코드를 이해하기 위해 배운 내용을 사용해 보겠습니다.

```tsx
interface Array<T> {
	concat(...items: Array<T[] | T>): T[];
	reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U;
	// ···
}
```

이는 요소가 타입 `T`인 배열의 인터페이스입니다.

- `.concat()`메소드는 0개 이상의 파라미터를 가집니다.(rest 파라미터를 썻기 때문이죠.) 각 파라미터의 타입은 `T[]|T`입니다. 즉, T값의 배열이거나 그냥 T값인 것이죠.
- `.reduce()`메소드는 자체 타입 변수 U를 썻습니다. U는 밑의 모든 entity가 같은 타입을 가진다는 사실을 표현하기 위해 사용되었습니다.
  - `callback()`의 `state` 파라미터
  - `callback()`의 결과
  - `.reduce()`의 optional한 `dirstState` 파라미터
  - `.reduce()`의 결과
- 추가적으로 `state`, `callback()`은 다음 파라미터를 가집니다.
  - `Array`와 같은 타입인 T를 가지는 `element`
  - number 타입을 가지는 `index`
  - T타입 배열(T\[\])를 가지는 `array`
