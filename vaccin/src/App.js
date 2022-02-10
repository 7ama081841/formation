import { useState } from "react";
import "./App.css";
import Button from "./components/button";
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

        <div className="w-2/5 pl-10 space-y-4">
          <h1 className="text-white text-3xl font-bold">Non Vaccinated</h1>
          <div className="overflow-y-auto max-h-screen">
            {noVaccinatedList.map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col bg-white rounded-md rounded-t-md shadow-sm hover:shadow-md"
                >
                  <img src={item.img} className="w-full rounded-t-md " />
                  <span className="px-2 py-4 font-bold text-gray-800">
                    {item.name}
                  </span>
                </div>
              );
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
