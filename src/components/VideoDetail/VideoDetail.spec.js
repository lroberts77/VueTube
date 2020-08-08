import React from 'react';
import { shallow } from 'enzyme';
import VideoDetail from './VideoDetail';

describe('VideoDetail', () => {

  it('should render a <div />', () => {
    const wrapper = shallow(<VideoDetail />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  const defaultProps = {
    video: null
  };
  
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<VideoDetail {...setupProps} />);
  };

  describe("if the user hasn't selected a video", () => {

    it("renders a prompt message when there is no video", () => {
      const wrapper = setup({ video: null });
      expect(wrapper.text()).toEqual("Loading...");
    });
  });

  describe("if the user has selected a video", () => {
    it("renders the video detail component", () => {
      const wrapper = setup({
        video: { snippet: { title: "video" }, id: { videoId: "123" } }
      });

      expect(wrapper.length).toBe(1);
      
    });
  });
  
  
}); 