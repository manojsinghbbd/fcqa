(function(){'use strict';// #-------------------------------# //
// #---- Helper (ssDueDateHlp) ----# //
/*@ngInject*/function a(a,b){//	helper functions
//	is it past the due date for the form?
function c(a,b){var c=b.diff(a,'days',!0);return Math.floor(c)}//	user-friendly display of the due date
function d(d,e){if(null==d._dueDateUtc)return a.foreverFuture();var f=b.safeNowRelativeTo(e).startOf('day'),g=b.utcIsoToRelativeMoment(d._dueDateUtc,e);return c(f,g)}return{dueStatus:function(a,c){var e=d(a,c);if(0>e&&!a.isComplete){var f=-1*e,g=1<f?'s':'';return{class:'overdue',statusFriendly:f+' day'+g+' overdue'}}if(0===e)return{class:'due-soon',statusFriendly:'due today'};if(0<e&&3>=e){var h=1<e?'s':'';return{class:'due-soon',statusFriendly:'due in '+e+' day'+h}}return 3<e?{class:'',statusFriendly:'due '+b.utcIsoToRelativeMoment(a._dueDateUtc,c).format('M/D/YY')}:null},isOverdue:function(a,b){return 0>d(a,b)}}}// #-- END Helper (ssDueDateHlp) --# //
// #-------------------------------# //
a.$inject=['ssDateHlp','ssDateByOrgHlp'],angular.module('super-suit-helpers').factory('ssDueDateHlp',a)})();
//# sourceMappingURL=form-date.js.map
