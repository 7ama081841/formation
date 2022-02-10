import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import TextInput from "./components/text-input";
import UploadInput from "./components/upload-input";

function App() {
  const [noVaccinatedList, setNoVaccinatedList] = useState([]);

  const [vaccinatedList, setVaccinatedList] = useState([]);

  const [form, setForm] = useState({});

  const addTester = (e) => {
    e.preventDefault();

    setNoVaccinatedList((prev) => [...prev, form]);
  };

  return (
    <div className="bg-[#282c34] h-screen">
      <header className="App-header">Vaccin</header>
      {/** Insert column */}
      <div className="flex px-10 max-h-screen">
        <form onSubmit={addTester} className="w-1/5 flex flex-col space-y-8">
          <UploadInput
            onChange={(img) => setForm((prev) => ({ ...prev, img }))}
          />
          <TextInput
            label="Tester name"
            onChange={(name) => setForm((prev) => ({ ...prev, name }))}
          />
          <Button text="Ajouter" />
        </form>
        {/** Non Vaccinated column */}

        <div className="w-2/5 pl-10 ">
          <h1 className="text-white text-3xl font-bold">Non Vaccinated</h1>
          <div className="overflow-y-auto space-y-4 max-h-[88vh]">
            {noVaccinatedList.map((item, key) => {
              return <Card key={key} name={item.name} img={item.img} />;
            })}
          </div>
        </div>
        {/** Vaccinated column */}

        <div className="w-2/5 pl-10">
          <h1 className="text-white text-3xl font-bold">Vaccinated</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
