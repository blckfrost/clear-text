import { Bold, Italic, List, Heading2 } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { type Editor } from '@tiptap/react';

type ToolBarProps = {
    editor: Editor | null;
};

export const ToolBar = ({ editor }: ToolBarProps) => {
    if (!editor) {
        return null;
    }
    return (
        <div>
            <Toggle></Toggle>
        </div>
    );
};
