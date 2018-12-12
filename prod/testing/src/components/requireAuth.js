import React, { Component } from 'react';
import { connect } from 'react-redux';

//Example of a Highed Order Component
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Our Component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }
        
        
        render() {
            // {...this.props} used to transfer props of actions and other properties in HOC  
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {auth: state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);
};