it('nada agora', function() { })

const getSomething = () => {
    setTimeout(() => {
        console.log()
        return 11
    }, 1000)
};

const system = () => {
    console.log("Init");
    const something = getSomething();
    console.log(`Something is ${something}`)
    console.log("End")
}

system();