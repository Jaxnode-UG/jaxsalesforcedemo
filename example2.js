const fn = print;

setTimeout(() => fn('I could block.'), 2000);

fn('I am not being blocked.');

function print(msg) {
    console.log(msg);
}