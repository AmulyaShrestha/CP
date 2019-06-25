// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCm5sjbUa6adNADH2DfzB0I1ATEV0hgObg',
        authDomain: 'interactive-tutorial-platform.firebaseapp.com',
        databaseURL: 'https://interactive-tutorial-platform.firebaseio.com',
        projectId: 'interactive-tutorial-platform',
        storageBucket: 'interactive-tutorial-platform.appspot.com',
        messagingSenderId: '760350988954',
        appId: '1:760350988954:web:ee4223a62d6c5c32'
    }
};
