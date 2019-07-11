import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from './App';
import Description from './Description';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const tree = renderer.create(< Description/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
