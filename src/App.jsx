import './App.css';

import { NativeBaseProvider } from "native-base";

import { Button, TextField } from './components';


function App() {
  return (
    <NativeBaseProvider>
      <TextField />
      <Button
        style={{
          backgroundColor: 'red'
        }}
        text={"Clique em mim"} variant={'contained'} material={true} color={"secondary"}/>
      <Button text={"Clique em mim 2"} variant={'contained'} color={"secondary"}/>
    </NativeBaseProvider>
  );
}

// TODO: Criar os demais componentes;
// TODO: Criar as rotas do sistema;

export default App;