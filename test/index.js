//importamos nuestro modulo
const log=require('../index');

//dependencia que necesitamos
//sinon es para ver las llamadas que se hacen
var chai=require('chai');
var expect=chai.expect;
var sinonChai=require('sinon-chai');
var sinon=require('sinon');

//hacemos uso del sinon-chai mendiante el chai
chai.use(sinonChai);

describe('Test de las funciones',()=>{

    beforeEach(()=>{
        //para ver que se ejecuta el console log
        sinon.spy(console,'log');
    });

    afterEach(()=>{
        //restauramos la consola
        console.log.restore();
    });

    it('Test del console de info',()=>{
        log.info('hola');
        //esperamos que llame al console log
        expect(console.log).to.be.called; //.to.be.called esta llamando al console log
    });

    it('Test del console de ok',()=>{
        log.ok('hola');
        expect(console.log).to.be.called;
    });

    it('Test del console de aviso',()=>{
        log.aviso('hola');
        expect(console.log).to.be.called;
    });

    it('Test del console de error',()=>{
        log.error('hola');
        expect(console.log).to.be.called;
    });

    it('No llama al console log',()=>{
        log.mensajeBienvenida();
        expect(console.log).to.not.be.called;
    });
})