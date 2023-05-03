
export class CatService {

    static getFacts() {

        return fetch('https://catfact.ninja/facts')
            .then(resp => resp.json())
            .then(obj => this.elaborateData(obj));
    }

    static elaborateData(obj) {

        const facts = obj.data;
        // const firstSix = facts.filter((f, i) => i < 6);
        // console.log(firstSix);
        const firstSix = this.getFirstSix(facts);
        return firstSix;
    }

    static getFirstSix(array) {
        const tempArray = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (i < 6) {
                tempArray.push(element);
            } else {
                break;
            }
        }
        return tempArray;
    }
}