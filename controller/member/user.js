'use strict';
import { DB } from '../../config';
import Base from '../../common/base';
import { insert, modify, del, select } from '../action';

class User extends Base {
	constructor(name, grade, skill) { //若不扩展Leader的构造函数，就可以将constructor这一步省去
		super(name);
		this.grade = grade;
		this.skill = skill;
	}
	async register(req, res, next) {
		//		try{
		//				if (!username) {
		//					throw new Error('用户名参数错误');
		//				}else if(!password){
		//					throw new Error('密码参数错误');
		//				}else if(!captcha_code){
		//					throw new Error('验证码参数错误');
		//				}
		//			}catch(err){
		//				console.log('登陆参数错误', err);
		//				res.send({
		//					status: 0,
		//					type: 'ERROR_QUERY',
		//					message: err.message,
		//				})
		//				return
		//			}
		let _res;
		
		try {
			_res = await insert({
				username: req.body.userName, //用户账号
				userpwd: req.body.userPwd, //密码
				userage: req.body.userAge, //年龄
				logindate: new Date() //最近登录时间
			}, DB.TABLE.USER);
		} catch(err) {
			console.error("注册错误", err);
			res.send({
				name: "注册失败",
				message: "注册失败",
			});
			return;
		}
		res.send(_res);
	}
	async login(req, res, next) {
		let _res;
		try {
			_res = await select({
				userage: req.body.userAge
			}, {
				username: 1, // 1表示查询输出该字段，0表示不输出
				userage: 1,
				_id: 0
			}, DB.TABLE.USER);
		} catch(err) {
			console.error("登陆错误", err);
			console.log("DB", DB);
			res.send({
				name: "登陆失败",
				message: "登陆失败",
			});
			return;
		}
		res.send(_res);
	}
	async modify(req, res, next) {
		let _res;
		try {
			_res = await modify({
				username: req.body.userName
			}, {
				userpwd: req.body.userPwd
			}, DB.TABLE.USER);
		} catch(err) {
			console.error("更新错误", err);
			res.send({
				name: "更新失败",
				message: "更新失败",
			});
			return;
		}
		res.send(_res); //{"n":0,"nModified":0,"ok":1}
	}
	async del(req, res, next) {
		let _res;
		try {
			_res = await del({
				username: req.body.userName
			}, DB.TABLE.USER);
		} catch(err) {
			console.error("删除错误", err);
			res.send({
				name: "删除失败",
				message: "删除失败",
			});
			return;
		}
		res.send(_res); // {"ok":1,"n":2}
	}
}

export default new User();