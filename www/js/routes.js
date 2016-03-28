angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page5',
    views: {
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.forum', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/forum.html',
        controller: 'forumCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.favorites'
      2) Using $state.go programatically:
        $state.go('tabsController.favorites');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/page11
      /page1/tab3/page11
  */
  .state('tabsController.favorites', {
    url: '/page11',
    views: {
      'tab5': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.nigelHayes', {
    url: '/page12',
    views: {
      'tab4': {
        templateUrl: 'templates/nigelHayes.html',
        controller: 'nigelHayesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ionicTutorials'
      2) Using $state.go programatically:
        $state.go('tabsController.ionicTutorials');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/page13
      /page1/tab3/page13
  */
  .state('tabsController.ionicTutorials', {
    url: '/page13',
    views: {
      'tab5': {
        templateUrl: 'templates/ionicTutorials.html',
        controller: 'ionicTutorialsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/ionicTutorials.html',
        controller: 'ionicTutorialsCtrl'
      }
    }
  })

  .state('login2', {
    url: '/page14',
    templateUrl: 'templates/login2.html',
    controller: 'login2Ctrl'
  })

  .state('signup2', {
    url: '/page15',
    templateUrl: 'templates/signup2.html',
    controller: 'signup2Ctrl'
  })

  .state('tabsController.myProfile', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('tabsController.post', {
    url: '/page17',
    views: {
      'tab2': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabsController.postMessage', {
    url: '/page18',
    views: {
      'tab4': {
        templateUrl: 'templates/postMessage.html',
        controller: 'postMessageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page8') 

});