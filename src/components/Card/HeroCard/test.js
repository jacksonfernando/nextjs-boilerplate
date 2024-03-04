import { render, screen } from '@testing-library/react'
import HeroCard from '.';

const title = 'OPTICAL 00';
const backgroundImage = 'https://backgroundImage';
const linkUrl = 'https://linkurl';

test('display title, backgroundImage and empty link for hero card', async () => {
  render(<HeroCard
    backgroundImage={backgroundImage}
    title={title}
  />
  );

  const heroCardContainer = await screen.findByRole('herocard-container')
  const heroCardTitle = await screen.findByRole('herocard-title')

  expect(heroCardContainer).toHaveStyle({ backgroundImage: `url${backgroundImage}` })
  expect(heroCardTitle).toHaveTextContent(title)
});


test('display title, backgroundImage and Link for hero card', async () => {
  render(<HeroCard
    backgroundImage={backgroundImage}
    title={title}
    url={linkUrl}
  />
  );

  const heroCardContainer = await screen.findByRole('herocard-container')
  const heroCardTitle = await screen.findByRole('herocard-title')
  const heroCardLink = await screen.findByRole('herocard-url')

  expect(heroCardContainer).toHaveStyle({ backgroundImage: `url${backgroundImage}` })
  expect(heroCardTitle).toHaveTextContent(title)
  expect(heroCardLink.href).toEqual(`${linkUrl}${'/'}`)
});

