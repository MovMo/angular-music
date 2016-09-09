// 应用程序入口
// 建立一个HTTP服务
// 1.将client文件夹中文件可以作为静态文件访问
// 2.提供数据服务

const express = require('express')

// 构建web应用程序对象	用来处理请求
const app = express()

// 让client 目录下的文件可以直接访问
app.use(express.static('./client'))
app.use('/node_modules', express.static('./node_modules'))
app.use('/artists', express.static('./server/artists'))

const fs = require('fs')
const path = require('path')
app.get('/list', (req, rea) => {
	fs.readdir(path.resolve(__dirname, './server/music'), (error, files) => {
		if (error || !files.length) {
			return res.jsonp({massage: 'server error'})
		}
		const data = []
		files.forEach( file => {
			const info = file.replace(' - ', '&&&').split('&&&')
			if (info.length == 2) {
				data.push({title: info[1], artist: info[0], file: file})
			}
		})
		return jsonp(data)
	})
})

app.listen(7480, error => {
	if (error) throw error
	console.log('server is ready')
})
