2018级React程序开发

# registry config

### 查看 npm 镜像

```
 npm get registry
 yarn config get registry
```

## 临时使用淘宝源

```
npm install express --registry https://registry.npm.taobao.org 
```

## 永久设置淘宝源

```
 npm config set registry http://registry.npm.taobao.org
 yarn config set registry http://registry.npm.taobao.org/
```

## 切回默认源

```
 npm config set registry https://registry.npmjs.org
```