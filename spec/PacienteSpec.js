describe("Paciente", function() {
    it("deve calcular o IMC", function() {
        var cassio = new Paciente("Cassio", 28, 72, 1.82);

        expect(cassio.imc()).toEqual(72 / (1.82*1.82));
    });

    it("deve calcular o IMC 2", function() {
        var cassio = new Paciente("Cassio", 28, 82, 1.77);

        expect(cassio.imc()).toEqual(82 / (1.77*1.77));
    });
});