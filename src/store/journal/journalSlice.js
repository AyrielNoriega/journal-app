import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false, // para saber si estoy guardando
    messageSaved: '',
    notes: [],
    active: null // contiene la nota activa
    // active: {
    //     id: 'abc123',
    //     title: '',
    //     body: '',
    //     date: 1234,
    //     imageUrls: [] // https://foto1.jpg, https://foto1.jpg, https://foto1.jpg
    // }
};

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            console.log(action);
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            console.log(action.payload);
            state.notes = state.notes.map(note => {
                console.log(note);
                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note;
            });
        },
        deleteNoteById: (state, action) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;

// export default journalSlice.reducer;
