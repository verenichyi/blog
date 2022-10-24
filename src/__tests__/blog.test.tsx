import React from 'react';
import Blog from 'src/view/pages/Blog';
import { render } from 'src/utils/test-utils';

describe('Blog', () => {
  it('should render with posts list', () => {
    const { getAllByTestId } = render(<Blog />);
    const posts = getAllByTestId('post');
    expect(posts[0]).toHaveClass('post');
  });
});
