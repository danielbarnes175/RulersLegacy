import { malePortraitMapping, femalePortraitMapping } from "./portraits";

export function getRandomPortrait(gender) {
    let length = gender === 'male' ? malePortraitMapping.length : femalePortraitMapping.length;
    let portraitNumber = Math.floor(Math.random() * length);
    let portraitMapping = gender === 'male' ? malePortraitMapping : femalePortraitMapping;
    return portraitMapping[portraitNumber].imageLink;
};