import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page and every in-page navigation target', () => {
  const { container } = render(<App />);

  expect(screen.getByRole('heading', { name: /better light/i })).toBeInTheDocument();

  ['about', 'Gallery', 'FAQ', 'Products', 'Testimonials', 'Clients', 'contact'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  });

  container.querySelectorAll('#mobile-navigation a[href^="#"]').forEach((link) => {
    expect(container.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  });
});

test('opens the mobile menu and closes it after choosing a section', () => {
  const { container } = render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

  const aboutLink = container.querySelector('#mobile-navigation .linkItemMobile');
  expect(aboutLink).toHaveAttribute('href', '#about');
  fireEvent.click(aboutLink);
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
});
