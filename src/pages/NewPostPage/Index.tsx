import { useRef, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import PostEditor from '../../components/PostEditor/PostEditor';
import { SectionStyle, TitleInputStyle, SubmitButtonStyle } from './Styles';

const NewPostPage = (): JSX.Element => {
	const editorRef = useRef<any>(null);
	const [title, setTitle] = useState('');

	function PostSubmitHandler() {
		if(isValidContent()){
			const INSTANCE = editorRef.current?.getInstance();

			if(INSTANCE.mode==='wysiwyg'){
				const CONTENT = INSTANCE.getHTML();
				submitPost(title, CONTENT);
			}else if(INSTANCE.mode==='markdown'){
				const CONTENT = INSTANCE.getMarkdown();
				submitPost(title, CONTENT);
			}
		}
	}

	function isValidContent() {
		if(title===''){
			alert('제목을 입력해주세요.');
			return false;
		}else if(editorRef.current?.getInstance().getMarkdown()===''){
			alert('내용을 입력해주세요.');
			return false;
		}
		return true;
	}

	function submitPost(title: string, content: string) {
		console.log(title, content);
		//통신
	}

	return (
		<Layout>
			<section css={SectionStyle}>
				<input css={TitleInputStyle} type='text' placeholder='제목을 입력해주세요.' onChange={(e)=>{setTitle(e.target.value);}}/>
				<PostEditor editorRef={editorRef} />
				<button css={SubmitButtonStyle} onClick={PostSubmitHandler}>등록</button>
			</section>
		</Layout>
	);
};

export default NewPostPage;