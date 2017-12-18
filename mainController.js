//This is the main controller of the new application. Add any necessary logic here. You may also want to register your custom tools menu items (right hand-side menu) in this file.

(function (angular) {

    var HelloController = function (toolsMenuService) {

        toolsMenuService.register([

           {

               label: 'Click me',

               onSelected: function () {

                   alert('I was clicked.');

               }

           },

           {

               label: 'Click me too',

               onSelected: function () {

                   alert('I was clicked too.')

               }

           }

        ]);

    };



    angular

        .module('PoseidonApplication1')

        .controller('PoseidonApplication1Controller', HelloController);

})(angular)
