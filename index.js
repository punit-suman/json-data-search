function AllValuesToString(data) {
    const recur = (tempData) => {
        let temp = [];
        let t = Object.keys(tempData);
        for(let i = 0; i < t.length; i++) {
            if (tempData[t[i]] == null) {
                continue
            } else if (typeof tempData[t[i]] !== 'object') {
                temp.push(tempData[t[i]].toString());
            } else if (typeof tempData[t[i]] == 'object' && tempData[t[i]].length != undefined) {
                if (typeof tempData[t[i]] == 'object') {
                    let t2 = recur(tempData[t[i]]);
                    temp.push(t2.toString());
                } else {
                    temp.push(tempData[t[i]].toString());
                }
            } else {
                let t2 = recur(tempData[t[i]]);
                temp.push(t2.toString());
            }
        }
        return temp;
    }
    return recur(data).toString();
}

function SearchValueInJSON(data, searchValue = '') {
    searchValue = searchValue.toString();
    let tempData = [];
    const recur = (tempData) => {
        let t = Object.keys(tempData);
        for(let i = 0; i < t.length; i++) {
            if (tempData[t[i]] == null) {
                continue
            } else if (typeof tempData[t[i]] !== 'object') {
                let str = tempData[t[i]].toString();
                if (str.toLowerCase().search(searchValue.toLowerCase()) !== -1) {
                    return true
                }
            } else if (typeof tempData[t[i]] == 'object' && tempData[t[i]].length != undefined) {
                if (tempData[t[i]].length > 0 && typeof tempData[t[i]][0] == 'object') {
                    if (recur(tempData[t[i]])) {
                        return true
                    }
                } else {
                    let str = tempData[t[i]].toString();
                    if (str.toLowerCase().search(searchValue.toLowerCase()) !== -1) {
                        return true
                    }
                }
            } else {
                if (recur(tempData[t[i]])) {
                    return true
                }
            }
        }
        return false
    }
    for (let j = 0; j < data.length; j++) {
        let d = data[j];
        if (recur(d)) {
            tempData.push(data[j]);
        }
    }
    return tempData;
}

module.exports = {
    AllValuesToString,
    SearchValueInJSON
}