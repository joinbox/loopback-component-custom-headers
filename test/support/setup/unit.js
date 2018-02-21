const path = require('path');
const Microservice = require('@joinbox/loopback-microservice');

before('boot microservice', async function() {
    const appRootDir = path.resolve(__dirname, '../server');
    const options = {
        appRootDir,
        bootDirs: [`${appRootDir}/boot`, 'loopback-dummy-project/boot'],
        env: 'test',
    };

    this.service = await Microservice.boot(options);
});
