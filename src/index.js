module.exports = function reverse(n) {
    const res = String(Math.abs(n)).split("").reverse().join("");
    return res;
};
