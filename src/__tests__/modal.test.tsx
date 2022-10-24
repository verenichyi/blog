import React from 'react';
import userEvent from '@testing-library/user-event';
import Modal from 'src/view/components/Modal';
import { render, screen } from 'src/utils/test-utils';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.appendChild(modalRoot);

describe('Modal', () => {
  it('should show content and a close button', async () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal isShown={true} hide={handleClose} modalContent={<div>My portal</div>} />,
    );
    expect(getByText('My portal')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('closeBtn'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should be unmounted', () => {
    const handleClose = jest.fn();
    const { getByText, unmount, queryByText } = render(
      <Modal isShown={true} hide={handleClose} modalContent={<div>My portal</div>} />,
    );
    expect(getByText('My portal')).toBeInTheDocument();
    unmount();
    expect(queryByText('My portal')).not.toBeInTheDocument();
  });
});
