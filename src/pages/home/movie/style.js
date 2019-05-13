import styled from 'styled-components'
import searchIcon from '@/assets/images/search_icon.png'

export const MovieWrapper = styled.div`
  padding-top: 50px;
`

export const TopbarWrapper = styled.section`
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  .topbar-bg {
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
  }
  .city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: flex;
    align-items: center;
  }

  .switch-hot {
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;

    .hot-item {
      font-size: 15px;
      color: #666;
      width: 80px;
      width: 21.33333vw;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;

      &.active {
        color: #ef4238;
      }
    }
  }

  .search-icon {
    width: 20px;
    height: 20px;
    background: url(${searchIcon}) 10px no-repeat;
    background-size: 20px;
    padding: 10px 15px 10px 10px;
  }
`

export const ListWrapper = styled.div`
  padding-bottom: 50px;
  .item {
    padding-left: 15px;
    background-color: #fff;
  }
  .main-block {
    width: 100%;
    .avatar {
      width: 64px;
      height: 90px;
      margin-top: 12px;
      float: left;
      img {
        height: 90px;
      }
    }
    .content-wrapper {
      padding: 12px 14px 12px 0;
      margin-left: 74px;
      height: 90px;
      max-height: 90px;
    }
  }
`
