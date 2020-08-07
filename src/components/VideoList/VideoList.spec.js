import React from 'react';
import { shallow } from 'enzyme';
import VideoList from './VideoList';
import App from '../App';

const defaultProps = {
  video: null,
  onVideoSelect: App.onVideoSelect
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<VideoList {...setupProps} />);
};

it("should render a div", () => {
  const wrapper = setup({ videos: [] });
  expect(wrapper.find('div').length).toBe(1);
});