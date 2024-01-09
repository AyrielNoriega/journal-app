import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* JournalPage */}

            {/* <NothingSelectedView /> */}
            <NoteView />

        </JournalLayout>
    );
};
