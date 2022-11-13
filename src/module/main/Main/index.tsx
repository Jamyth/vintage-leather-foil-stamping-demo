import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header";
import { Content } from "./Content";
import "./index.less";
import "css/index.less";

export const Main = React.memo(() => {
    return (
        <ChakraProvider>
            <main>
                <Header />
                <Content />
            </main>
        </ChakraProvider>
    );
});
