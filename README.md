```js
npm init -y  // 创建 package.json 配置文件
创建包
1.npm view 包名  
    (2) 或者使用 nrm 工具来设置；
npm adduser  // 连接上npmjs
2.把包上传到 npm
// 可以通过以下命令验证是否连接成功
npm who am i
 
// 如果成功了，就可以直接 publish 了
npm public
 
// 如果想退出
npm logout
// 如果想删除包
npm unpublish 包名 --force
----------------------------------
单元测试
给文件夹权限
sudo chown -R 501:20 "/Users/duchuanyou/.npm"
安装jest
npm install jest --save-dev
package.json 文件
{
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
首先需要在 package.json 中添加 scripts
{
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "scripts": {
    "test": "jest"
  }
}
在项目目录下输入命令
npm run test


单元测试 unit testing
集成测试 
jest初始化配置
项目的根目录
npx jest --test
会选择环境node或者jsdom
是否生成开启代码覆盖率 y（测试的代码对功能性的代码和业务逻辑的代码做了百分之多少的测试）
是否清楚测试过程中模拟调用的东西 y
生成jest.config.js

生成代码覆盖率报告
npx jest --coverage
coverage文件夹中index.html

匹配器
toBe内容相匹配
toEqual ===
toBeNull
toBeUndefined
toBeNaN
toBeTruthy
toBeFalsy
toBeGreaterThan 大于
toBeGreaterThanOrEqual
toBeLessThan
toBeLessThanOrEqual
toBeCloseTo
toMatch
toMatchObject
toContain
toHaveBeenCalled
toHaveBeenCalledTimes
toHaveBeenCalledWith
toHaveBeenNthCalledWith
toHaveReturned
toHaveReturnedTimes
toHaveReturnedWith
toHaveLastReturnedWith
toThrow
toThrowError
toThrowErrorMatchingSnapshot
toThrowErrorMatchingSnapshot
toThrowErrorMatchingInlineSnapshot
toThrowErrorMatchingInlineSnapshot
toThrowErrorMatchingInlineSnapshot
toThrowErrorMatchingInlineSnapshot
toThrowErrorMatchingInlineSnapshot
toThrowErrorMatchingInlineSnapshot

只支持commonjs规范，不支持es6
可以使用babel
安装babel转换器
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 --save-dev
安装babel-jest
npm install babel-jest --save-dev
在项目根目录下创建babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};

npm run test先检测安装babel核心包，找babelrc文件，进行转换之后进行测试

异步代码的测试
jest.fn().mockResolvedValue(1)

```