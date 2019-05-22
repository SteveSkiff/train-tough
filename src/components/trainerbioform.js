import React from "react"
import styled from "styled-components"
import Input from './input'
import SmallBtn from './smallbutton'

const Form = styled.form`
 min-height: 100vh;
 margin: 40px 15px;
`

const FormLabel = styled.label`

`

const FormSecContainer = styled.div`

`

const FormInput = styled(Input)`
    margin-bottom: 20px;
`

class TrainerBioForm extends React.Component {
    state = {
        certification: [{certificationName: ''}],
        trainingStyle: [{styleName: ''}],
        name: '',
        location: '',
        about: '',
    }

    addCert = (e) => {
        this.setState((prevState) => ({
            certification: [...prevState.certification, {certificationName:''}],
        }))
    }

    handleSubmit = (e) => { e.preventDefault()}



    render() {
        let {certification} = this.state;
        let {trainingStyle} = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormLabel htmlFor='name'>Name</FormLabel> <br />
                <FormInput type='text' name='name' id='name' /> <br />

                <FormLabel htmlFor='location'>Location</FormLabel> <br />
                <FormInput type='text' name='location' id='location' /> <br />

                <FormLabel htmlFor='about'>About</FormLabel> <br />
                <FormInput inputSize='lg' type='textarea' name='about' id='about' /> <br />

                {
                    certification.map((val, i) => {
                        let certId = `cert-${i}`
                        return (
                            <FormSecContainer key={i}>
                                <FormLabel htmlFor={certId}>{`Certification #${i+1}`}</FormLabel> <br />
                                <FormInput
                                    type='text'
                                    name={certId}
                                    data-id={i}
                                    id={i}
                                />
                            </FormSecContainer>
                        )
                    })
                }

                <SmallBtn onClick={this.addCert}>Add Certification</SmallBtn> <br />

                <SmallBtn>Add Style</SmallBtn> <br />



                <FormInput type='submit' value='submit' />

            </Form>
        )
    }
}

export default TrainerBioForm