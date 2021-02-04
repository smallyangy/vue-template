const packageJsonBase = require('./package-base');
const fs = require('fs');
const path = require('path');

module.exports = (api, options, rootOptions) => {
    const { scss, vuex, router } = options;

    packageJsonBase.name = rootOptions.projectName;

    if (!scss) {
        delete packageJsonBase.devDependencies['sass'];
        delete packageJsonBase.devDependencies['sass-loader'];
    }

    if (!vuex) {
        delete packageJsonBase.dependencies['vuex'];
    }

    if (!router) {
        delete packageJsonBase.dependencies['vue-router'];
    }

    api.extendPackage(packageJsonBase);

    api.render((files) => {
        Object.keys(files)
            .filter(
                (path) => path.startsWith('src/') || path.startsWith('public/')
            )
            .forEach((path) => delete files[path]);
    });

    api.render('./templates/base/');
};

// 钩子将在文件被写入硬盘之后被调用。
module.exports.hooks = (api, options) => {
    api.afterInvoke(() => {
        const targetDir = api.generator.context;
        const { vuex, router } = options;
        if (!vuex) {
            delFolder(targetDir + '/src/store');
            console.log('删除store目录成功');
        }
        if (!router) {
            delFolder(targetDir + '/src/router');
            console.log('删除router目录成功');
        }
    });
};

// 删除非空目录的方法
function delFolder(path) {
	// 第一步读取文件内部的文件
	let arr = fs.readdirSync(path);
	// console.log(arr);
	// 遍历数组
	for (let i = 0; i < arr.length; i++) {
		// 获取文件的状态
		let stat = fs.statSync(path + '/' + arr[i]);
		// 判断是文件还是文件夹
		if (stat.isDirectory()) {
			// 说明是文件夹  递归调用
			delFolder(path + '/' + arr[i]);
		} else {
			// 说明是文件
			fs.unlinkSync(path + '/' + arr[i]);
		}
	}
	// 遍历完成之后 删除最外层的文件
	fs.rmdirSync(path);
}
