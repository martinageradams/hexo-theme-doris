hexo.on('generateBefore', function () {

  let rootConfig = hexo.config

  if (hexo.locals.get) {
    // 获取 source/_data 目录下的文件
    let data = hexo.locals.get('data')

    // 如果存在 doris.yml 文件，就用它覆盖原来的配置文件
    if (data && data.doris) {
      hexo.theme.config = data.doris
    }
  }

  hexo.theme.config.rootConfig = rootConfig
});
