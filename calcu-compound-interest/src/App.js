import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Section from "./Components/Section";
import Balance from "./Components/Balance";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }
  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            contribution: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            years: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            rate: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero').min(0, 'El valor minimo es 0').max(1, 'El valor maximo es 1'),

          })}>
          <Form>
            <Input name='deposit' label='Deposito inicial' />
            <Input name='contribution' label='Contribucion anual' />
            <Input name='years' label='Años' />
            <Input name='rate' label='Interes estimado' />
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container >
  );
}

export default App;
