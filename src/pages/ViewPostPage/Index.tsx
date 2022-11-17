import Layout from '../../components/Layout/Layout';
import PostViewer from '../../components/PostViewer/PostViewer';
import PostDetails from './components/PostDetails';
import InputComment from './components/InputComment';
import CommentsViewer from './components/CommentsViewer';
import { SectionStyle, TitleStyle, CommentTitleStyle } from './/Styles';

interface Data {
    title: string
    writer: string,
    date: string,
    content: string
}

const ViewPostPage = (): JSX.Element => {
	const test: Data = {
		title: '제목입니다!',
		writer: '남현우',
		date: '2022-11-17',
		content: 'text'
	};

	const testComment = {
		writer: '남현우',
		date: '2022-11-17',
		comment: '우와댓글이 된다!'
	};

	const arr = [testComment, testComment,testComment,testComment,testComment];

	return (
		<Layout>
			<section css={SectionStyle}>
				<h1 css={TitleStyle}>{test.title}</h1>
				<PostDetails writer={test.writer} date={test.date}/>
				<PostViewer content={test.content} />
				<h2 css={CommentTitleStyle}>댓글</h2>
				<InputComment />
				<ul>
					{arr.map((item, idx) => {
						return (
							<CommentsViewer key={idx} comments={item} />
						);
					})}
				</ul>
			</section>
		</Layout>
	);
};

export default ViewPostPage;