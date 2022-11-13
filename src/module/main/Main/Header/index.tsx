import React from "react";
import { Icon, IconClass } from "component/Icon";
import "./index.less";

export const Header = React.memo(() => {
    return (
        <header>
            <h1>
                <Icon type={IconClass.VINTAGE_LEATHER} />
            </h1>
        </header>
    );
});
