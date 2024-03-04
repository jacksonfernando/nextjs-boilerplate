import { fireEvent, render, screen } from '@testing-library/react'
import SphereButton from '.';

test('display load more button and trigger onclick when invoked', async () => {
  const name = 'Load More'
  const onClick = jest.fn();
  render(<SphereButton name={name} onClick={onClick} />);

  const buttonContainer = await screen.findByRole('button-container')
  const buttonText = await screen.findByRole('button-name')

  fireEvent.click(buttonContainer);

  expect(buttonText).toHaveTextContent(name)
  expect(onClick).toHaveBeenCalledTimes(1)
});

