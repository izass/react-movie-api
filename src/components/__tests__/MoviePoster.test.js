import { screen } from "@testing-library/react";
import { MoviesPoster } from "../MoviePoster";
import { render } from "../../../testing-support/components";
// import { TMDB_IMAGE_HOST } from "../../constants/external-data-hosts";

jest.mock("../../constants/external-data-hosts", () => {
  return {
    TMDB_IMAGE_HOST: "the-movie-data-base-host",
  };
});

const movieMockProp = {
  id: "0",
  poster_path: "path",
  title: "title",
};

describe("<MoviesPoster />", () => {
  const setup = ({ movie = movieMockProp } = {}) =>
    render(<MoviesPoster movie={movie} />);

  beforeEach(() => {
    setup();
  });

  it("Should have TMDB poster path as image src", () => {
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `the-movie-data-base-host/${movieMockProp.poster_path}`
    );
  });

  it("Should have movie's title as image alt", () => {
    expect(screen.getByRole("img")).toHaveAttribute("alt", movieMockProp.title);
  });

  it("Should have movie's id on link href", () => {
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/movies/${movieMockProp.id}`
    );
  });
});
