import { render, cleanup, prettyDOM, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import theme from '../../../public/styles/theme.style';

const arrage = (newProps = {}) => {
  const defaultProps = { header: 'mock header', content: 'mock content' };
  const mockProps = { ...defaultProps, ...newProps };

  const result = render(
    <ThemeProvider theme={theme}>
      <Layout {...mockProps} />
    </ThemeProvider>
  );

  const antHeader = () => result.queryByText(mockProps.header);
  const antContent = () => result.queryByText(mockProps.content);
  const antFooter = () => result.queryByText('Footer');

  return { ...result, antHeader, antContent, antFooter };
};

describe('Layout', () => {
  afterEach(cleanup);

  it('renders elements', () => {
    const com = arrage();

    expect(com.antHeader()).toBeInTheDocument();
    expect(com.antContent()).toBeInTheDocument();
    expect(com.antFooter()).toBeInTheDocument();
  });
});
