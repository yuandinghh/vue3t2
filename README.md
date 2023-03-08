# vue3t2
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
ghithub vue3  example 
See [Configuration Reference](https://cli.vuejs.org/config/).
Quick setup — if you’ve done this kind of thing before
or	
https://github.com/yuandinghh/vue3t2.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# vue3t2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yuandinghh/vue3t2.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/yuandinghh/vue3t2.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


# 成功修复可以上传 push
  git push --set-upstream origin main
  
To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

#真正上传 命令
 git push --set-upstream origin main

Enumerating objects: 240, done.
Counting objects: 100% (240/240), done.
Delta compression using up to 12 threads
Compressing objects: 100% (116/116), done.
Writing objects: 100% (240/240), 1.51 MiB | 1.69 MiB/s, done.
Total 240 (delta 177), reused 152 (delta 117), pack-reused 0
remote: Resolving deltas: 100% (177/177), done.
To https://github.com/yuandinghh/vue3t2.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
--------------- 2023-3-6 -------------------
Module not found: Error: Can’t resolve ‘less-loader’ in '文件位置’报错解决 
原因：less 、 less-loader模块未安装，但在中进行使用 
解决方法：npm install --save-dev less-loader less 
直接安装可能会存在版本太高问题的报错，进行npm run dev时项目无法启动

3-8 纸叠  ctrl+1  折叠所选内容