import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<SearchBar  SearchTerm={''} />));

  it('should render a <div />', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <form />', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it("should call onFormSubmit when a search term is submitted", () => {
    const mockFunction = jest.fn();
  
    const component = mount(<SearchBar onFormSubmit={mockFunction} />);
  
    component.find("form").simulate("submit");
    expect(mockFunction).toHaveBeenCalled();
  
    component.unmount();
  });


});