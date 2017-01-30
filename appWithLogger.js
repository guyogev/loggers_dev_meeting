/* init logger */
window.Logger = log; // place logger on window. now we can access it from anywhere, including console
var debugModEnvVar = false;
var defaultLevel = debugModEnvVar ? 'debug' : 'warn'
Logger.setLevel(defaultLevel); // init logger level at app init (from env var).

// quick hooks to control log level
window.startDebugging = function () {
  Logger.setLevel('debug')
}
window.stopDebugging = function () {
  Logger.setLevel(defaultLevel)
}
window.killLog = function () {
  Logger.setLevel('silent')
}

/* init app */ 
var app = angular.module('app', []);

angular.element(document).ready(function () {
  Logger.debug("angular.element(document).ready: bootstraping app");
  angular.bootstrap(document, ['app']);
});

app.controller('myCtl', function($scope, $interval, $timeout){
  
  var fetchSomethingFromServer = function () {
    // initialize stuff after data is arrives
    $timeout(function () {
      $scope.count = Math.round(Math.random() *1000);
    }, 5000);
  }
  
  var inc = function() {
    if (!$scope.count) {
      Logger.warn("myCtl.inc: invalid $scope.count!", $scope.count)
    }
    $scope.count += 1;
    Logger.debug("myCtl.inc:", $scope.count)
  }
  
  $scope.init = function () {
    fetchSomethingFromServer();
    $interval(inc, 1000);
  }
});






window.logsDemo = function () {
  console.trace('were am I ?????')
  console.debug('mmm... this is this might be interesting sometimes...')
  console.info('very nice, good to have you with us')
  console.warn("hey stop what's that sound everybody look what's going down");
  console.error('Houston, we have a problem')
}

window.LogObj = function () {
    var obj = {some:
    {nested:
      {object:
        {that:
          {is:
            {hard:
              {to: 'read!'}
            }
          }
        }
      }
    }
  }
  console.log(obj)
  console.log(JSON.stringify(obj))
}

window.LogArr = function () {
  var arr = [
    {key: 'value 1'},
    {key: 'value 2'},
    {key: 'value 3'},
    {key: 'value 4'},
    {key: 'value 5'},
  ]
  console.table(arr)
}