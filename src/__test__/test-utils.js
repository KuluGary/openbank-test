import React from "react"
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"

import reduxStore from "store";

/**
 * Wraps the component in a mock of the redux store provider
 * @param {Component} ui - the UI component passed on render
 * @param {Object} renderOptions - the render options passed 
 */
const render = (ui, { initialState, store = reduxStore, ...renderOptions } = {}) => {
    const Wrapper = ({ children }) => {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react"; // export full testing-library components
export { render }; // export provider wrapped render
