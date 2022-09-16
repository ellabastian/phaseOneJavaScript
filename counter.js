function increment() {
    for (let counter = 0; counter <= 10; counter++) {
        console.log(counter)
    }
}

setInterval(increment(), 4000)