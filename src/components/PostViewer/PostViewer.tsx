import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { PostViewerStyle } from './/PostViewer.styles';

interface Props {
    content: string
}

const PostViewer: React.FC<Props> = ( props: Props ) => {
	return(
		<div css={PostViewerStyle}>
			<Viewer initialValue={props.content} />
		</div>
	);
};

export default PostViewer;