import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: true, // para saber si estoy guardando
    messageSaved: '',
    notes: [],
    active: null
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
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

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
export const { increment, decrement, incrementByAmount } = journalSlice.actions;

// export default journalSlice.reducer;
