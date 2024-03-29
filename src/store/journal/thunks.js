import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
        console.log(notes);
    };
};

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const notesToForeStore = { ...note };
        delete notesToForeStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, notesToForeStore, { merge: true });

        dispatch(updateNote(note));
    };
};

export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));
        // await fileUpload(files[0]);
    };
};

export const startDeletingNote = (files = []) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // console.log({ uid, note });

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note));
    };
};
