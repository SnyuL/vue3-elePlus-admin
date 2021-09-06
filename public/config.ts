
// 此文件非必要，在生产环境下此文件配置可覆盖运行配置，开发环境下不起效
// 详情见 src/config/index.js
interface AppType{
	APP_NAME?:String;
	API_URL?:String;
}

const APP_CONFIG:AppType= {
	//标题
	APP_NAME: "SCUI",

	//接口地址，如遇跨域需使用nginx代理
	API_URL: "https://www.fastmock.site/mock/44c807475f7eeba73409792255781935/api"
}
