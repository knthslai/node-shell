let pwd = require('./pwd.js')
let ls = require('./ls.js')
//Output a prompt
process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
    pwd()
  }else if(cmd === 'ls'){
    ls()
  }

  process.stdout.write('\nprompt > ');
})
