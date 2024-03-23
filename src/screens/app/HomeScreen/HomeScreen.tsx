import React from "react";
import { Screen } from "@components";
import { Banner, ListClients } from "./components";

export function HomeScreen() {
    return (
        <Screen>
            <Banner />
            <ListClients />
        </Screen>
    )
}