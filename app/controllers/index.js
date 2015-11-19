
function myRefresher(e){
  postList.fetch({
      success: e.hide,
      error: e.hide
  });
}
$.index.open();

// User Create
/*var user = new Parse.User();
user.set("username", "style");
user.set("password", "mirror");


user.signUp(null, {
    success: function(user) {
        // Hooray! Let them use the app now.
        Ti.API.debug(user);
    },
    error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        Ti.API.error(error);
    }
});
*/

/*
var data = [
  { id : 'aaa', isData : true, value : 'test1'},
  { id : 'bbb', isData : false, value : 'test2'},
  { id : 'ccc', isData : true, value : 'test3'},
  { id : 'ddd', isData : false, value : 'test4'}
];

var items = [];

_.each(data, function(item, idx) {
  items.push({
      template: item.isData? "t2" : "t1",
      txt: {text: item.value },
      properties : {
        itemId : item.id
      }
  });
});

$.section.items = items;

$.listView.addEventListener('itemclick',function(e){
  alert(e);
});
*/

var postList = Alloy.createCollection("postlist");

postList.on("reset change", function(col) {
  console.log(col.models);

  var items = [];
  postList.each(function(model) {
    items.push({
      template : model.get("isData")? "t2" : "t1",
      txt : {text: model.get("content") },
      properties : {
        itemId : model.id
      }
    });
  });
  $.section.items = items;
});

postList.fetch();

$.listView.addEventListener("itemclick", function(e) {
  var clickModel = postList.get(e.itemId);

  var detailC = Alloy.createController("detail", {
    model : clickModel
  });

  $.getView().getActiveTab().open(detailC.getView());
});
