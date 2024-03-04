import { render, screen } from '@testing-library/react'
import GlassesCard from '.';

const name = 'OPTICAL 00';
const price = 200000;
const imageUrl = 'https://imageUrl';
const linkUrl = 'https://linkUrl';

test('display name, price and imageUrl', async () => {
  render(<GlassesCard
    name={name}
    imageUrl={imageUrl}
    price={price}
  />
  );

  const glassesCardName = await screen.findByRole('glassescard-name')
  const glassesCardPrice = await screen.findByRole('glassescard-price')
  const glassesCardImage = await screen.findByRole('glassescard-image')

  expect(glassesCardName).toHaveTextContent(name)
  expect(glassesCardPrice).toHaveTextContent(price)
  expect(glassesCardImage.src).toContain("http://localhost/_next/image?url=https%3A%2F%2FimageUrl&w=1080&q=75")
});


test('display name, price, imageUrl and linkUrl', async () => {
  render(<GlassesCard
    name={name}
    imageUrl={imageUrl}
    price={price}
    linkUrl={linkUrl}
  />
  );

  const glassesCardName = await screen.findByRole('glassescard-name')
  const glassesCardPrice = await screen.findByRole('glassescard-price')
  const glassesCardImage = await screen.findByRole('glassescard-image')

  expect(glassesCardName).toHaveTextContent(name)
  expect(glassesCardPrice).toHaveTextContent(price)
  expect(glassesCardImage.src).toContain("http://localhost/_next/image?url=https%3A%2F%2FimageUrl&w=1080&q=75")
});

