import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import { SectionStyle, FormStyle, TitleStyle, InputStyle, SubmitButtonStyle, RadioDivStyle, HiddenRadio, RadioButtonStyle } from './Styles';

interface Data {
	userId: string,
	userPw: string,
	userEmail: string,
	userName: string,
	userGender: string,
	userBirth: string
}

const SignUpPage = (): JSX.Element => {
	const { register, handleSubmit } = useForm<Data>();
	const SignInSubmitHandler = ( data: Data ) => {
		alert(JSON.stringify(data));
		//통신 진행.
	};

	return (
		<Layout>
			<section css={SectionStyle}>
				<div>
					<h1 css={TitleStyle}>회원가입</h1>
					<form css={FormStyle} onSubmit={handleSubmit(SignInSubmitHandler)}>
						<input css={InputStyle} type='text' placeholder='아이디 입력' {...register('userId')} required/>
						<input css={InputStyle} type='email' placeholder='이메일 입력' {...register('userEmail')} required/>
						<input css={InputStyle} type='password' placeholder='비밀번호 입력' {...register('userPw')} required/>
						<input css={InputStyle} type='password' placeholder='비밀번호 확인' required/>
						<input css={InputStyle} type='text' placeholder='이름 입력' {...register('userName')} required/>
						<div css={RadioDivStyle}>
							<input css={HiddenRadio} type='radio' {...register('userGender')} value='Male' id='Male'/>
							<label css={RadioButtonStyle} htmlFor="Male">남성</label>
							<input css={HiddenRadio} type='radio' {...register('userGender')} value='Female' id='Female'/>
							<label css={RadioButtonStyle} htmlFor="Female">여성</label>
						</div>
						<input css={InputStyle} type='text' placeholder='생년월일(ex. 20220101)' pattern='\d*' maxLength={8} {...register('userBirth')} required/>
						<input css={SubmitButtonStyle} type='submit' value='회원가입'/>
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default SignUpPage;