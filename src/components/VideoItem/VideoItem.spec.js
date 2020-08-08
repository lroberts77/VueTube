import React from 'react';
import { shallow, mount } from 'enzyme';
import VideoItem from './VideoItem';
import App from "../App";

const defaultProps = {
  video: null,
  onVideoSelect: App.onVideoSelect
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<VideoItem {...setupProps} />);
};

it("should render a div", () => {
  const wrapper = setup(
    {
      video: {
        snippet: { thumbnails: { medium: { url: "www.video.com" } } },
        id: { videoId: "123" }
      }
    },
    { onVideoSelect: App.onVideoSelect }
  );
  expect(wrapper.find('div').length).toBe(1);
}); 
