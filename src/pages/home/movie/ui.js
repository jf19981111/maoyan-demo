import React from 'react'
import Header from '@/common/header/header'
import { MovieWrapper, TopbarWrapper, ListWrapper } from './style'

class UI extends React.Component {
    render() {
        const { movieList } = this.props
        return(
            <MovieWrapper>
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
                    {
                        movieList.map(item => {
                            return (
                                <div className="main-block" key={item.id}>
                                    <div className="avatar">
                                        <div className="default-img-bg">
                                            <img src={item.img.replace('w.h', '128.180')} alt="" />		
                                        </div>
                                    </div> 
                                    <div className="mb-outline-b content-wrapper">
                                        <div className="column content">
                                            <div className="box-flex movie-title">
                                            <div className="title line-ellipsis v3dimax_title">{ item.nm }</div>
                                                <span className="version v3d imax"></span>
                                            </div>
                                            <div className="detail column">
                                                <div className="score line-ellipsis"> 
                                                    <span className="score-suffix">观众评分</span>
                                                    <span className="grade">{ item.sc }</span>
                                                </div>
                                                <div className="actor line-ellipsis">主演: {item.star}</div>
                                                <div className="show-info line-ellipsis">{ item.showInfo }</div>
                                            </div>
                                        </div>
                                        <div className="button-block">
                                            {
                                                item.showst === 3 ? (
                                                    <div className="btn normal">
                                                        <span className="fix" data-bid="dp_wx_home_movie_btn">
                                                            购票
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="btn normal">
                                                        <span className="fix" data-bid="dp_wx_home_movie_btn">
                                                            预售
                                                        </span>
                                                    </div>
                                                )
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ListWrapper>
            </MovieWrapper>
        )
    }

    componentDidMount() {
        this.props.getMovieList()
    }
}

export default UI;
