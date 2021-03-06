{
  /**
   * Type Assertions ๐ฉ
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log(result.length); // ..length์ ๋ฏธ๋ฆฌ๋ณด๊ธฐ๊ฐ ์๋ธ
  console.log((result as string).length); // string์์ ํ์ ํ  ๋ ์ฌ์ฉ, type์ ํ๋ ค๋ ๊ฒฝ๊ณ ๋ฅผ ์์ค
  // * ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ์ ๋ง๋ก type์ ํ์ ํ ๋๋ง ์จ์ผํ๋ค.
}

{
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // pushํจ์๊ฐ ์์ด์ ์๋ฌ๊ฐ๋จ ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ์ฌ๊ธฐ์ !๋ฅผ ๋ถ์ด๋ฉด ์ ๋์ ์ผ๋ก ํ์   ๐ฑ
}

{
  /* ์ข์ ์์ */
  const button = document.querySelector('class')!; // 100%์์๋ ! ๋ฅผ ๋ถ์ผ ์ ์์
  if (button) {
    button.nodeValue; // ์ฌ๊ธฐ๋ true์ผ๋๋ง ๋ค์ด์ค๋ฏ๋ก ๊ฒฝ๊ณ ๋ฅผ ์๋ถ
  }
}
