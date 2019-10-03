function whatIsInAName(collection, source) {
    let keys = Object.keys(source);

    /////////////
    //  v2.0  //
    ////////////
    return collection.filter(item => {
        for (let key = 0; key < keys.length; key++) {
            if (item[keys[key]] !== source[keys[key]]) {
                return false;
            }
        }
        return true;
    })

    /////////////
    //  v1.0  //
    ////////////

    // for (let item = 0; item < collection.length; item++) {
    //     var isGood = true;
    //     for (let key = 0; key < keys.length; key++) {
    //         if (!collection[item].hasOwnProperty(keys[key])) {
    //             // key not there NEXT!
    //             isGood = false;
    //             break;
    //         }
    //         if (collection[item][keys[key]] !== source[keys[key]]) {
    //             // not a match NEXT!
    //             isGood = false;
    //             break;
    //         }
    //     }
    //     if (isGood) {
    //         arr.push(collection[item]);
    //     }
    // }
    // // Only change code above this line
    // console.log(arr);
    // return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });