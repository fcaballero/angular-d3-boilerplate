angular.module('%module%.landing')
.component('roleSelector', {
  bindings: {
    roles: '<',
    onUpdate: '&'
  },
  templateUrl: 'landing/views/role-selector.tpl.html',
  controller: function(){
    this.$onChanges = function (changeObj) {
      this.mappedRoles = changeObj.roles.currentValue;
    };

    this.updateRoles = function () {
      this.onUpdate({roles: this.mappedRoles});
    }
  }
});