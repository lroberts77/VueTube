import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<SearchBar  SearchTerm={''} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <form />', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('renders the value of SearchTerm', () => {
    wrapper.setState({ SearchTerm: 'basketball' });
    expect(wrapper.state('SearchTerm')).toEqual('basketball');
  });

  it("should call onFormSubmit when a search term is submitted", () => {
    const mockFunction = jest.fn();
  
    const component = mount(<SearchBar onFormSubmit={mockFunction} />);
  
    component.find("form").simulate("submit");
    expect(mockFunction).toHaveBeenCalled();
  
    component.unmount();
  });

  it("should change the update the state of 'SearchTerm' when the input is changed", () => {
    const component = mount(<SearchBar />);
  
    expect(component.state()).toEqual({"searchTerm": ""});
    component
      .find("input")
      .simulate("change", { target: { name: "SearchTerm", value: "test" } });
    expect(component.state()).toEqual({"searchTerm": "test"});
  
    component.unmount();
  });

});