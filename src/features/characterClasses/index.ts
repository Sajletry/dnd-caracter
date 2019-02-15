import { connect } from "react-redux";
import { Container } from "./container";
import { mapDispatchToProps } from "./actions";
import { mapStateToProps } from "./selectors";


export const CharacterClasses = connect( mapStateToProps, mapDispatchToProps )( Container );
