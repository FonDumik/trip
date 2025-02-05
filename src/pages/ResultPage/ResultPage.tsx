import { FC, useEffect, useState } from "react";
import { Loader, Overlay } from "@gravity-ui/uikit";
import { useSelector } from "react-redux";
import { Flexbox } from "../../components/Flexbox/Flexbox";
import { AIPlan } from "../../constants/aiplan";
import { popularPlaces } from "../../constants/popularPlaces";
import { useGetData } from "../../hooks/useGetData";
import { FormState } from "../../store/selectors";
import { Events } from "./components/Events/Events";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import {
    Hotel,
    LocationOn,
    RestaurantMenu,
    Today,
    TheaterComedy,
} from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

export const ResultPage: FC = () => {
    const { result } = useSelector(FormState);
    const { getTripInformation, loading } = useGetData();

    const [tab, setTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    const loadResults = async () => {
        await getTripInformation();
    };

    useEffect(() => {
        loadResults();
    }, []);

    const makePdfHandler = () => {};

    return (
        <Flexbox
            style={{ overflowX: "hidden" }}
            justify="space-between"
            align="center"
            gap={16}
            verticalMargin={32}
        >
            <Typography variant="h3">Результат</Typography>

            <Flexbox
                direction="row"
                justify="space-between"
                align="center"
                gap={16}
            >
                <Button
                    onClick={makePdfHandler}
                    variant="contained"
                    size="large"
                >
                    Сохранить в PDF
                </Button>
                <Button
                    onClick={makePdfHandler}
                    variant="outlined"
                    size="large"
                >
                    Поделиться
                </Button>
            </Flexbox>
            <Flexbox gap={16} align="center" width={"100%"}>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab icon={<Today />} label="План поездки" />
                    <Tab icon={<TheaterComedy />} label="События" />
                    <Tab icon={<LocationOn />} label="Интересные места" />
                </Tabs>

                <ResultContainer title="">
                    {tab === 0 &&
                        AIPlan.Msk.map((day) => (
                            <Flexbox
                                key={day.day}
                                padding="0 0 0 20px"
                                width={"90%"}
                            >
                                <Typography>День {day.day}</Typography>

                                <ul>
                                    {day.plan.map((plan) => (
                                        <Typography component="li" key={plan}>
                                            {plan}
                                        </Typography>
                                    ))}
                                </ul>
                            </Flexbox>
                        ))}
                    {tab === 1 && result?.events?.length && (
                        <Events data={result.events} />
                    )}
                    {tab === 2 && (
                        <Flexbox gap={8} padding="0 16px">
                            {popularPlaces.map((place) => (
                                <Card
                                    key={place.link}
                                    style={{
                                        background: grey[800],
                                    }}
                                >
                                    <Flexbox>
                                        <CardHeader
                                            action={
                                                <IconButton
                                                    aria-label="settings"
                                                    href={place.link}
                                                    target="_blank"
                                                >
                                                    <LocationOn color="success" />
                                                </IconButton>
                                            }
                                            title={place.title}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={place.img}
                                            title={place.title}
                                            alt={place.title}
                                        />
                                        <CardContent>
                                            <Typography>
                                                {place.description}
                                            </Typography>
                                        </CardContent>
                                    </Flexbox>
                                </Card>
                            ))}
                        </Flexbox>
                    )}
                </ResultContainer>
            </Flexbox>

            <Overlay visible={loading}>
                <Loader />
            </Overlay>
        </Flexbox>
    );
};
