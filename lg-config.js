module.exports = {
    projectElement: 'single',
    useEslint: true,
    dev: {
        devServer_config: {
            contentBase: './dist',
            port: 9000,
            compress: true,
            hot: true,
            open: 'Google Chrome',
            publicPath: '/a/b/',
            openPage: 'a/b/'
        },
        useMock: true,
        path: '/a/b/',
        // assets path
        publicPath: '/a/b/',
        env: {
            api_prefix: '',
            routerPath: '/a/b'
        }
    },
    prod: {
        path: '/a/b/',
        publicPath: '/a/b/',
        env: {
            api_prefix: '//u.jr.jd.com',
            routerPath: '/a/b'
        }
    }
}