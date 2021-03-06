(function () {
  'use strict';

  angular
    .module('tags')
    .config(TagsRoutes);

  /* @ngInject */
  function TagsRoutes($stateProvider) {

    $stateProvider.
      state('tribes', {
        url: '/tribes',
        abstract: true,
        template: '<ui-view/>'
      }).
        state('tribes.list', {
          url: '',
          templateUrl: '/modules/tags/views/tribes-list.client.view.html',
          controller: 'TribesListController',
          controllerAs: 'tribesList',
          resolve: {
            // A string value resolves to a service
            TribesService: 'TribesService',
            tribes: function(TribesService) {
              return TribesService.query();
            }
          },
          data: {
            pageTitle: 'Tribes'
          }
        }).
        state('tribes.tribe', {
          url: '/:tribe',
          footerHidden: true,
          templateUrl: '/modules/tags/views/tribe.client.view.html',
          controller: 'TribeController',
          controllerAs: 'tribeCtrl',
          resolve: {
            // A string value resolves to a service
            TribeService: 'TribeService',
            tribe: function(TribeService, $stateParams) {
              return TribeService.get({
                tribeSlug: $stateParams.tribe
              });
            }
          },
          data: {
            pageTitle: 'Tribe'
          }
        });

  }

}());
