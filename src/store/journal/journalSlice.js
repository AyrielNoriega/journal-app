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
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;

            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote
} = journalSlice.actions;

// export default journalSlice.reducer;
