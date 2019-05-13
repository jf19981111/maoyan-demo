// 这个文件就是我公用的头部组件
import React from 'react'

// 引入样式
import { HeaderWrapper, Title } from './style'

class Header extends React.Component {
    render() {
        const { title, fixed } = this.props;
        return(
            <HeaderWrapper className={ fixed ? 'isFixed' : '' }>
                <Title>{ title }</Title>
            </HeaderWrapper>
        )
    }
}

// 设置 props 的默认值
Header.defaultProps = {
    title: '猫影电影',
    fixed: true,
}

export default Header;
