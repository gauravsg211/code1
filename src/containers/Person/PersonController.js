import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../../components/Person/Person';


class PersonController extends Component {
    state = {
        persons: [
            { name: 'rahul', age: 11, card_no: 1 },

        ]

    }
    render() {

        return (
            <div>

                <Person clicked={this.props.onPageLoad}/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Person1: state.Person
    };
};

const mapDispatchToProps = dispatch => {
    return {

        onPageLoad: () => dispatch({ type: 'RESET' }),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonController);