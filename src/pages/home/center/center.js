import React from 'react'

import http from '@/utils/http'

class Center extends React.Component {
    render() {
        return(
            <div>
                <h1>Center</h1>  
            </div>
        )
    }

    componentDidMount() {
        http.get('/api/getFilm')
            .then(res => {
                console.log(res)
            })
    }
}

export default Center;
