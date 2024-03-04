import { render, screen } from '@testing-library/react'
import ProductHeroCard from '.';


test('display title, backgroundImage and description for product hero card', async () => {
  const title = 'OPTICAL 00';
  const backgroundImage = 'https://backgroundImage';
  const description = "product hero card description";
  render(<ProductHeroCard
    backgroundImage={backgroundImage}
    title={title}
    description={description}
  />
  );

  const productHeroCardContainer = await screen.findByRole('productherocard-container')
  const productHeroCardTitle = await screen.findByRole('productherocard-title')
  const productHeroCardDescription = await screen.findByRole('productherocard-description')

  expect(productHeroCardContainer).toHaveStyle({ backgroundImage: `url${backgroundImage}` })
  expect(productHeroCardTitle).toHaveTextContent(title)
  expect(productHeroCardDescription).toHaveTextContent(description)
});
