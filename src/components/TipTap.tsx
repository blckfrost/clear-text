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
                class: 'rounded-md border min-h-[150px] border-input',
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
            console.log(editor.getHTML);
        },
    });
    return (
        <div className="flex min-h-[250px] flex-col justify-stretch">
            <EditorContent editor={editor} />
        </div>
    );
};
