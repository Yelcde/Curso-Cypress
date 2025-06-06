/// <reference types="cypress"/>

it("Equality", () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, "Deveria ser 1").equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it("Truthy", () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it("Object Equality", () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).to.be.equal(obj);
    expect(obj).equals(obj);
    expect(obj).equal(obj);
    expect(obj).eq(obj);

    expect(obj).to.be.deep.eq({a:1, b:2});
    expect(obj).eql({a:1, b:2});

    expect(obj).includes({a:1});

    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it("Arrays", () => {
    const arr = [1, 2, 3];

    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it("Types", () => {
    const num = 1;
    const str = "string";

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it("String", () => {
    const str = "String de teste";

    expect(str).to.be.equal("String de teste");
    expect(str).to.have.length(15);
    expect(str).to.contains("de");
    expect(str).to.match(/de/);
    expect(str).to.match(/String/);
    expect(str).to.match(/^String/); // Iniciar com String
    expect(str).to.match(/teste$/); // Terminar com teste
    expect(str).to.match(/.{15}/); // Verifica o tamanho da string
    expect(str).to.match(/\w+/); // Verifica se tem caracteres alfanuméricos
    expect(str).to.match(/\D+/); // Verifica se tem caracteres não numéricos
    expect(str).to.match(/\s+/); // Verifica se tem espaços em branco
    expect(str).to.match(/\S+/); // Verifica se tem caracteres não brancos
})

it("Numbers", () => {
    const number = 4;
    const numberFloat = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);

    expect(numberFloat).to.be.closeTo(5.2, 0.1);
})