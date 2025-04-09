it('nada agora', function() { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
};

const system = () => {
    console.log("Init");
    const prom = getSomething()
    prom.then(some => {
        console.log(`Something is ${some}`)
    })
    // getSomething(some => console.log(`Something is ${some}`));
    console.log("End")
}

system();