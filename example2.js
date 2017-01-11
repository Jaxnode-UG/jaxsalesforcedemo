
setTimeout(() => print('I could block.'), 2000);

print('I am not being blocked.');

function print(msg) {
    console.log(msg);
}
