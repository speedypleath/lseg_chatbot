export default function loadJson(): Promise<any> {
    return new Promise((res) => {
        import(`../data/data.json`).then((data) => {
            res(data?.default);
        }).catch((err) => {
            throw new Error(`Error loading data: ${err}`);
        });
    });
}