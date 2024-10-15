import { FC } from "react";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Layout } from "@/components/Layout/Layout";
import { Placeholder } from "@telegram-apps/telegram-ui";
import styles from "./styles.module.scss";
import { Region } from "@/components/Form/Region/Region";
// import { useSelector } from "@/store/hooks";
// import { FormState } from "@/store/selectors";

export const FormPage: FC = () => {
    // const { region } = useSelector(FormState);
    // const [step, setStep] = useState<number>(0);

    return (
        <Layout>
            <Flexbox
                direction="column"
                gap={16}
                verticalMargin={30}
                justify="center"
                align="center"
            >
                <Placeholder
                    description="Расскажите о вашей поездке"
                    header="Нужно кое-что уточнить"
                >
                    <img
                        src="https://media.tenor.com/CRd3NHA4idMAAAAi/ultimate-uyta-ultimate-duck.gif"
                        alt="travelagent"
                        className={styles.imagePlaceholder}
                    />
                </Placeholder>
                <Region />
            </Flexbox>
        </Layout>
    );
};
