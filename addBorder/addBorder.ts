export function addBorder(picture: string[]): string[] {
    const borders = "*****";
    let pictures: string[] = [];


    picture.forEach((el) => {
        if (el.includes(',')) {
            const els = el.split(',').map((el2) => el2.trim());
            pictures = [...pictures, ...els];
        } else {
            pictures = [...pictures, el];
        }
    })

    pictures = pictures.map((pic) => `*${pic}*`);
    pictures.unshift(borders);
    pictures.push(borders);
    return pictures;
}

console.log(addBorder(["abc", "ded"]));