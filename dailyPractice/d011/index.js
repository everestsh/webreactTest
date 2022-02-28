console.log("Test")
console.log("--------------------------")
'use strict'

function loadImageAsync(url){
    return new Promise(function(resolve, reject){
        console.log("loading ... Image. ")
        const image = new Image();

        image.onload = function() {
            resolve(image);
        }
        console.log("loading ... Image. work ")
        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        }

        image.src = url
    })
}

// console.log('www.beidu.com')
loadImageAsync('https://raw.githubusercontent.com/FT-African-Marketplace-2-Group/front-end/main/african-marketplace/src/imgs/pic01.jpeg')

console.log(image.src)
console.log("--------------------------")
console.log("Test End")