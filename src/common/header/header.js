// 这个文件就是我公用的头部组件
import React from 'react'

// 引入样式
import { HeaderWrapper, Title } from './style'

class Header extends React.Component {
    render() {
        return(
            <HeaderWrapper>
                <Title>猫眼电影</Title>
            </HeaderWrapper>
        )
    }
}

export default Header;
