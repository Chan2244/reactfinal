import React, {useState, useEffect} from 'react'

interface Monsters {
    _id: string;
    monstersName: string;
    monstersType: string;
    monstersClimate: string;
    monstersTerrain: string;
    monstersXp: string;
}

interface MonstersFormProps {
    monsters: Monsters | null;
    onSubmit: (monsters: Omit<Monsters, "_id">, id?: string) => void;
}

const MonstersForm = ({monsters, onSubmit}: MonstersFormProps) => {
    const [formMonsters, setFormMonsters =useState<Omit<Monsters, "_id">>({
        MonstersName: "",
        MonstersType: "",
        MonstersClimate: "",
        MonstersTerrain: "",
        MonstersXp:"",

    });

    useEffect(()=> {
        if(monsters){
            const{_id, ...rest} = monsters;
        } else {
            setFormMonsters({
            MonstersName: "",
            MonstersType: "",
            MonstersClimate: "",
            MonstersTerrain: "",
            MonstersXp: "",
        });
        }
    },[monsters]);

    const handleChange =(field: keyof Omit<Monsters, "_id">, value: any)=>{
        setFormState((prev) => ({...prev, [field]: value }));
    };

    const handleSubmit = ()=> {
        onSubmit(formState, monsters?._id);
    }

    return (
    <div className="bg-white shadow-1g p-6 rounded-1g">
        <h2 className="text-2x1 font-bold text-gray-800 mb-4">
            {monsters ? "Update Monsters": "Add New Monsters"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text"
            placeholder="MonstersName"
            value={formState.monstersName}
            onChange={(e) => handleChange("monstersName", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="MonsterType"
            value={formState.MonsterType}
            onChange={(e) => handleChange("monstersType", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="MonsterClimate"
            value={formState.monstersClimate}
            onChange={(e) => handleChange("monstersClimate", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="MonsterTerrain"
            value={formState.monsterTerrain}
            onChange={(e) => handleChange("monstersTerrain", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
             <input type="text"
             placeholder="MonsterXp"
             value={fromState.monsterXp}
             onChange={(e) => handleChange("monstersXp", e.target.value)}
             className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
        </div>
        <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
        onClick={handleSubmit}
        >{monsters ? "Update Monster" : "Add new Monster"}
        </button>
    </div>
    );
};

export default MonstersForm