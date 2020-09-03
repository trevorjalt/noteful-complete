import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from './CircleButton/CircleButton';

class ErrorBoundary extends React.Component {
    state = {
          hasError: false
    };

    static defaultProps = {
        history: {
          goBack: () => { }
        },
      }

    static getDerivedStateFromError(error) {
        return { hasError: true };
      }

    render() {
    if (this.state.hasError) {      
        return (
            <>
                <h2>Uh-oh! Looks like you have encountered an error.</h2>
                <a href="/">Let's go home!</a>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='NotePageNav__back-button'
                    >
                    <FontAwesomeIcon icon='chevron-left' />
                    <br />
                    Back
                    </CircleButton>
            </>
        );
    }
    return this.props.children;
    }  
}

export default ErrorBoundary