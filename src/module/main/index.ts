import { Module, register } from "react-shiba";
import { Main } from "./Main";
import type { State, Path } from "./type";

const initialState: State = {};

class ModuleMainModule extends Module<Path, State> {
    override onEnter() {
        // TODO
    }
}

const moduleMainModule = register(new ModuleMainModule(null, initialState));
export const useState = moduleMainModule.getState();
export const actions = moduleMainModule.getActions();
export const MainComponent = moduleMainModule.attachLifecycle(Main);
