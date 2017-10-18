class ChatController {

  constructor($http, $scope, $location, $anchorScroll, $timeout) {
    $scope.newMessageText = '';
    $scope.messages = [];
    $scope.addedMessages = [];
    $scope.addMessage = this.addMessage;
    $scope.$location = $location;
    $scope.$anchorScroll = $anchorScroll;
    $scope.$timeout = $timeout;
    $http.get('config/data.json').then((json)=> {
        $scope.messages = json.data.messages;
     });
  }
  addMessage(newMessageText) {
    const that = this;
    const newId = Math.random().toString(36).substring(7);
    this.addedMessages.push({id: newId, text: newMessageText, processing: true, class: 'my-dialog-content'});
    this.newMessageText = '';
    this.$location.hash(newId);
    this.$anchorScroll();
    const currentIndex = this.addedMessages.length - 1;
    this.$timeout(function() { 
        that.addedMessages[currentIndex].processing = false;
        that.addedMessages[currentIndex].class = 'dialog-content';
    }, 2000);
  }
}

ChatController.$inject = ['$http', '$scope', '$location', '$anchorScroll', '$timeout'];

export default ChatController;
