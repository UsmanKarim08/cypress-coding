class DemoPage{
    ultimateQaValidation ='img[src="/images/Toolsqa.jpg"]'
    
    nameInputField(){
        return '#userName'
    }
    emailInputField(){
        return '#userEmail'
    }
    currentAdressField(){
        return '[placeholder="Current Address"]'
    }
    permaAdressField(){
        return "#permanentAddress"
    }
    submitButton(){
        return "#submit"
    }
    nameValid(){
        return "#name"
    }
    emailValid(){
        return "#email"
    }
    currentValid(){
      return  ".border > #currentAddress"
    }
    permanentValid(){
        return ".border > #permanentAddress"
    }


}
const demo = new DemoPage()
export default demo