const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const open = require("open");
const config = require("./webpack.config.js");
const port =  config.devServer.port;
const host = config.devServer.host;

//开发环境热更新配置
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//改善开发人员使用webpack时控制台用户体验的一款工具
// config.plugins.push(new DashboardPlugin());

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(port, host, (err)=>{
	if(err){
		console.log('启动出错：' + err);
	}else{
		console.log('静态资源监听服务webpack-dev-server启动成功！访问地址：http://' + host + ':' + port + " 编译进行中～～～");
	}
	open('http://' + host + ':' + port + '/entry#/');
})