angular.module('app.controllers', ['ionic'])
     
.controller('homeCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope, $state, $ionicActionSheet, $ionicSideMenuDelegate, $ionicPopup) {
  // Set up chat groups with messages
  $scope.groups = [
    { name: 'Web App Group',
      imgSrc: "img/Boc83lhjQNq0NXuhM6sl_nigel.jpg",
      lastMessage: "Hey, how do I set up Ionic?",
      messages: [
        { user: 'Nigel', content: "Hey man what time are we meeting.", timestamp: '4/4 @ 2:30pm' },
        { user: 'Conor', content: "6 pm in the CS Lab.", timestamp: '4/4 @ 2:35pm' },
        { user: 'Nigel', content: "Okay i'll be there.", timestamp: '4/4 @ 2:40pm' },
        { user: 'Nigel', content: "Hey, how do I set up Ionic?", timestamp: '4/7 @ 7:30am' }
      ]
    },
    { name: 'CS570 Class Chat',
      imgSrc: "img/8607Y3KSIStiNw1U9Dom_tracy.jpg",
      lastMessage: "We have a quiz tomorrow.",
      messages: [
        { user: 'Professor', content: "We have a quiz tomorrow.", timestamp: '4/5 @ 12:14pm' }
      ]
    },
    { name: 'CS506 Project 1',
      imgSrc: "img/AKScFVblSK5iHpV6pstq_Drawing.png",
      lastMessage: "Is everyone's GitHub accounts working?",
      messages: [
        { user: 'Sven', content: "Is everyone's GitHub accounts working?", timestamp: '4/6 @ 2:30pm' }
      ]
    },
    { name: 'CS302 Class Chat',
      imgSrc: "img/1OqyVb4XQz6WYCPraFqR_Lab.jpg",
      lastMessage: "I believe it is due one week from today",
      messages: [
        { user: 'Matt', content: "I believe it is due one week from today", timestamp: '4/1 @ 3:46pm' }
      ]
    },
    { name: 'CS302 Group Chat',
      imgSrc: "img/tklIc2TaTMGodAGytjz7_Barry.jpg",
      lastMessage: "I'll meet you in the CS lobby at 5",
      messages: [
        { user: 'Taylor', content: "I'll meet you in the CS lobby at 5", timestamp: '4/4 @ 2:30pm' }
      ]
    },
    { name: 'UW Programming Help',
      imgSrc: "img/5uhMge7TTyenmgf0lnzl_Tiki.jpg",
      lastMessage: "I think Node.JS will work better than Angular",
      messages: [
        { user: 'Tiki', content: "I think Node.JS will work better than Angular", timestamp: '4/4 @ 2:30pm' }
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
        { text: 'Call Author' },
        { text: 'View Author Profile' }
      ],
      destructiveText: 'Delete',
      titleText: 'Follow-up on message',
      cancelText: 'Cancel',
      cancel: function() {
        $ionicActionSheet.hide();
      },
      buttonClicked: function(index) {
        if(index == 0) {
          $state.go('postMessage');
          $ionicActionSheet.hide();
        } else if (index == 1) {
          var callPopup = $ionicPopup.show({
            title: 'Call Author',
            template: 'Calling Nigel...',
            buttons: [
              { text: 'Cancel' }
            ]
          });
        } else {
          $state.go('tabsController.myProfile');
          $ionicActionSheet.hide();
        }
        return true;
      },
      destructiveButtonClicked: function() {
        var deletePopup = $ionicPopup.confirm({
          title: 'Delete Message?',
          template: 'Are you sure you want to delete this message?',
          okType: 'button-default',
          cancelType: 'button-calm'
        });

        deletePopup.then(function(res) {
          if (res) {
            console.log('Message deleted');
          } else {
            console.log('Message not deleted');
          }
        });
        
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

.controller('postCtrl', function($scope, $state, $ionicActionSheet, $ionicPopup) {
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

  // Called to select a post
  $scope.selectPost = function(post, index) {
    $scope.activePost = post;
  };

  // Called to post a message to a forum
  $scope.postOptions = function(post) {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Call Author' },
        { text: 'View Author Profile' }
      ],
      destructiveText: 'Delete',
      titleText: 'Post Options',
      cancelText: 'Cancel',
      cancel: function() {
        $ionicActionSheet.hide();
      },
      buttonClicked: function(index) {
        if(index == 0) {
          var callPopup = $ionicPopup.show({
            title: 'Call Author',
            template: 'Calling Brie...',
            buttons: [
              { text: 'Cancel' }
            ]
          });
        } else {
          $state.go('tabsController.myProfile');
          $ionicActionSheet.hide();
        }
        return true;
      },
      destructiveButtonClicked: function() {
        var deletePopup = $ionicPopup.confirm({
          title: 'Delete Post?',
          template: 'Are you sure you want to delete this post?',
          okType: 'button-default',
          cancelType: 'button-calm'
        });

        deletePopup.then(function(res) {
          if (res) {
            console.log('Post deleted');
          } else {
            console.log('Post not deleted');
          }
        });
        
        return true;
      }
    });
  };

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