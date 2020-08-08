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

describe("when a video has been selected", () => {

  let mockFunction;

  let wrapper; 

  beforeEach(() => {
    mockFunction = jest.fn();
    const video = {
      snippet: { thumbnails: { medium: "123" }, title: "title" },
      id: { videoId: "123" }
    };

    wrapper = setup({ videos: [video], onVideoSelect: { mockFunction } }); 

    it("should render a list of video items", () => {
      const wrapper = setup({ videos: [video], onVideoSelect: { mockFunction } });
      expect(wrapper.find('video').length).toBe(1);
    });
  });
});