interface IProps {
    string: string;
    search: string;
    className?: string;
}

export const SpanHighLight = (props: IProps) => {
    const { string, search, className } = props;
    const valueToBold = (string: string) => {
        if (search) {
            const _search = new RegExp(search, "gi");
            return string.replace(_search, `+$&+`);
        } else {
            return `${string}`;
        }
    };

    return (
        <span>
            {valueToBold(string)
                .split("+")
                .map((str) => {
                    const cn =
                        str.toLowerCase() === search.toLowerCase()
                            ? className
                            : "";
                    return <span className={cn}>{str}</span>;
                })}
        </span>
    );
};
