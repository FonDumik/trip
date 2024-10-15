export interface IRegionResponse {
    name: string;
    parentRegions: { name: string }[];
    cases: {
        da: "Москве";
        tv: "Москвой";
        vi: "в Москву";
        pr: "Москве";
        ro: "Москвы";
    };
    country_name: "Россия";
}
