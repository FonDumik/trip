import {
    CardActionArea,
    CardMedia,
    Card,
    CardHeader,
    IconButton,
} from "@mui/material";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { IEvent } from "@/domain/form/models";
import { ArrowForward } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const Events = ({ data }: { data: IEvent[] }) => {
    const formatSentences = (input: string) => {
        return input
            .split(/(?<=[.!?])\s+/) // Разделяем по знакам препинания и пробелам
            .map(
                (sentence) =>
                    sentence.charAt(0).toUpperCase() + sentence.slice(1)
            )
            .join(" ");
    };

    return (
        <Flexbox gap={16} padding="0 16px">
            {data.map((event: IEvent) => (
                <Card
                    key={event.slug}
                    style={{
                        background: grey[800],
                    }}
                >
                    <CardActionArea href={event.site_url} target="_blank">
                        <Flexbox>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <ArrowForward color="success" />
                                    </IconButton>
                                }
                                title={formatSentences(event.title)}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={event.images[0].image}
                                title={event.title}
                                alt={event.title}
                            />
                        </Flexbox>
                    </CardActionArea>
                </Card>
            ))}
        </Flexbox>
    );
};
