import React from "react";
import s from "./Main.module.css";
import { SpanHighLight } from "../components/SpanHighLight/SpanHighLight";

export const Main = () => {
    const [value, setValue] = React.useState("");

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const testString = "This is tEst String that shoUld BE MarkeD WHILE search";

    return (
        <div className={s.container}>
            <input value={value} onChange={onHandleChange} />

            <SpanHighLight
                className={s.spanHighLight}
                string={testString}
                search={value}
            />
        </div>
    );
};
