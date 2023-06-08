/* 

📌 F-Task: Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi faqat digitlarni yangi stringda return qilsin!

📌  Masalan: findDigits('ad5we34jkf89') return qilishi kerak bolgan qiymat '53489'

*/

const findDigits = (param) => {
  let digits = "";
  for (let i = 0; i < param.length; i++) {
    const p = param[i];

    if (!isNaN(parseInt(p))) {
      digits += p;
    }
  }
  console.log(typeof digits);
  return digits;
};

const firstPractice = findDigits("a2ioj342342");
console.log(firstPractice);
