describe("Consulta", function() {

    it("nao deve cobrar nada se a consulta for um retorno", function() {
        var cassio = new Paciente("Cassio", 28, 72, 1.80);
        var consulta = new Consulta(cassio, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("deve cobrar 25 por cada procedimento comum", function() {
        var cassio = new Paciente("Cassio", 28, 72, 1.80);
        var consulta = new Consulta(cassio, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve dobrar o preco da consulta particular", function() {
        var cassio = new Paciente("cassio", 28, 72, 1.80);
        var consulta = new Consulta(cassio, ["proc1", "proc2"], true, false);

        expect(consulta.preco()).toEqual(50 * 2);
    });

     it("deve cobrar preco especifico dependendo do procedimento", function() {
        var cassio = new Paciente("Cassio", 28, 72, 1.80);
        var consulta = new Consulta(cassio, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });
});