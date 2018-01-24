import { DB } from '../config';
import mongoose from 'mongoose';

/**
 * 连接
 */
mongoose.connect(DB.URL);

const db = mongoose.connection;

/**
 * 连接成功
 */
db.on('connected', function() {
	console.log('Mongoose connection open to ' + DB.URL);
});

/**
 * 连接异常
 */
db.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
db.on('disconnected', function() {
	console.log('Mongoose connection disconnected');
});

export default db;