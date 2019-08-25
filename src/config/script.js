let config;
if (process.env.APP_SERVER === "mock") {
  config = `({
    baseUrl: \`http://\${location.host}\`,
    noLoginAccess: '',
    noLoginUser: '',
  })`;
} else if (process.env.APP_SERVER === "dev") {
  config = `({
    baseUrl: \`http://\${location.host}/task-report/\`,
  })`;
} else if (process.env.APP_SERVER === "test") {
  const baseUrl = "http://10.135.77.96:8080";

  config = `({
    baseUrl: \`${baseUrl}\`,
  })`;
} else {
  const baseUrl = "https://xxx.com";

  config = `({
    baseUrl: \`${baseUrl}\`,
  })`;
}

module.exports = config;
