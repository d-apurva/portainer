angular.module('portainer').component('porAccessControlPanel', {
  templateUrl: 'app/directives/accessControlPanel/porAccessControlPanel.html',
  controller: 'porAccessControlPanelController',
  bindings: {
    // The component will display information about this resource control object.
    resourceControl: '=',
    // This component is usually displayed inside a resource-details view.
    // This variable specifies the type of the associated resource.
    // Accepted values: 'container', 'service' or 'volume'.
    resourceType: '<'
  }
});
