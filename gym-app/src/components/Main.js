import React from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Menu from './Menu';
import AddFood from './AddFood';
import FoodDetail from './FoodDetail';
import SearchList from './SearchList';
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

function Main(props) {

    return (
        <div className="main">
            <Header
                isShowList={props.queryReducer.queryState}
                getQueryState={props.getQueryState}
                getQueryRes={props.getQueryRes}
                pageMoveLeft={props.pageMoveLeft}
                pageMoveRight={props.pageMoveRight}
                currentPageId={props.queryReducer.pageId}
                queryRes={props.queryReducer.queryRes}
                currentFoodInfo={props.currentFoodInfo}
            />
            <PersonalInfo
                isShowList={props.queryReducer.queryState}
                mockData={props.mockReducer}
                currentPageId={props.queryReducer.pageId}
                userFoodList={props.queryReducer.userFoodList}
            />
            <Menu
                isShowList={props.queryReducer.queryState}
                mockData={props.mockReducer}
                currentPageId={props.queryReducer.pageId}
                userFoodList={props.queryReducer.userFoodList}
            />
            <AddFood />
            <FoodDetail
                currentFoodDetail={props.queryReducer.currentFoodInfo}
                userFoodDetail={props.userFoodDetail}
                setQueryState={props.getQueryState}
            />
            {
                props.queryReducer.queryState ? <SearchList queryRes={props.queryReducer.queryRes} currentFoodInfo={props.currentFoodInfo} /> : <div></div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
