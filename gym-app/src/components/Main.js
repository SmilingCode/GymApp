import React from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Menu from './Menu';
import AddFood from './AddFood';
import FoodDetail from './FoodDetail';
import { connect } from 'react-redux';
import { get_query_state, get_query_res, page_move_left, page_move_right, current_food_detail, user_food_detail } from '../redux/actions/index';

const mapStateToProps = (state) => {
    return {
        queryReducer: state.queryReducer,
        mockReducer: state.mockReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getQueryState: (queryState) => dispatch(get_query_state(queryState)),
    getQueryRes: (queryRes) => dispatch(get_query_res(queryRes)),
    pageMoveLeft: () => dispatch(page_move_left()),
    pageMoveRight: () => dispatch(page_move_right()),
    currentFoodInfo: (currentFoodDetails) => dispatch(current_food_detail(currentFoodDetails)),
    userFoodDetail: (foodDetail) => dispatch(user_food_detail(foodDetail))
})

class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <Header
                    isShowList={this.props.queryReducer.queryState}
                    getQueryState={this.props.getQueryState}
                    getQueryRes={this.props.getQueryRes}
                    pageMoveLeft={this.props.pageMoveLeft}
                    pageMoveRight={this.props.pageMoveRight}
                    currentPageId={this.props.queryReducer.pageId}
                    queryRes={this.props.queryReducer.queryRes}
                    currentFoodInfo={this.props.currentFoodInfo}
                />
                <PersonalInfo
                    isShowList={this.props.queryReducer.queryState}
                    mockData={this.props.mockReducer}
                    currentPageId={this.props.queryReducer.pageId}
                    userFoodList={this.props.queryReducer.userFoodList}
                />
                <Menu
                    isShowList={this.props.queryReducer.queryState}
                    mockData={this.props.mockReducer}
                    currentPageId={this.props.queryReducer.pageId}
                    userFoodList={this.props.queryReducer.userFoodList}
                />
                <AddFood />
                <FoodDetail
                    currentFoodDetail={this.props.queryReducer.currentFoodInfo}
                    userFoodDetail={this.props.userFoodDetail}
                    setQueryState={this.props.getQueryState}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
