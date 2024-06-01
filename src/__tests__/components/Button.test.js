import React from 'react';
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import { NativeBaseProvider } from 'native-base';

describe("Button test", () =>{
    it("then shows the light theme by default", () => {
        render(<NativeBaseProvider base={"light"}><Button color="red">Clique aqui</Button></NativeBaseProvider>);
        expect(screen.getByText(/Clique aqui/i)).toBeTruthy();
    });
});