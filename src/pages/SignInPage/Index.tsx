import Layout from '../../components/Layout/Layout';
import Input from './Input';

const SignInSubmitHandler = ( e: React.FormEvent ) => {
	e.preventDefault();
	const target = e.target as typeof e.target & {
		text: { value: string };
		password: { value: string };
	};

	const ID = target.text.value;
	const PW = target.password.value;
	//통신 진행.
	alert(ID+ '아이디와 비밀번호!' +PW);
};

const SignInPage = (): JSX.Element => {
	return(
		<Layout>
            로그인
			<form onSubmit={SignInSubmitHandler}>
				<Input label='아이디' type='text' palceholder='아이디를 입력해주세요.' name='id' />
				<Input label='비밀번호' type='password' palceholder='비밀번호를 입력해주세요.' name='pw' />
				<input type='submit' value='로그인' />
			</form>
		</Layout>
	);
};

export default SignInPage;