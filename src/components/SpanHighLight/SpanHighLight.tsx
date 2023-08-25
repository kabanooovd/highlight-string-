interface IProps {
    string: string;
    search: string;
    className?: string;
}

export const SpanHighLight = (props: IProps) => {
    const { string, search, className } = props;
    const valueToBold = (string: string) => {
        const _search = new RegExp(search, "gi");
        return string.replace(
            _search,
            `<span style="background-color: #e9e9e9; border-radius: 2px">$&</span>`
        );
    };

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: valueToBold(string) }}
        />
    );
};
