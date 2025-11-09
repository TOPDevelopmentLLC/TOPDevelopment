module.exports = function (api) {
    api.cache(true);
    return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                extensions: [
                    ".ios.js",
                    ".android.js",
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx",
                    ".ios.ts",
                    ".android.ts",
                    ".ios.tsx",
                    ".android.tsx"
                ],
                alias: {
                    'components': './components',
                    'lib': './lib',
                    'hooks': './hooks',
                    'constants': './constants',
                },
            },
        ],
        'react-native-worklets/plugin',
    ],
    env: {
        production: {
            plugins: [
                'react-native-worklets/plugin'
            ],
        },
    }
}
};