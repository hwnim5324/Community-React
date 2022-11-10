import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import { SectionStyle, FormStyle, LabelStyle, InputStyle, ButtonStyle } from './Styles';

const SignInPage = (): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const SignInSubmitHandler = ( data: any ) => {
		alert(JSON.stringify(data));
		//통신 진행.
	};

	return(
		<Layout>
			<section css={SectionStyle}>
				<div>
					<h1>로그인</h1>
					<form css={FormStyle} onSubmit={handleSubmit(SignInSubmitHandler)}>
						<label css={LabelStyle}>
							<input css={InputStyle} type='text' placeholder='아이디를 입력하세요.' {...register('userId')} required/>
						</label>
						<label css={LabelStyle}>
							<input css={InputStyle} type='password' placeholder='비밀번호를 입력하세요.' {...register('userPw')} required/>
						</label>
						<input css={ButtonStyle} type='submit' value='로그인' />
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default SignInPage;