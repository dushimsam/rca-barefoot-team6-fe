import { render } from "@testing-library/react";
import App from "../components/App"

test('renders hello world text', () => {
  const { getByText } = render(<App />);
  const helloWorldText = getByText(/Hello world!/i);
  expect(helloWorldText).toBeInTheDocument();
});