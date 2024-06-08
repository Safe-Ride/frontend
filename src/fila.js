export default class Fila {

    constructor() {
        this.fila = [];
    }

    insert(info) {
        this.fila.push(info);
    }

    poll() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }

        return this.fila.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }

        return this.fila[0];
    }

    isEmpty() {
        return this.fila.length == 0;
    }

    size() {
        return this.fila.length;
    }

    clear() {
        this.fila = [];
    }

    print() {
        console.log(this.fila.toString());
    }

    toString() {
        return this.fila.toString()
    }

    indexOf(n) {
        return this.fila.indexOf(n);
    }

    previous() {
        return this.fila[this.fila.length - 1]
    }
}
