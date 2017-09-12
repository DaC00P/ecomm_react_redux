import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        props.history.push('/')}
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        props.history.push('/signUp')}
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  // function mapStateToProps(state) {
  //   return {
  //     isAuthenticated: state.auth.isAuthenticated
  //   };
  // }
  //
  // return connect(mapStateToProps)(Authenticate);
}
