import {get, post,put, JsomPost, del, JsomPut} from './util.js'
// 获取消息列表
export function getapplication(data) {
	return JsomPost({
		url:global.memberUrl+'/pay/message_center/',
		data:data
	})
}

// 获取列表详情
export function getapplicationContent(data) {
	return JsomPost({
		url:global.memberUrl+'/pay/message_center_content/',
		data:data
	})
}

// 创建声音
export function creatVoice(data) {
	return JsomPost({
		url:global.baseUrl+'/api/sv_voice/volcengine_voice_train',
		data:data
	})
}

// 训练记录
export function getVoiceList(data) {
	return get({
		url:global.baseUrl+'/api/sv_voice/volcengine_voice_train',
		data:data
	})
}

// 重新训练
export function againVoice(data) {
	return JsomPut({
		url:global.baseUrl+'/api/sv_voice/volcengine_voice_train',
		data:data
	})
}

// 启用音色
export function openVoice(data) {
	return put({
		url:global.baseUrl+'/api/sv_voice/enable_voice',
		data:data
	})
}

// 声音id余量查询
export function getVoiceIdQuery(data) {
	return get({
		url:global.baseUrl+'/api/sv_voice/VoiceIdQuery',
		data:data
	})
}

// 声音训练可用次数
export function getVoiceCount(data) {
	return get({
		url:global.baseUrl+'/api/sv_voice/get_vid_number',
		data:data
	})
}

// 获取底膜列表
export function getBaseModel(data) {
	return get({
		url:global.figureUrl+'/beings/base_models/',
		data:data
	})
}

// 创建数字分身
export function creatModel(data) {
	return post({
		url:global.figureUrl+'/beings/models/',
		data:data
	})
}

// 修改数字分身
export function editModel(data) {
	return JsomPut({
		url:global.figureUrl+'/beings/models/',
		data:data
	})
}

// 删除数字分身
export function delModel(data) {
	return del({
		url:global.figureUrl+'/beings/models/',
		data:data
	})
}

// 获取数字分身列表
export function getModelList(data) {
	return get({
		url:global.figureUrl+'/beings/models/',
		data:data
	})
}

// 数字分身互动
export function getInteract(data) {
	return post({
		url:global.figureUrl+'/beings/interact/',
		data:data
	})
}


// 创建用户留言
export function creatMessage(data) {
	return post({
		url:global.figureUrl+'/beings/message/',
		data:data
	})
}

// 获取用户留言
export function getMessage(data) {
	return get({
		url:global.figureUrl+'/beings/message/',
		data:data
	})
}

// 删除用户留言
export function delMessage(data) {
	return del({
		url:global.figureUrl+'/beings/message/',
		data:data
	})
}

// 获取统计记录
export function getStats(data) {
	return post({
		url:global.figureUrl+'/beings/stats/',
		data:data
	})
}

// 获取生成海报相关配置
export function getShare(data) {
	return post({
		url:global.figureUrl+'/beings/share/',
		data:data
	})
}

// 访问次数更新
export function updateVisit(data) {
	return put({
		url:global.figureUrl+'/beings/visit/',
		data:data
	})
}

// 获取设备变量（用于判断是否是ios机型）
export function getEnv(data) {
	return get({
		url:global.figureUrl+'/beings/env_change/',
		data:data
	})
}


// 获取数字分身文件
export function getBeings(data) {
	return get({
		url:global.figureUrl+'/beings/agent_files',
		data:data
	})
}

// 数字分身文件编辑
export function putBeings(data) {
	return put({
		url:global.figureUrl+'/beings/agent_files/'+data.file_code,
		data:data
	})
}

// 数字分身文件删除
export function delBeings(data) {
	return del({
		url:global.figureUrl+'/beings/agent_files/'+data,
		data:''
	})
}