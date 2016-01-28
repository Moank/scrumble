angular.module 'Scrumble.sprint'
.directive 'sprintWidget', ->
  restrict: 'E'
  templateUrl: 'sprint/directives/sprint-widget/view.html'
  scope:
    project: '='
    sprint: '='
    callToActions: '='
    displayTitle: '='
  controller: 'SprintWidgetCtrl'
