const max = () => {
    let a = parseInt(prompt("type a = "))
    let b = parseInt(prompt("type b = "))
    let c = parseInt(prompt("type c = "))
    let d = parseInt(prompt("type d = "))
    let maxNum;
    if (a > b && a > c && a > d) {
        maxNum = a;
    } else if (b > a && b > c && b > d) {
        maxNum = b;
    } else if (c > a && c > b && c > d) {
        maxNum = c;
    } else {
        maxNum = d;
    }
    console.log(maxNum);
}
const 