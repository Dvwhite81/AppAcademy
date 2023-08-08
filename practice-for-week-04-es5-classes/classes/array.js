Array.prototype.isEqual = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (this[i] === array[i]) {
            return true;
        }
    }
    return false;
}
