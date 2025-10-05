const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m'
};

const estudiante = "Enmanuel Alfonso Ferreras Vargas";
const matricula = "2024-0189";
const curso = "Electiva 2 - DevOps";
const fecha = new Date().toLocaleString('es-DO', {
    dateStyle: 'full',
    timeStyle: 'medium'
});

const linea = (char = '═', length = 60) => char.repeat(length);

console.log('\n');
console.log(colors.cyan + colors.bright + linea('═') + colors.reset);
console.log(colors.magenta + colors.bright + '  ✨ PROGRAMA: HOLA MUNDO EN JAVASCRIPT ✨' + colors.reset);
console.log(colors.cyan + colors.bright + linea('═') + colors.reset);
console.log('');

console.log(colors.yellow + '  👤 Estudiante:' + colors.reset + colors.bright + '  ' + estudiante + colors.reset);
console.log(colors.yellow + '  🎓 Matrícula:' + colors.reset + colors.bright + '   ' + matricula + colors.reset);
console.log(colors.yellow + '  📚 Curso:' + colors.reset + colors.bright + '       ' + curso + colors.reset);
console.log(colors.yellow + '  📅 Fecha/Hora:' + colors.reset + colors.bright + '  ' + fecha + colors.reset);
console.log('');

console.log(colors.cyan + linea('─') + colors.reset);
console.log('');

console.log(colors.green + colors.bright + '  🚀 ¡HOLA MUNDO!' + colors.reset);
console.log(colors.green + '  ✅ La integración continua está funcionando correctamente' + colors.reset);
console.log('');

console.log(colors.cyan + colors.bright + linea('═') + colors.reset);
console.log('\n');
