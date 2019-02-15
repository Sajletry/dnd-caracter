import { connect } from "react-redux";
import { Container } from "./container";
import { mapDispatchToProps } from "./actions";
import { mapStateToProps } from "./selectors";


export const MainPage = connect( mapStateToProps, mapDispatchToProps )( Container );
