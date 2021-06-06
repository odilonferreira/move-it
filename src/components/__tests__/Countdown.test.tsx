/**
 * @jest-environment jsdom
 */

import React from "react";
import { Countdown } from "../Countdown";
import { render, screen } from "@testing-library/react";

describe("Counterdown", () => {
  test("asdas", () => {
    render(<Countdown />);

    const minutesLeft = screen.getByTestId("minuteLeft");
    const minutesRight = screen.getByTestId("minuteLeft");
    const secondsLeft = screen.getByTestId("minuteLeft");
    const secondsRight = screen.getByTestId("minuteLeft");

    expect(minutesLeft).toBeInTheDocument();
    expect(minutesRight).toBeInTheDocument();
    expect(secondsLeft).toBeInTheDocument();
    expect(secondsRight).toBeInTheDocument();
  });
});
