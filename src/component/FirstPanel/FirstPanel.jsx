import React, {useEffect, useState} from "react";
import classes from './FirstPanel.module.css';
import {Button, FormItem, Group, Textarea} from "@vkontakte/vkui";

const FirstPanel = () => {
    const [Fact, setFact] = useState('');

    useEffect(() => {
        fetchFact();
    }, []);

    const fetchFact = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setFact(data.fact);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = () => {
        fetchFact();
    };

    return (
        <div className={classes.content}>
            <Group mode="plain">
                <FormItem>
                    <Textarea
                        className={classes.text}
                        value={Fact}
                        onChange={(e) => setFact(e.target.value)}
                        autoFocus
                    />
                </FormItem>
                <FormItem>
                    <div className={classes.btn}>
                        <Button onClick={handleClick} size={"l"}>Показать факт</Button>
                    </div>
                </FormItem>
            </Group>
        </div>
    );
}
export default FirstPanel;