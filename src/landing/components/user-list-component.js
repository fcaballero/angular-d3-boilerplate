angular.module('%module%.landing')
  .component('userList', {
      bindings: {
        users: '<',
        roles: '='
      },
      templateUrl: 'landing/views/user-list.tpl.html',
      controller: function () {
        var self =this;

        this.$onChanges = function (changesObj) {
          this.mappedUsers = changesObj.users.currentValue.map(function (user) {
            return {
              initials: mapInitials(user),
              name: user.username,
              roles: self.roles.map(function(role) {
                return {name: role, isSelected: _.includes(user.roles, role)};
              }),
              rolesText: user.roles.split(';').join(', ')
            }
          });
        };

        function mapInitials(user) {
          return (user.firstname.split('-').reduce(function (result, word) {
            return result + word[0];
          }, '') + user.lastname[0]).toUpperCase();
        }
      }
    }
  );