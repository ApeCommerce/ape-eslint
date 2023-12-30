#! /usr/bin/env node
import fs from 'fs-extra'

const devPkg = fs.readJsonSync('package.json')

const pkg = {
  name: '@apeframework/eslint-config',
  version: '__version__',
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: '__description__',
  keywords: ['ape', 'framework'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeCommerce/ape-eslint.git',
  },
  publishConfig: {
    access: 'public',
  },
  type: 'module',
  main: 'index.js',
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
};

fs.ensureDirSync('dist');

fs.writeJsonSync('dist/package.json', pkg, { spaces: 2 })

fs.copySync('LICENSE', 'dist/LICENSE')
fs.copySync('README.md', 'dist/README.md')

fs.copySync('src', 'dist')
