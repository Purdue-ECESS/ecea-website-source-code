"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Languages = exports.availableLanguages = void 0;
var availableLanguages = ['ES', 'PT', 'FR'];
exports.availableLanguages = availableLanguages;
var Languages = {
  EN: {
    MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    DAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  ES: {
    MONTHS: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nombre", "Diciembre"],
    DAYS: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
  },
  PT: {
    MONTHS: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Nome", "Dezembro"],
    DAYS: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  },
  FR: {
    MONTHS: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Nom", "Décembre"],
    DAYS: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  }
};
exports.Languages = Languages;