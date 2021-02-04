module.exports = {
    name: 'base',
    version: '0.1.0',
    private: true,
    scripts: {
        serve: 'vue-cli-service serve',
        build: 'vue-cli-service build',
        lint: 'vue-cli-service lint',
    },
    dependencies: {
        'core-js': '^3.6.5',
        vue: '^2.6.11',
        'vue-router': '^3.5.1',
        vuex: '^3.6.2',
    },
    devDependencies: {
        '@vue/cli-plugin-babel': '~4.5.0',
        '@vue/cli-plugin-eslint': '~4.5.0',
        '@vue/cli-service': '~4.5.0',
        'babel-eslint': '^10.1.0',
        eslint: '^6.7.2',
        'eslint-plugin-vue': '^6.2.2',
        sass: '^1.32.6',
        'sass-loader': '^10.1.1',
        'vue-template-compiler': '^2.6.11',
    },
    eslintConfig: {
        root: true,
        env: {
            node: true,
        },
        extends: ['plugin:vue/essential', 'eslint:recommended'],
        parserOptions: {
            parser: 'babel-eslint',
        },
        rules: {},
    },
    browserslist: ['> 1%', 'last 2 versions', 'not dead'],
};
