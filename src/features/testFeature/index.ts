import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import { reducer } from './reducer';
import { connect } from "react-redux";
import { Test as component } from "./Test";
import { ITestActions, ITestSelectors } from "./interface";
import { IState } from "../../store/combinedReducer";

const mapStateToProps = ( state: IState ): ITestSelectors => ( {
    testValue: selectors.getTestValue( state )
} );

const mapDispatchToProps = ( dispatch: any ): ITestActions => ( {
    testAction: ( value: boolean ) => dispatch( actions.dispatchTestAction( value ) )
} );

export const TestFeature = {
    actions,
    constants,
    reducer,
    selectors
};

export * from './interface';

export const Test = connect( mapStateToProps, mapDispatchToProps )( component );
