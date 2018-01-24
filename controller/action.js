import { DB } from '../config';
import UserModel from '../mongodb/member/user';

// 增加
export const insert = (_data, tableName) => {
	let table;
	switch(tableName) {
		case DB.TABLE.USER:
			table = new UserModel(_data);
			break;
		default:
			break;

	}
	return table.save();
}

// 查询
export const select = (_keyData, _option, tableName) => {
	switch(tableName) {
		case DB.TABLE.USER:
			return UserModel.find(_keyData, _option);
			break;
		default:
			break;
	}
}

// 更新
export const modify = (_keyData, _updateData, tableName) => {
	switch(tableName) {
		case DB.TABLE.USER:
			return UserModel.update(_keyData, _updateData, {
				multi: true // multi为true时更新多条，为false时更新一条
			});
			break;
		default:
			break;
	}
}

// 删除
export const del = (_keyData, tableName) => {
	switch(tableName) {
		case DB.TABLE.USER:
			return UserModel.remove(_keyData);
			break;
		default:
			break;
	}
}


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