import User from './user';

// 增加
export const insert = _data => {
	let user = new User(_data);
	return user.save();
}

// 查询
export const select = (_whereData, _option) => {
	return User.find(_whereData, _option);
}

// 更新
export const modify = (_whereData, _updateData) => {
	return User.update(_whereData, _updateData, {
		multi: true // multi为true时更新多条，为false时更新一条
	});
}

// 删除
export const del = _whereData => {
	return User.remove(_whereData);
}

//class controller {
//	constructor() {
//
//	}
//	async insert(_data) {
//		let user = new User(_data);
//		let res = await user.save();
//		//console.log(res);
//		return res;
//	}
//}
//
//export default new controller();

// 增加
//export const insert = function(_data) {
//
//	let user = new User(_data);
//
//	user.save(function(err, res) {
//
//		if(err) {
//			console.log("Error:" + err);
//		} else {
//			console.log("Res:" + res);
//		}
//
//	});
//};

// 更新
//export const update = function(_whereData, _updateData) {
//	User.update(_whereData, _updateData, {
//		multi: true
//	}, function(err, res) { // multi为true时更新多条，为false时更新一条
//		if(err) {
//			console.log("Error:" + err);
//		} else {
//			console.log("Res:" + res);
//		}
//	});
//}

//function findByIdAndUpdate(){
//  let id = '56f2558b2dd74855a345edb2';
//  let updatestr = {'userpwd': 'abcd'};
//  
//  User.findByIdAndUpdate(id, updatestr, function(err, res){
//      if (err) {
//          console.log("Error:" + err);
//      }
//      else {
//          console.log("Res:" + res);
//      }
//  })
//}

// 删除
//export const del = function(_whereData) {
//	User.remove(_whereData, function(err, res) { // 删除多条
//		if(err) {
//			console.log("Error:" + err);
//		} else {
//			console.log("Res:" + res); // {"ok":1,"n":2}
//		}
//	})
//}

// 查询
//export const select = function(_whereData, _option) {
//	//  User.find(_whereData, function(err, res){
//	//      if (err) {
//	//          console.log("Error:" + err);
//	//      }
//	//      else {
//	//          console.log("Res:" + res);
//	//      }
//	//  });
//	User.find(_whereData, _option, function(err, res) {
//		if(err) {
//			console.log("Error:" + err);
//		} else {
//			console.log("Res:" + res);
//		}
//	});
//	//  User.count({}, function(err, res){
//	//      if (err) {
//	//          console.log("Error:" + err);
//	//      }
//	//      else {
//	//          console.log("Res:" + res);
//	//      }
//	//  });
//	//  User.findById("5a3c741122299f4cc8d03655", function(err, res){
//	//      if (err) {
//	//          console.log("Error:" + err);
//	//      }
//	//      else {
//	//          console.log("Res:" + res);
//	//      }
//	//  });
//
//	//  User.find({'username':{$regex:/m/i}}, function(err, res){
//	//      if (err) {
//	//          console.log("Error:" + err);
//	//      }
//	//      else {
//	//          console.log("Res:" + res);
//	//      }
//	//  });
//
//	//	let pageSize = 5; //一页多少条
//	//	let currentPage = 1; //当前第几页
//	//	let sort = {
//	//		'logindate': -1 //排序（按登录时间倒序）
//	//	}; 
//	//	let condition = {}; //条件
//	//	let skipnum = (currentPage - 1) * pageSize; //跳过数
//	//
//	//	User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function(err, res) {
//	//		if(err) {
//	//			console.log("Error:" + err);
//	//		} else {
//	//			console.log("Res:" + res);
//	//		}
//	//	});
//}