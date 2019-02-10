import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import { reducer } from './reducer';
import { connect } from "react-redux";
import { Container as component } from "./container";
import { IActions, ISelectors } from "./interface";
import { IState } from "../../store/combinedReducer";

export const FEATURE_NAME = 'allSpells';
const mapStateToProps = ( state: IState ): ISelectors => ( {
    selectAllSpells: selectors.selectAllSpells(state)
} );

const mapDispatchToProps = ( dispatch: any ): IActions => ( {
    getAllSpells: ( ) => dispatch( actions.getAllSpells(  ) )
} );

export const SpellBook = {
    actions,
    constants,
    reducer,
    selectors
};

export * from './interface';

export const MainScene = connect( mapStateToProps, mapDispatchToProps )( component );
