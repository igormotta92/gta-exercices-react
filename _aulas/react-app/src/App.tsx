import { Conditional } from './components/Conditional';
import { If } from './components/If';
import { MyComponent } from './components/MyComponent';
import { NewComponent } from './components/NewComponent';
import { Repeat } from './components/Repeat';
import { ShowDataComp } from './components/ShowDataComp';
import { ShowDataCompFragment } from './components/ShowDataCompFragment';
import { Student } from './shared/interfaces';

const student = { name: "Tiago", age: 36 } as Student

function App() {
  const list = [
    { name: "Tiago", age: 36 } as Student,
    { name: "Pedro", age: 33 } as Student,
  ]

  return (
    <div className="App">
      <ShowDataComp text='It Works!' student={student} numericValue={1} />
      <br />
      <ShowDataCompFragment text='It Works!' student={student} numericValue={1} />
      <br />
      <Repeat list={list} />
      <br /><br/><br/><br/><br/><br/>
      <Conditional student={list[0]}/>
      <br />
      {/*Isso não impede que os componentes filhos sejam acessados */}
      <If test={list.length > 2}>
        <ShowDataComp text='It Works!' student={student} numericValue={10} />
        <br/>
        <ShowDataComp text='Omg' student={student} numericValue={16} />
      </If>

      <MyComponent text='Tiago'/>
    </div>
  );
}

export default App;
