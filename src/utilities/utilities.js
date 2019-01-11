import { Component }from 'react';
import { withRouter } from 'react-router-dom';

export const deepCopy = function(object) {
	return JSON.parse(JSON.stringify(object))
};

class ScrollToTopComponent extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
  
    render() {
      return this.props.children;
    }
}

export const ScrollToTop = withRouter(ScrollToTopComponent);