import { useState } from "react";
import TextAreaInput from "./inputs/TextAreaInput";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

type NoteFormProps = {
    notes: any[];
    setNotes: (notes: any[]) => void;
};

const NoteForm: React.FC<NoteFormProps> = ({
    notes,
    setNotes
}) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.description) return;

        const newNote = {
            id: Date.now(),
            ...formData
        };

        setNotes([newNote, ...notes]);

        setFormData({
            title: '',
            priority: 'Medium',
            category: 'Work',
            description: ''
        });
    }
     
    return (
        <div className="mb-4">
            <button
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition-colors"
                onClick={() => setIsFormVisible(!isFormVisible)}>
                {isFormVisible ? 'Hide Form' : 'Add New Note'}
            </button>

            {isFormVisible && (
                <form 
                    onSubmit={handleSubmit}
                    className="mb-6">
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        isRequired
                    />
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        options={[
                            { value: 'High', label: 'High' },
                            { value: 'Medium', label: 'Medium' },
                            { value: 'Low', label: 'Low' }
                        ]}
                    />
                    <SelectInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            { value: 'Work', label: 'Work' },
                            { value: 'Personal', label: 'Personal' },
                            { value: 'Ideas', label: 'Ideas' }
                        ]}
                    />
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        isRequired
                    />
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors">
                        Add Note
                    </button>
                </form>
            )}
        </div>
    );
}
 
export default NoteForm;