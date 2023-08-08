// DO NOT MODIFY THE say FUNCTION
function say(name) {
    console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

let callHello = say.call(helloMessage, "John");
let applyHeyThere = say.apply(heyThereMessage, ["Michael"]);