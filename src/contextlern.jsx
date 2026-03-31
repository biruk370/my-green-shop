import {createContext,useContext,useState} from 'react';
const UserContext = createContext();
export default function Context(){
    const [User,setUser] = useState("Biruk");
    return(
    <UserContext.Provider value={User}>
        <MainComponent />
    </UserContext.Provider>
    );
}
function MainComponent (){
    return <DeepChildComponent />
}
function DeepChildComponent(){
    const name =useContext(UserContext)
    return <h1>Selam{name}</h1>
}