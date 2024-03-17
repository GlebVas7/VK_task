import {useState} from 'react'
import './App.css'
import FirstPanel from "./component/FirstPanel/FirstPanel.jsx";
import FormName from "./component/FormName/FormName.jsx";
import {usePlatform} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App() {
    const [count, setCount] = useState(0)
    const platform = usePlatform();

    return (
        <div>
            <FirstPanel/>
            <FormName/>
        </div>
    )
}

export default App
