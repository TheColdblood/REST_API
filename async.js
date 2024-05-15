export function getAdat(vegpont, callback){
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => callback(data)) //callback másik fv. paramétereknt kapott fv. async hívásoknál használjuk
        .catch((error) => console.log(error));
}