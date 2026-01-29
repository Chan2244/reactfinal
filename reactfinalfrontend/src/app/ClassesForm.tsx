import React, {useState, useEffect} from 'react'

interface Classes {
    _id: string;
    ClassesName: string;
    hitpoints: number;
    wealth: number;
    classAlignment: string;
}

interface ClassesFormProps {
    classes: Classes | null;
    onSubmit: (classes: Omit<Classes, "_id">, id?: string) => void;
}

const ClassesForm = ({classes, onSubmit}: ClassesFormProps) => {
    const [formClasses, setFormClasses] =useState<Omit<Classes, "_id">>({
        ClassesName: "",
        hitpoints: "",
        wealth "",
        classAlignment: "",

    });

    useEffect(()=> {
        if(classes){
            const{_id, ...rest} = classes;
        } else {
            setFormClasses({
            ClassesName: "",
            hitpoints: "",
            wealth: "",
            classAlignment:"",
        });
        }
    },[classes]);

    const handleChange =(field: keyof Omit<Classes, "_id">, value: any)=>{
        setFormState((prev) => ({...prev, [field]: value }));
    };

    const handleSubmit = ()=> {
        onSubmit(formState, classes?._id);
    }

    return (
    <div className="bg-white shadow-1g p-6 rounded-1g">
        <h2 className="text-2x1 font-bold text-gray-800 mb-4">
            {classes ? "Update Classes": "Add New Classes"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text"
            placeholder="ClassesName"
            value={formState.classesName}
            onChange={(e) => handleChange("classesName", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="hitpoints"
            value={formState.hitpoints}
            onChange={(e) => handleChange("hitpoints", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="wealth"
            value={formState.wealth}
            onChange={(e) => handleChange("wealth", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="Class Alignment"
            value={formState.classAlignment}
            onChange={(e) => handleChange("classAlignment", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
        </div>
        <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
        onClick={handleSubmit}
        >{classes ? "Update Student" : "Add new Class"}
        </button>
    </div>
    );
};

export default ClassesForm