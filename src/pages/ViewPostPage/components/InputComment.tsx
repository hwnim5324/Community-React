import { useState } from 'react';
import { CommentInputStyle, SubmitButtonStyle } from './InputComment.styles';

const InputComment = (): JSX.Element => {
	const [comment, setComment] = useState('');

	function submitComment() {
		//통신
	}

	function SubmitCommentHandler() {
		if(comment!==''){
			submitComment();
		}else{
			alert('댓글을 입력해주세요.');
		}
	}

	return (
		<div>
			<textarea css={CommentInputStyle} placeholder='댓글을 입력해주세요.' onChange={(e)=>{setComment(e.target.value);}}/>
			<button css={SubmitButtonStyle} onClick={SubmitCommentHandler}>등록</button>
		</div>
	);
};

export default InputComment;