import Description from "./Description";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));

test("renders component", () => {
  const router = {
    query: {
      id: "1",
      name: "Book name",
      author: "Book author",
      year: "2023",
      image_url: "https://example.com/book.jpg",
      description: "Book description"
    }
  };

  (useRouter as jest.Mock).mockReturnValue(router);

  const { getByText } = render(<Description />, { router });

  expect(getByText(router.query.name)).toBeInTheDocument();
});

