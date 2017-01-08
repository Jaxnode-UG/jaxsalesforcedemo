const fn = print;

fn('I could block.');

fn('I am being blocked.');

function print(msg) {
    console.log(msg);
}