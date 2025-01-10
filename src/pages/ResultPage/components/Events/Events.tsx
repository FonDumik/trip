import { IEvent } from "@/domain/form/models";
import { Flexbox } from "../../../../components/Flexbox/Flexbox";
import styles from "./styles.module.scss";
import {
    AspectRatio,
    Button,
    Card,
    CardContent,
    CardOverflow,
    Typography,
} from "@mui/joy";

export const Events = ({ data }: { data: IEvent[] }) => {
    return (
        <Flexbox className={styles.carousel} direction="row" gap={8}>
            {data.map((event) => (
                <Card variant="plain" sx={{ width: 320 }} key={event.slug}>
                    <CardOverflow>
                        <AspectRatio ratio={2}>
                            <img
                                src={event.images[0].image}
                                srcSet={event.images[0].image}
                                loading="lazy"
                                alt={event.slug}
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-lg" width={300}>
                            {event.title.toUpperCase()}
                        </Typography>
                        {/* <Typography
                            level="body-xs"
                            color="neutral"
                            width={300}
                            maxHeight={50}
                            overflow="scroll"
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: event.description,
                                }}
                                // className={styles.itemDescription}
                            />
                        </Typography> */}
                    </CardContent>

                    <Button
                        component={"a"}
                        href={event.site_url}
                        target="_blank"
                    >
                        Подробности
                    </Button>
                </Card>
            ))}
        </Flexbox>
    );
};
