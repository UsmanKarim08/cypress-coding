class logindemo{
    usernameInputField(){
        return "[name='username']"
    }
    pwdInputField(){
        return "[name='password']"
    }
    signInButton(){
        return ".oxd-button"
    }
}
const loginfile = new logindemo()
export default loginfile