/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let otherLovers = [];
    let countLoverTriangles = 0;

    for (let i = 0; i < preferences.length; i++) {
        if (i !== preferences[i] - 1) {
            let firstLover = preferences[i] - 1;
            let secondLover = preferences[firstLover] - 1;
            let thirdLover = preferences[secondLover] - 1;

            if (thirdLover === i && otherLovers.includes(firstLover) === false && otherLovers.includes(secondLover) === false && otherLovers.includes(thirdLover) === false) {
                otherLovers.push(firstLover);
                otherLovers.push(secondLover);
                otherLovers.push(thirdLover);

                firstLover = 0;
                secondLover = 0;
                thirdLover = 0;
                countLoverTriangles++;
            }
        }
    }
    return countLoverTriangles
};
