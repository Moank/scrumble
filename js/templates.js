angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html lang=\"en\" ng-app=\"NotSoShitty\"><head><title>Not so shitty</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"css/vendor.css\"><link rel=\"stylesheet\" href=\"css/app.css\"><link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"//cdn.materialdesignicons.com/1.3.41/css/materialdesignicons.min.css\"></head><body><md-content class=\"container\"><md-toolbar><div class=\"md-toolbar-tools\"><h2><span>Not So Shitty</span></h2></div></md-toolbar><md-tabs class=\"md-primary md-hue-2\"><md-tab data-ui-sref=\"project\"><md-tab-label> Project</md-tab-label></md-tab><md-tab data-ui-sref=\"current-sprint\"><md-tab-label> Sprint</md-tab-label></md-tab><md-tab data-ui-sref=\"daily-report\"><md-tab-label> Daily Mail</md-tab-label></md-tab></md-tabs><main ui-view class=\"container\"></main></md-content><script src=\"js/vendor.js\"></script><script src=\"js/templates.js\"></script><script src=\"js/app.js\"></script></body></html>");
$templateCache.put("daily-report/states/view.html","<md-content layout-padding><form name=\"dailyReportCreate\"><h2 class=\"md-title\">Daily Mail</h2><div layout layout-sm=\"column\"><md-input-container flex><label>To</label><input ng-model=\"dailyReport.to\" type=\"email\"></md-input-container><md-input-container flex><label>Cc</label><input ng-model=\"dailyReport.cc\" type=\"email\"></md-input-container></div><div layout layout-sm=\"column\"><md-input-container flex><label>Title</label><input ng-model=\"dailyReport.title\"></md-input-container></div><div><md-input-container class=\"md-block\"><label>Body</label><textarea ng-model=\"dailyReport.body\" columns=\"1\" rows=\"5\"></textarea></md-input-container><md-button ng-click=\"send()\" class=\"md-raised md-primary\">Send</md-button><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save template</md-button></div></form></md-content>");
$templateCache.put("common/directives/trello-avatar/view.html","<div><img ng-if=\"hash\" alt=\"{{ member.username }}\" ng-src=\"https://trello-avatars.s3.amazonaws.com/{{hash}}/{{size}}.png\" style=\"border-radius: 50%;\" class=\"md-avatar member-avatar\"><div ng-if=\"!hash\" class=\"member-avatar initials\">{{ member.initials }}</div></div>");
$templateCache.put("login/directives/profil-info/view.html","<div><md-button ng-click=\"toggleProfilCard()\" aria-label=\"Profil\" class=\"md-icon-button profil-button\"><trello-avatar member=\"userInfo\"></trello-avatar></md-button><md-card ng-if=\"showProfilCard\" class=\"profil-details\"><md-list><md-list-item class=\"md-3-line\"><a href=\"{{userInfo.url}}\" target=\"_blank\" class=\"picture-link\"><trello-avatar member=\"userInfo\" size=\"170\"></trello-avatar></a><div class=\"md-list-item-text\"><h3>Trello Account</h3><p>{{ userInfo.fullName }}</p><p>{{ userInfo.email }}</p></div><md-button ng-click=\"logout()\" class=\"md-warn\">Logout</md-button></md-list-item><md-divider></md-divider><md-list-item class=\"md-3-line\"><trello-avatar member=\"userInfo\" class=\"md-avatar\"></trello-avatar><div class=\"md-list-item-text\"><h3>Gmail Account</h3><md-button>Login</md-button></div></md-list-item></md-list></md-card></div>");
$templateCache.put("login/states/login/view.html","<div class=\"container\"><div class=\"jumbotron\"><h1>Login</h1><a ng-click=\"login()\" class=\"btn btn-primary btn-lg\">Login with trello</a></div></div>");
$templateCache.put("project/directives/resources-by-day/view.html","<div layout=\"row\" class=\"resources-by-day\"></div><md-data-table-container><table md-data-table><thead><tr><td>&nbsp;</td><td layout-align=\"center center\" ng-repeat=\"(j, member) in members\"><trello-avatar member=\"member\"></trello-avatar></td></tr></thead><tbody><tr ng-repeat=\"(i, day) in days\"><td>{{ day.date | date : \'EEEE\' }}</td><td ng-repeat=\"(j, member) in members\"><md-button ng-click=\"resourceClick(i,j)\" class=\"md-primary row\">{{ matrix[i][j] }}</md-button></td></tr></tbody></table></md-data-table-container>");
$templateCache.put("project/directives/select-people/view.html","<div ng-repeat=\"member in members\" ng-class=\"{\'selected\': teamCheck[member.id]}\" class=\"member-select\"><label ng-click=\"check()\"><trello-avatar member=\"member\" class=\"member-select-image\"></trello-avatar><input type=\"checkbox\" ng-model=\"teamCheck[member.id]\"></label></div>");
$templateCache.put("project/states/main/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"80\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">PROJECT SETTINGS</h2><md-input-container layout=\"column\"><label>Select a board: </label><md-select ng-model=\"project.boardId\"><md-option ng-value=\"board.id\" ng-repeat=\"board in boards\">{{ board.name }}</md-option></md-select></md-input-container><div ng-if=\"project.boardId\" layout=\"column\"><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"blocked\" column</label><md-select ng-model=\"project.columnMapping.blocked\" ng-change=\"save()\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"to validate\" column</label><md-select ng-model=\"project.columnMapping.toValidate\" ng-change=\"save()\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><h4 class=\"md-title\">The team<md-button ng-click=\"clearTeam()\" class=\"md-warn\">Clear</md-button></h4><md-data-table-container><table md-data-table><thead><tr><th name=\"People\"></th><th name=\"Email\"></th></tr></thead><tbody><tr ng-repeat=\"dev in project.team.dev\"><td><trello-avatar member=\"dev\"></trello-avatar></td><td><md-input-container><label>Email</label><input ng-model=\"dev.email\"></md-input-container></td></tr><tr ng-repeat=\"rest in project.team.rest\"><td><trello-avatar member=\"rest\"></trello-avatar></td><td><md-input-container><label>Email</label><input ng-model=\"rest.email\"></md-input-container></td></tr></tbody></table></md-data-table-container><div class=\"select-teams\"><div class=\"select-dev-team\"><div>Select the dev team</div><select-people members=\"boardMembers\" selected-members=\"project.team.dev\"></select-people></div><div class=\"select-rest-team\"><div>Select the rest of the team</div><select-people members=\"boardMembers\" selected-members=\"project.team.rest\"></select-people></div></div></div></md-card></div>");
$templateCache.put("sprint/directives/burndown/view.html","<div id=\"bdcgraph\"></div>");
$templateCache.put("sprint/states/current-sprint/view.html","<md-card class=\"md-whiteframe-z2 bdc-container\"><burndown data=\"tableData\"></burndown></md-card><md-card class=\"md-whiteframe-z2 bdc-table\"><md-data-table-container><table md-data-table><thead><tr><th name=\"Day\"></th><th name=\"Standard\"></th><th name=\"Done\"></th></tr></thead><tbody><tr ng-repeat=\"day in tableData\" ng-class=\"{\'md-selected\': currentDayIndex == $index}\"><td>{{ day.date | date : \'EEEE\' }}</td><td>{{ day.standard.toFixed(1) }}</td><td><section layout=\"row\" layout-sm=\"column\" layout-wrap><md-input-container flex=\"50\"><label>Done</label><input ng-model=\"day.done\" type=\"number\"></md-input-container><div layout-align=\"center center\" ng-if=\"currentDayIndex == $index\"><md-button ng-click=\"fetchTrelloDonePoints()\" class=\"md-primary\">Fetch from Trello</md-button></div></section></td></tr></tbody></table></md-data-table-container><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save</md-button></section></md-card><md-button ui-sref=\"new-sprint\" class=\"md-fab md-primary new-sprint-fab\"><md-icon md-svg-icon=\"plus\"></md-icon><md-tooltip md-direction=\"top\">Create a new sprint</md-tooltip></md-button>");
$templateCache.put("sprint/states/new-sprint/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"80\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">NEW SPRINT</h2><md-input-container><label>Sprint Number</label><input ng-model=\"sprint.number\" ng-change=\"save()\"></md-input-container><md-input-container><label>Select the done column</label><md-select ng-model=\"sprint.doneColumn\" ng-change=\"save()\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardLists\">{{ column.name }}</md-option></md-select></md-input-container><div flex><md-datepicker ng-model=\"sprint.dates.start\" md-placeholder=\"Start Date\"></md-datepicker><md-datepicker ng-model=\"sprint.dates.end\" md-placeholder=\"End date\"></md-datepicker></div><div ng-if=\"sprint.dates.days.length &gt; 0\" class=\"man-days\"><resources-by-day days=\"sprint.dates.days\" matrix=\"sprint.resources.matrix\" members=\"devTeam\"></resources-by-day><md-input-container><label>Total sprint points</label><input nss-round ng-model=\"sprint.resources.totalPoints\"></md-input-container><md-input-container><label>Sprint speed</label><input nss-round ng-model=\"sprint.resources.speed\"></md-input-container></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-disabled=\"!activable\" ng-click=\"activate()\" class=\"md-raised md-primary\">START THE SPRINT</md-button></section></md-card></div>");}]);