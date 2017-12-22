var orm=require("../config/orm.js");

var burgers={
	selectAll: function(cb){
		orm.selectAll("burgers",function(res){
			cb(res);
		});
	},
	insertOne: function(cols,vals,cb){
		orm.insertOne("burgers",function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition,cb){
		orm.update("burgers",function(res){
			cb(res);
		});
	}
};

module.exports=burgers;