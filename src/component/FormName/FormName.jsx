import React, {useState, useEffect, useRef} from "react";
import {Button, IconButton, Input} from "@vkontakte/vkui";
import classes from './FormName.module.css'

const FormName = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [load, setLoad] = useState(false);
    const time = useRef(null);
    const [valid, setValid] = useState(true);

    useEffect(() => {
        time.current = setTimeout(() => {
            ageSearch(name);
        }, 3000);
    }, [name]);

    const ageSearch = async (name) => {
        try {
            if (!load) {
                setLoad(true);
                const response = await fetch('https://api.agify.io/');
                const data = await response.json();
                setAge(data.age);
                setLoad(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handler = (event) => {
        event.preventDefault();
        clearTimeout(time.current);
        if (!name.match(/^[a-zA-Z]+$/)) {
            setValid(false);
        } else {
            setValid(true);
            ageSearch(name);
        }
    }

    return (
        <div className={classes.wrapper}>
            <form>
                <Input type="text"
                       value={name}
                       onChange={(item) => {
                           setName(item.target.value);
                           setValid(true);
                       }}
                       placeholder="Введите имя"
                       style={{borderColor: valid ? 'initial' : 'red'}}
                       className={classes.input_form}
                />
                {!valid && <p style={{color: 'red'}}>Имя должно состоять только из букв</p>}
                <Button type="submit" size={"l"}>Отправить</Button>
            </form>
            {age && <p>Возраст: {age}</p>}
        </div>
    );
}
export default FormName;