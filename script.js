// Code goes here

function BuddyListCtrl($scope) {
  $scope.buddies = [{
    username: "t2",
    fname: "tania2",
    lname: "Leonian",
    statusc: "Available",
    email: "t@m.com",
    bday: "2/7/74",
    bio: "once upon a time ...", 
    details:false
  }, {
    username: "ja1234",
    fname: "John",
    lname: "Appleseed",
    statusc: "Idle",
    email: "t2t@m.com",
    bday: "2/7/75",
    bio: "Leonian", 
    details:false
  }, {
    username: "dhh",
    fname: "David",
    lname: "Hanson",
    statusc: "Busy",
    email: "tt@m.com2",
    bday: "2/7/78",
    bio: "Leonian", 
    details:false
  }];
  

  $scope.expandBuddy = function(buddy){
    // $scope.details = true;
    // var buddies = eval( $scope.buddies );

    // item.showfull = !item.showfull;
    for (var i = 0; i < $scope.buddies.length; i++)
    {
        var currentItem = $scope.buddies[i];
        if (currentItem == buddy)
        {
            currentItem.details = true;
        } 
    }

  };
  $scope.showForm = function() {
    $scope.showForm = true;
  };
  $scope.closeForm = function() {
    $scope.showForm = false;
  };
  $scope.addBuddy = function() {
    $scope.buddies.push({
        username: $scope.username,
        fname: $scope.fname,
        lname: $scope.lname,
        statusc: $scope.statusc,
        email: $scope.email,
        bday: $scope.bday,
        bio: $scope.bio, 
        details:false
    });
  };
  

  $scope.clear = function(buddy) {
    // confirm("are you sure ");
    var buddies = eval( $scope.buddies );
    buddies.splice(buddies.indexOf(buddy), 1);
    
  };

}