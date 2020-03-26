/*
tsconfig.json 中 "strict": true 的作用 ?
    1. TS具有两种特殊类型 'null' 和 'undefined' 他们分别具有 'null' 和 'undefined'
    2.默认情况下,类型检查器任务'null' 和 'undefined'可以赋值给任何类型
    3.这就意味着,'null' 和 'undefined'是所有其他类型的一个有效值,你阻止不了将它们赋值给其他类型
    就算是你想要阻止这种情况也不行,`null`的发明者 Tony Hoare 称他为价值亿万美元的错误

    --strictNullChecks 标记可以解决此错误,当你声明一个变量是,他不会自动的包含'null' 和 'undefined'

    就是当你在命令行输入: tsc xxx.ts --strictNullChecks

    所以配置文件里的"strict": true就是这个效果,所以 02-基本类型.ts 的 80 行报错就是这个原因
*/