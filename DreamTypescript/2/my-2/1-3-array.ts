{
  // Array
  const fruits: string[] = ['π', 'π']; // readonly μ΄μ©κ°λ₯
  const scores: Array<number> = [1, 3, 4];
  function printArray(fuits: readonly string[]) {}
  //function printArray(fuits: readonly Array<number>) {} μ΄κ±΄ μμ§ νμ©μλ¨
}

{
  /* 2.8 */
  // Tuple: μλ‘λ€λ₯Έ typeμ λ΄μ μ μμ
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // μμ²λΌ ννλ‘ μ¬μ©νλ©΄ κ°λμ±μ΄ λ¨μ΄μ§
  // -> interface, type alias, classλ₯Ό λμ  μ¬μ©νλ€.

  const [name, age] = student;
}
