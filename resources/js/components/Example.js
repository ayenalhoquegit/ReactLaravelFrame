import React, { Component, Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';

const Test = lazy(() => import('./Test'));

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                        
                            <div className="card-body">
                                I'm an example component! wow
                            </div>
                             <Suspense fallback={<div>Loading...</div>}>

                                <Test />
                            </Suspense>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
