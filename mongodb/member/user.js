import mongoose from 'mongoose';

const schema = mongoose.Schema;

const UserSchema = new schema({
	username: {//用户账号
		type: String
	}, 
	userpwd: {//密码
		type: String
	}, 
	userage: {//年龄
		type: Number
	}, 
	logindate: {//最近登录时间
		type: Date
	} 
});

export default mongoose.model('User', UserSchema);