const fs = require('fs')
const program = require('commander')

fs.readdir('.', (err, files)=>{
  // console.log(files)
})

// バージョン情報
program
  .version('0.0.1')
  .usage('[options] <file ...>')

// コマンド登録＆オプション登録
program
  // コマンド名
  .command('find')
  // 説明
  .description('検索')
  // 引数なしオプション
  .option('-a, --age', 'ageを実行(引数なし)')
  // 引数ありオプション
  .option('-s, --sage <sage>', 'sageを実行(引数ありオプション)')
  .action((options, cmd)=>{
    // 処理
    console.log(options.age);
    console.log(options.sage);
    console.log('検索実行');
  })

// 複数のコマンドを登録可能
program
  .command('merge')
  .description('マージ')
  .action((options, cmd)=>{
    console.log('マージ実行')
  })

// 引数をパース
program.parse(process.argv)
