import path from "path";
import { ModuleGenerator } from "@iamyth/devtool-utils";

new ModuleGenerator({
    moduleDirectory: path.join(__dirname, "../src/module"),
}).run();
