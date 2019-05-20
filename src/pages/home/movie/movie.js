import { connect } from 'react-redux'
import Ui from './ui'
import { getMovieListAction } from './store/createActions'

const mapStateToProps = ({ movie }) => {
    return {
        movieList: movie.movieList
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
