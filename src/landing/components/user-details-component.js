angular.module('%module%.landing')
.component('userDetails', {
  bindings: {
    user: '<'
  },
  templateUrl: 'landing/views/user-details.tpl.html',
  controller: function () {
    this.updateRoles = function(user, roles){
      user.rolesText = roles.reduce(function (result, role) {
        if(role.isSelected) {
          result.push(role.name);
        }
        return result;
      }, []).join(', ');
    };
  }
});