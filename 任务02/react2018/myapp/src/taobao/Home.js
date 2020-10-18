import React from 'react'

// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>
const Home = () => {
    return (
        <div>
            
            
            <i style={{fontSize:100,color:'red'}} className='iconfont icon-dingdan'></i>
        </div>
    )
}

export default Home
