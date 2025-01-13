for (count = 1; count <= 10; count++) {
  console.log(count);
}
for (count = 1; count <= 10; count = count + 2) {
  console.log(count);
}
for (count = 10; count >= 1; count--) {
  console.log(count);
}
for (count = 2; count <= 10; count = count + 2) {
  console.log(count);
}
var a = 2;
for (count = 1; count <= 10; count = count + 1) {
  var r = a * count;
  console.log(a, "X", count, "=", r);
}
