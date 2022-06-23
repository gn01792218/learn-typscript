# Learn Typscript By Scratch
## Project setup
```
npm install
``` 
## Project Run
```
npm start
```
## Compile typscript
## 編譯單個檔案
```
tsc file.ts
```
## 同時編譯多個檔案
### 1.先產生tsconfig.json檔
```
tsc --init
```
### 2.設定需要編譯的檔案
```
"compilerOptions": {...略
},
"include": [
    "./**/*",  //編譯根目錄下的任意目錄(**)，下的任意文件(*)
],
"exclude":[   //設置不需要被編譯的東西
		"node_modules"
	]
```
### 3.即時的編譯所有檔案
```
tsc -w
```
# Notion 筆記
## Typscript https://acute-phone-e4f.notion.site/c68ad873db6143fbad6a8cc24c6879b6?v=8061840cbac74b37b25713d2ad032b16