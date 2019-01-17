import { Component }from 'react';
import { withRouter } from 'react-router-dom';

export const deepCopy = function(object) {
	return JSON.parse(JSON.stringify(object))
};

export const compare = function(key, order='ascending') {

    return (a, b) => {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            console.error('Compared property does not exist on either object passed to function');
            return 0;
        }
        let valueA = (typeof a[key] === 'string')
            ? a[key].toLowerCase()
            : a[key];
        let valueB = (typeof b[key] === 'string')
            ? b[key].toLowerCase()
            : b[key];      
        let result = 0;
        if (valueA > valueB) {result = 1}
        if (valueA < valueB) {result = -1}
        return (order === 'descending' ? -1 * result : result);
    };
};

class ScrollToTopComponent extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    };
    render() {
      return this.props.children;
    };
};
export const ScrollToTop = withRouter(ScrollToTopComponent);