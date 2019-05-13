import React from 'react'

import Header from '@/common/header/header'

import { TopbarWrapper, ListWrapper } from './style'

class Movie extends React.Component {
    render() {
        return(
            <div>
                {/* 头部 */}
                <Header />
                {/* topbar */}
                <TopbarWrapper>
                    <div className="topbar-bg">
                        <div className="city-entry">
                            <span className="city-name">深圳</span>
                            <i className="city-entry-arrow"></i>
                        </div>

                        <div className="switch-hot">
                            <div className="hot-item">正在热映</div>
                            <div className="hot-item active">即将上映</div>
                        </div>
                        <div className="search-entry search-icon"></div>
                    </div>
                </TopbarWrapper>

                {/* list-wrap */}

                <ListWrapper>
                <div className="main-block">
                    <div className="avatar">
                        <div className="default-img-bg">
                            <img src="https://p0.meituan.net/128.180/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg" alit="" />		
                        </div>
                    </div> 
                    <div className="mb-outline-b content-wrapper">
                        <div className="column content">
                            <div className="box-flex movie-title">
                            <div className="title line-ellipsis v3dimax_title">大侦探皮卡丘</div>
                                <span className="version v3d imax"></span>
                            </div>
                            <div className="detail column">
                                <div className="score line-ellipsis"> 
                                    <span className="score-suffix">观众评 </span>
                                    <span className="grade">8.6</span>
                                </div>
                                <div className="actor line-ellipsis">主演: 瑞安·雷诺兹,贾斯蒂斯·史密斯,凯瑟琳·纽顿</div>
                                <div className="show-info line-ellipsis">今天265家影院放映3336场</div>
                            </div>
                        </div>
                        <div className="button-block">
                            <div className="btn normal"><span className="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
                        </div>
                    </div>
                </div>
                </ListWrapper>

            </div>
        )
    }
}

export default Movie;
