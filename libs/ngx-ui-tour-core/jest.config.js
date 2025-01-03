module.exports = {
    transform: {
        '^.+\\.ts$': ['ts-jest', {
            diagnostics: false
        }]
    },
    roots: ['libs/ngx-ui-tour-core/src'],
    verbose: true
};
