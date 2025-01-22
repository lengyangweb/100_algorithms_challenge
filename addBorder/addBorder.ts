export function addBorder(picture: string[]): string[] {
    const borders = "*****";
    let pictures: string[] = [];
    if (picture.some((el) => el.includes(','))) {

    }
    pictures = picture.map((picture) => {
        if (picture.includes(',')) {
            return picture.split(',').map((el) => `*${el.trim()}*`)
        } else {
            return `*${picture}*`
        }
    });
    pictures.unshift(borders);
    pictures.push(borders);
    return pictures;
}

console.log(addBorder(["abc", "ded"]));