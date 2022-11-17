import { MutableRefObject } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { EditorStyle } from './PostEditor.styles';

interface Props {
    editorRef: MutableRefObject<unknown>
}

const PostEditor: React.FC<Props> = ( props: Props ) => {

	return (
		<div css={EditorStyle}>
			<Editor
				height="100%"
				initialEditType="wysiwyg"
				useCommandShortcut={true}
				ref={(element) => {
					props.editorRef.current = element;
				}}
			/>
		</div>
	);
};

export default PostEditor;