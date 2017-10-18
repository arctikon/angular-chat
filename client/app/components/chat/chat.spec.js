import ChatModule from './chat'

describe('Chat', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(ChatModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be chat', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('chat');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('chat', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<chat></chat>')(scope);
      scope.$apply();
    });

    /*it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('Found in chat.html');
    });*/

  });
});
