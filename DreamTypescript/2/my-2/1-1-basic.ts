{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bight, symbol, null, undefined
   * Object: function, array.......
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // ๐ฉ
  let age: number | undefined; // โจ
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // ๐ฉ
  let person2: string | null;

  // unknown ๐ฉ // ์ ๋งํ๋ฉด ์ฐ์ง์๋ ๊ฒ์ด ์ข๋ค, ํ์์ด์๋ JS๋ฅผ ํธํํ๊ธฐ์ํด ์กด์ฌํ๋ ํ์
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any ๐ฉ // ์ด๊ฒ๋ unknown๊ณผ ๊ฐ์ด ์ด๋ ํ์๋ ๋ค์ด์ด. ์ฐ์ง๋ง์
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void; // ๐ฉ ์ด๋ ๊ฒ๋ ์ฌ์ฉ์ํจ undefined๋ฐ์ ๋ชป๋ด์

  // never: ์ดํจ์๋ฅผ ํธ์ถํ๋ฉด returnํด์ฃผ๋ ๊ฐ์ด ์์ผ๋ ๊ฐ์ํ๊ณ  ์ฝ๋ฉํด! ๋ช์
  function throwError(message: string): never {
    // message -> server (log)
    // * throw new Error(message);
    // * while (true) {}
    return;
  }
  let neverEnding: never; // ๐ฉ

  // object
  let obj: object; // ๐ฉ ์ฌ์ง์ด []๋ฐฐ์ด๋ ๊ฐ๋ฅํด์....
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
