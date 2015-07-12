(function() {
  'use strict';

  // Used to receive basic info to show avatars etc...
  angular
    .module('users')
    .factory('UsersMini', UsersMiniFactory);

  /* @ngInject */
  function UsersMiniFactory($resource) {
      console.log('UsersMiniFactory');
    return $resource('/api/users/mini/:userId', {
      userId:'@id'
    }, {
      get: {
        method: 'GET'
      }
    });
  }

})();