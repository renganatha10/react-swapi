import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  errorMessage: '',
  isLoggedin: true,
  userName: 'Renga',
  isLoading: false
};

describe('Login suite', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login user={user} />, div);
  });

  it('should render without throwing an error', function() {
    expect(
      shallow(<Login user={user} />).contains(<div>React - Swapi</div>)
    ).toBe(false);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Login user={user} />).find('.sw-login').length).toBe(1);
  });
});
