export default function Test() {
    const arr = [
        "1111111",
        "222222",
        "333333333333333333333333333",
        "4444444444",
        "5555555",
        "66666",
        "77777777",
        "8888888",
        // "999999",
    ];
    const convertArr = (arr: string[]) => {
        const result = [] as string[];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result.push(arr[i + j * 3]);
            }
        }
        return result;
    };
    return (
        <div>
            <div className="break-all list-none flex flex-col max-h-[5rem] flex-wrap">
                {convertArr(arr).map((item, index) => (
                    <li key={index} className="min-w-0 w-[33.3%]">
                        {item}
                    </li>
                ))}
            </div>
        </div>
    );
}
