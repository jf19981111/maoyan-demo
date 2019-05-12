import React from 'react'
import { NavLink } from 'react-router-dom'
import { TabsWrapper, TabItem } from './style'
import PropTypes from 'prop-types'

class Tabs extends React.Component {
    render() {
        const { tabs } = this.props
        return(
            <TabsWrapper>
                {
                    tabs.map(item => {
                        return (
                            <TabItem key={item.id}>
                                <NavLink to={`/${item.id}`}>{item.name}</NavLink>
                            </TabItem>
                        )
                    })
                }
            </TabsWrapper>
        )
    }
}

// prop 的校验
Tabs.propTypes = {
    tabs: PropTypes.array.isRequired
}

export default Tabs;
