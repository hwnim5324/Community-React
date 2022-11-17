import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import { SectionStyle, FormStyle, TitleStyle, InputStyle, ButtonStyle } from './Styles';
import UsersNav from './/components/UsersNav';

interface Data {
	userId: string,
	userPw: string
}

const SignInPage = (): JSX.Element => {
	const { register, handleSubmit } = useForm<Data>();
	const SignInSubmitHandler = ( data: Data ) => {
		alert(JSON.stringify(data));
		//통신 진행.
	};

	return(
		<Layout>
			<section css={SectionStyle}>
				<div>
					<h1 css={TitleStyle}>로그인</h1>
					<form css={FormStyle} onSubmit={handleSubmit(SignInSubmitHandler)}>
						<input css={InputStyle} type='text' placeholder='아이디를 입력하세요.' {...register('userId')} required/>
						<input css={InputStyle} type='password' placeholder='비밀번호를 입력하세요.' {...register('userPw')} required/>
						<UsersNav />
						<input css={ButtonStyle} type='submit' value='로그인' />
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default SignInPage;