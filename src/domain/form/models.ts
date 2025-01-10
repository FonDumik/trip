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

export interface IEvent {
    id: number;
    title: string;
    slug: string;
    description: string; //html
    images: {
        image: string;
    }[];
    site_url: string;
}
export interface IEventsResponse {
    results: IEvent[];
}
