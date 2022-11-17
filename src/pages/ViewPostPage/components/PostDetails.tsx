import { PostDetailsStyle } from './PostDetails.styles';

interface Props {
    writer: string,
    date: string
}

const PostDetails: React.FC<Props> = ( props: Props ) => {
	return (
		<ul css={PostDetailsStyle}>
			<li>{props.writer}</li>
			<li>|</li>
			<li>{props.date}</li>
		</ul>
	);
};

export default PostDetails;