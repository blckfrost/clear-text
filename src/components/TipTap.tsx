import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const TipTap = ({
    description,
    onChange,
}: {
    description: string;
    onChange: (richText: string) => void;
}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: description,
        editorProps: {
            attributes: {
                class: '',
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
            console.log(editor.getHTML);
        },
    });
    return (
        <div>
            <EditorContent editor={editor} />
        </div>
    );
};
