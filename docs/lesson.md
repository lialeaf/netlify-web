1、Git Hub上建立新仓库，并clone到本地目录

2、安装配置Node环境
npm init


3、安装webpack和开发服务器的HMR(热模块替换)
npm install webpack web-dev-server -g

4、在vscode中安装和配置所需要的插件
.vscode
配置vscode的run code: launch.json (node运行)

11、建立项目相关JS目录结构
Node使用的主目录：/src/es6
浏览器使用的主目录和文件：/public/es6 , /public/es6/main.js

12、建立主文件
index.html
index.js


13、在文件中包含所需的js库文件
/public/libs/jquery-2.2.4-min.js
/public/libs/paper-full.js  

14、其他静态资源目录和文件
CSS：/public/stylesheets
images: /public/images

99、验证环境和运行结果
在浏览器中(Go Live插件http服务器）：修改文件后，网页自动刷新：包括页面和控制台输出