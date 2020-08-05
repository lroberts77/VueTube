import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render a <grid />', () => {
    const wrapper = shallow(<App />);
    Expect(wrapper.find('Grid').length).toEqual(4);
  })
})