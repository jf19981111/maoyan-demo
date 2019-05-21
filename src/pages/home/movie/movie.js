import { connect } from 'react-redux'
import Ui from './ui'
import { getMovieListAction } from './store/createActions'

const mapStateToProps = (state) => {
    return {
        movieList: state.getIn(['movie', 'movieList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieList: () => {
            dispatch(getMovieListAction)
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ui)
