import React, { FC } from 'react';

export interface HightLightProps {
  text: string;
  keyWords: string;
}
const HightLight: FC<HightLightProps> = ({ text, keyWords }) => {
  const str = text;
  const arrOfWords = keyWords.split(' ');
  const arrOfRegExp: Array<RegExp> = [];

  arrOfWords.forEach((el) => {
    const regexp = new RegExp(el, 'ig');
    arrOfRegExp.push(regexp);
  });
  const res1: string[] = str.split(' ');
  return (
    <>
      {res1?.map((el) => {
        for (let i = 0; i < arrOfRegExp.length; i += 1) {
          if (arrOfRegExp[i].test(el)) {
            return (
              <span className="light" key={Math.random()}>
                {` ${el} `}
              </span>
            );
          }
        }
        return `${el} `;
      })}
    </>
  );
};
export default HightLight;
