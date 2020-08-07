import React from 'react';
import { shallow } from 'enzyme';
import VideoDetail from './VideoDetail';

describe('VideoDetail', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<VideoDetail />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});