module.exports = {
  name: 'websocket-chat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/websocket-chat',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
