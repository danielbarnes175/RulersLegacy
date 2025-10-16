import { malePortraitMapping, femalePortraitMapping } from "./portraits";

export function getRandomPortrait(gender) {
  const length =
    gender === "male"
      ? malePortraitMapping.length
      : femalePortraitMapping.length;
  const portraitNumber = Math.floor(Math.random() * length);
  const portraitMapping =
    gender === "male" ? malePortraitMapping : femalePortraitMapping;
  return portraitMapping[portraitNumber].imageLink;
}
