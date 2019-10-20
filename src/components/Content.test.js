import React from 'react';
import { render } from 'enzyme';
import Content from './Content'

describe('<content />', () => {
  it('renders the props as text', () => {
    const wrapper = render(
      <Content
        title='some title '
        content='some content'
      />
    );
    const propsText = wrapper.text();
    expect(propsText).toEqual('some title some content');
  });
});
