'use strict';

const { copySync, emptyDir } = require('fs-extra');
const { join } = require('path');
const { cwd } = require('process');
const commonDestination = 'devextreme-rwa-demos';

const copyShell = () => {
    const destination = join(cwd(), commonDestination, 'shell');
    const source = join(cwd(), 'packages', 'shell', 'build');
    emptyDir(destination);
    copySync(source, destination);
};

console.log('Copy shell');

copyShell();