angular.module('app.controllers', ['ionic'])
     
.controller('homeCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope, $state, $ionicActionSheet, $ionicSideMenuDelegate) {
  // Set up chat groups with messages
  $scope.groups = [
    { name: 'Web App Group',
      imgSrc: "img/Boc83lhjQNq0NXuhM6sl_nigel.jpg",
      lastMessage: "Hey, how do I set up Ionic?",
      messages: [
        { user: 'Nigel', content: "Hey man what time are we meeting." },
        { user: 'Conor', content: "6 pm in the CS Lab." },
        { user: 'Nigel', content: "Okay i'll be there." },
        { user: 'Nigel', content: "Hey, how do I set up Ionic?" }
      ]
    },
    { name: 'CS570 Class Chat',
      imgSrc: "img/8607Y3KSIStiNw1U9Dom_tracy.jpg",
      lastMessage: "We have a quiz tomorrow.",
      messages: [
        { user: 'Professor', content: "We have a quiz tomorrow." }
      ]
    },
    { name: 'CS506 Project 1',
      imgSrc: "img/AKScFVblSK5iHpV6pstq_Drawing.png",
      lastMessage: "Is everyone's GitHub accounts working?",
      messages: [
        { user: 'Sven', content: "Is everyone's GitHub accounts working?" }
      ]
    },
    { name: 'CS302 Class Chat',
      imgSrc: "img/1OqyVb4XQz6WYCPraFqR_Lab.jpg",
      lastMessage: "I believe it is due one week from today",
      messages: [
        { user: 'Matt', content: "I believe it is due one week from today" }
      ]
    },
    { name: 'CS302 Group Chat',
      imgSrc: "img/tklIc2TaTMGodAGytjz7_Barry.jpg",
      lastMessage: "I'll meet you in the CS lobby at 5",
      messages: [
        { user: 'Taylor', content: "I'll meet you in the CS lobby at 5" }
      ]
    },
    { name: 'UW Programming Help',
      imgSrc: "img/5uhMge7TTyenmgf0lnzl_Tiki.jpg",
      lastMessage: "I think Node.JS will work better than Angular",
      messages: [
        { user: 'Tiki', content: "I think Node.JS will work better than Angular" }
      ]
    }
  ];

  $scope.activeGroup = $scope.groups[0];

  // Called to select a group
  $scope.selectGroup = function(group, index) {
    $scope.activeGroup = group;
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  // Called to toggle between chat groups and messages
  $scope.toggleGroups = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  // Called to select a message
  $scope.selectMessage = function(message, index) {
    $scope.activeMessage = message;
  };

  // Called to post a message to a forum
  $scope.followUp = function(message) {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Post to Forum' },
        { text: 'Call Author' }
      ],
      destructiveText: 'Delete',
      titleText: 'Follow-up on message',
      cancelText: 'Cancel',
      cancel: function() {
        $ionicActionSheet.hide();
      },
      buttonClicked: function(index) {
        $state.go('postMessage');
        $ionicActionSheet.hide();
        return true;
      }
    });
  };

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('forumCtrl', function($scope, $state) {
  // Set up forums with posts
  $scope.forums = [
    { name: 'UW CS302 Help',
      lastPost: "",
      posts: [
        { user: 'Brie', content: "Question about problem 1" },
        { user: 'Bucky', content: "Corrupted Eclipse install?" },
        { user: 'Hanshiro', content: "Java tutorial" }
      ]
    },
    { name: 'Ionic Framework Help',
      lastPost: "",
      messages: [
        { user: 'Michael', content: "How do I download Ionic?" },
        { user: 'Hikaru', content: "Do I need to use Node.js?" },
        { user: 'Amethyst', content: "Terminal Commands" },
        { user: 'Angel', content: "Pushing to git repo." },
        { user: 'Ravi', content: "Web applications with Ionic?" },
        { user: 'Erin', content: "Launching App" },
        { user: 'Carly', content: "How do I run it on my iphone?" }
      ]
    }
  ];

  // Called to select a forum
  $scope.selectForum = function(forum, index) {
    $scope.activeForum = forum;
    $state.go('tabsController.post');
  };

})
   
.controller('favoritesCtrl', function($scope) {

})
   
.controller('nigelHayesCtrl', function($scope) {

})
   
.controller('ionicTutorialsCtrl', function($scope) {

})
   
.controller('login2Ctrl', function($scope) {

})
   
.controller('signup2Ctrl', function($scope) {

})
   
.controller('myProfileCtrl', function($scope) {

})

.controller('postCtrl', function($scope) {
  // Set up forums with posts
  $scope.forums = [
    { name: 'UW CS302 Help',
      lastPost: "",
      posts: [
        { user: 'Brie', content: "Question about problem 1" },
        { user: 'Bucky', content: "Corrupted Eclipse install?" },
        { user: 'Hanshiro', content: "Java tutorial" }
      ]
    },
    { name: 'Ionic Framework Help',
      lastPost: "",
      messages: [
        { user: 'Michael', content: "How do I download Ionic?" },
        { user: 'Hikaru', content: "Do I need to use Node.js?" },
        { user: 'Amethyst', content: "Terminal Commands" },
        { user: 'Angel', content: "Pushing to git repo." },
        { user: 'Ravi', content: "Web applications with Ionic?" },
        { user: 'Erin', content: "Launching App" },
        { user: 'Carly', content: "How do I run it on my iphone?" }
      ]
    }
  ];
  $scope.activeForum = $scope.forums[0];
})

.controller('postMessageCtrl', function($scope, $ionicPopup, $timeout) {
  // Set up forums
  $scope.forums = [
    { name: 'UW CS302 Help',
      lastPost: "",
      posts: [
        { user: 'Brie', content: "Question about problem 1" },
        { user: 'Bucky', content: "Corrupted Eclipse install?" },
        { user: 'Hanshiro', content: "Java tutorial" }
      ]
    },
    { name: 'Ionic Framework Help',
      lastPost: "",
      messages: [
        { user: 'Michael', content: "How do I download Ionic?" },
        { user: 'Hikaru', content: "Do I need to use Node.js?" },
        { user: 'Amethyst', content: "Terminal Commands" },
        { user: 'Angel', content: "Pushing to git repo." },
        { user: 'Ravi', content: "Web applications with Ionic?" },
        { user: 'Erin', content: "Launching App" },
        { user: 'Carly', content: "How do I run it on my iphone?" }
      ]
    }
  ];

  // Called to select a forum
  $scope.selectForum = function(forum, index) {
    var postPopup = $ionicPopup.show({
      title: 'Post created'
    });
    $timeout(function() {
      postPopup.close();
    }, 1000);
  };

})