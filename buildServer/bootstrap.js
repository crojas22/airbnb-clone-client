'use strict';

require('ignore-styles');

require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['env', 'react-app'],
  plugins: ['syntax-dynamic-import', 'dynamic-import-node', 'react-loadable/babel']
});

require('./index');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9ib290c3RyYXAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImlnbm9yZSIsInByZXNldHMiLCJwbHVnaW5zIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRLGVBQVI7O0FBRUFBLFFBQVEsZ0JBQVIsRUFBMEI7QUFDeEJDLFVBQVEsQ0FBRSxnQkFBRixDQURnQjtBQUV4QkMsV0FBUyxDQUFDLEtBQUQsRUFBUSxXQUFSLENBRmU7QUFHeEJDLFdBQVMsQ0FDUCx1QkFETyxFQUVQLHFCQUZPLEVBR1Asc0JBSE87QUFIZSxDQUExQjs7QUFVQUgsUUFBUSxTQUFSIiwiZmlsZSI6ImJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2lnbm9yZS1zdHlsZXMnKTtcblxucmVxdWlyZSgnYmFiZWwtcmVnaXN0ZXInKSh7XG4gIGlnbm9yZTogWyAvKG5vZGVfbW9kdWxlcykvIF0sXG4gIHByZXNldHM6IFsnZW52JywgJ3JlYWN0LWFwcCddLFxuICBwbHVnaW5zOiBbXG4gICAgJ3N5bnRheC1keW5hbWljLWltcG9ydCcsXG4gICAgJ2R5bmFtaWMtaW1wb3J0LW5vZGUnLFxuICAgICdyZWFjdC1sb2FkYWJsZS9iYWJlbCdcbiAgXVxufSk7XG5cbnJlcXVpcmUoJy4vaW5kZXgnKTsiXX0=