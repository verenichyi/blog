import React from 'react';
import userEvent from '@testing-library/user-event';
import Header from 'src/view/components/Header';
import { render } from 'src/utils/test-utils';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.appendChild(modalRoot);

describe('Header', () => {
  it('should open modal with "NewPost" component', async () => {
    const { getByText } = render(<Header />);
    await userEvent.click(getByText('Add post'));
    expect(getByText(/create new post/i)).toBeInTheDocument();
  });
});
