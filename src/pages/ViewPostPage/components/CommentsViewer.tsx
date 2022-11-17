import { CommentsViewerStyle, CommentDetailsStyle, CommentStyle } from './/CommentsViewer.styles';

interface Comments {
    writer: string,
    date: string,
    comment: string
}

interface Props {
    comments: Comments
}

const CommentsViewer: React.FC<Props> = ( props: Props ) => {
	return (
		<li css={CommentsViewerStyle}>
			<div css={CommentDetailsStyle}>
				<h3>{props.comments.writer}</h3>
				<h4>{props.comments.date}</h4>
			</div>
			<div css={CommentStyle}>
				{props.comments.comment}
			</div>
		</li>
	);
};

export default CommentsViewer;