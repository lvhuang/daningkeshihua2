// interface IConfig {
//     baseUrl: string
//     loginPath: string
//     noLoginAccess: string
//     noLoginUser: string
// }

interface Config {
  baseUrl: string;
}

const config: Config = codegen.require("./script");

export default config;
