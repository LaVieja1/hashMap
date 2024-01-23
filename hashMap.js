const hashMap = () => {
    let map = [];

    let size = 16;
    const loadFactor = 0.75;

    const hash = (string) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        return hashCode;
    };

    const set = (key, value) => {
        if (loadExceded()) {
            console.log('Carga excesiva');
            rearrangeMap();
            map[hash(value)] = value;
        } else {
            map[key] = value;
        }
    };

    const loadExceded = () => {
        let len = 0;

        map.forEach((item) => {
            if (item) {
                len += 1;
            }
        });
        return len > size * loadFactor;
    };

    const rearrangeMap = () => {
        console.log('Reorganizando hashMap');
        increaseSize();

        let newMap = [];
        map.forEach((element) => {
            if (element) {
                newMap[hash(element)] = element;
            }
        });
        map = newMap;
    };

    const increaseSize = () => {
        console.log('Aumentando la antigua capacidad: ', size);
        size = size * 2;
        console.log('Nueva capacidad: ', size);
    };

    const get = (key) => {
        if (map[key]) {
            return map[key];
        } else {
            return null;
        }
    };

    const has = (key) => {
        if (map[key]) {
            return true;
        } else {
            return false;
        }
    };

    const remove = (key) => {
        if (map[key]) {
            map.splice(key, 1);
            return true;
        }
        return false;
    };

    const length = () => {
        let len = 0;
        map.forEach((item) => {
            if (item) {
                len += 1;
            }
        });
        return len;
    };

    const clear = () => {
        map = [];
    };

    const keys = () => {
        const arr = [];
        map.forEach((item) => {
            arr.push(map.indexOf(item));
        });

        return arr;
    };

    const values = () => {
        const arr = [];
        map.forEach((item) => {
            arr.push(item);
        });
        return arr;
    };

    const entries = () => {
        const arr = [];
        map.forEach((item) => {
            arr.push([map.indexOf(item), item]);
        });
        return arr;
    };

    return { hash, set, get, has, remove, length, clear, keys, values, entries };
};

const hashMap1 = hashMap();

const values = ["Santi", "Sol", "Fede", "Mama", "Papa", "Bruno", "Aria"];

const addValue = (value) => {
    const data = value;
    const hash = hashMap1.hash(data);
    hashMap1.set(hash, data);
};

values.forEach((value) => {
    addValue(value);
});

console.log('Capacidad:', hashMap1.length());
console.log('Keys:', hashMap1.keys());
console.log('Valores:', hashMap1.values());
console.log('Entradas:', hashMap1.entries());