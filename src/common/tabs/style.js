import styled from 'styled-components'

export const TabsWrapper = styled.ul`
    height: 48px;
    line-height: 48px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #d8d8d8;
    display: flex;
    background: #fff;
`

export const TabItem = styled.li`
    flex: 1;
    font-size: 10px;
    text-align: center;
    a {
        color: #696969;
        text-decoration: none;
        &.active {
            color: #f03d37;
        }
    }
`
