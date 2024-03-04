import { render, screen } from '@testing-library/react'
import FeedCard from '.';

test('display feed card image container and feed card title', async () => {
  const title = 'feedcardtitle'
  const imageUrl = 'https://image.com'
  render(<FeedCard title={title} imageUrl={imageUrl} />);

  const feedCardTitle = await screen.findByRole('feedcard-title')
  const feedCardContainer = await screen.findByRole('feedcard-container')

  expect(feedCardTitle).toHaveTextContent(title)
  expect(feedCardContainer).toHaveStyle({ backgroundImage: `url(${imageUrl})` })
});

