const { parse } = require('path');

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

var qtdDias = parseInt(lines[0])
var qtdAnos = parseInt(qtdDias/365)
var qtdMeses = parseInt((qtdDias % 365) / 30)
var diasRest = parseInt(qtdDias % 365) % 30

console.log(qtdAnos + ' ano(s)\n' + qtdMeses + ' mes(es)\n' + diasRest + ' dia(s)')
