'use scrict';

function test() {
    let x = "foo";
    if(x =="foo") {
        let y = "true";
    }
    console.log(x);
    console.log(y);
}

test();

function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();