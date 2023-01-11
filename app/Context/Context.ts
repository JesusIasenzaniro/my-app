import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
    sort: string | any;
    setSort: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
