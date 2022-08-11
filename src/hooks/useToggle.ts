import { useState } from 'react';


const useToggle = (initialState: boolean = false ): [boolean, any] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = () => {
        setState(prevState => !prevState);
    }

    return [
        state,
        toggle
    ]
}

export default useToggle;