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
        savingNewNote: (state, action) => {
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

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;

// export default journalSlice.reducer;
