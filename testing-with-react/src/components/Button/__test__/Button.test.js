import React from "react"
import Button from "../Button"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"



test("testing if button has correct content", () => {
    const {getByTestId} = render(<Button/>)
    expect(getByTestId("button")).toBe("1")
})