import React, {Component} from 'react'
import Header from './Header'
import PersonalInfo from './PersonalInfo'
import Menu from './Menu'
import AddFood from './AddFood'

class Main extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <PersonalInfo />
                <Menu />
                <AddFood />
            </div>
        )
    }
}

export default Main;
