import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('Footer', () => {
  let mockProps;
  let wrapper;

  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Footer {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
