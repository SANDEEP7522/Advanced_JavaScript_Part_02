if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {
    
        let startIndex = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0);

        for (let i = startIndex; i < this.length; i++) {
            if (this[i] === element || (isNaN(this[i]) && isNaN(element))) {
                return true;
            }
        }
        return false;
    };
}
const arr = [1, 2, 3, NaN];
console.log(arr.customIncludes(2)); 
console.log(arr.customIncludes(4)); 
console.log(arr.customIncludes(NaN)); 
console.log(arr.customIncludes(3, 3)); 
