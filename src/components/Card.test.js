import React from 'react';
import { render } from 'enzyme';
import Card from './Card'

describe('<Card />', () => {
  it('renders the props as formatted text', () => {
    const props = {}
    const wrapper = render(
      <Card
        date='#Oct-1-1997 '
        title='-title-'
        content='<p>content</p>' />
    );
    const propsText = wrapper.text();
    expect(propsText).toEqual(' OCT 1 1997  TITLE  content ');
  });
});
