describe("Consulta", function() {
    var cassio;

    beforeEach(function() {
        cassio = new PacienteBuilder().constroi();
        
        //Caso queira mudar os valores das Variaveis
        //cassio = new PacienteBuilder().comAltura(1.72).constroi();
    });

    describe("Consultas que são retornos", function() {

        it("nao deve cobrar nada se a consulta for um retorno", function() {
            var consulta = new Consulta(cassio, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });

    });

    describe("Consultas que são particulares", function() {

        it("deve dobrar o preco da consulta particular", function() {
            var consulta = new Consulta(cassio, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

        it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
            var consulta = new Consulta(cassio, ["raio-x"], true, false);

            expect(consulta.preco()).toEqual(55 * 2);
        });
    });

    describe("Consultas por um convênio", function() {
        it("deve cobrar preco especifico dependendo do procedimento", function() {
            var consulta = new Consulta(cassio, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

});