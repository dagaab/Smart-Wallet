import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
import { Close, Next, CircleAlert } from 'grommet-icons';
import { emailValidation } from './FormValidation';
import { Link, NavLink } from 'react-router-dom';

const ResetPassword = ({ closeLayer, email }) => {
  const [formValues, setFormValues] = React.useState({ resetEmail: email });

  const onSubmit = ({ value, touched }) => {
    closeLayer();
  };

  return (
    <>
      <Box
        direction="row"
        justify="end"
        pad={{ horizontal: 'small', top: 'small' }}
      >
        <Button
          a11yTitle="Close reset password form"
          icon={<Close />}
          onClick={closeLayer}
        />
      </Box>
      <Box
        gap="medium"
        margin={{ horizontal: 'xlarge', bottom: 'xlarge', top: 'large' }}
        width="medium"
      >
        <Heading level={2} margin="none">
          Reset Password
        </Heading>
        <Form
          validate="blur"
          value={formValues}
          onChange={setFormValues}
          onSubmit={({ value, touched }) => onSubmit({ value, touched })}
          method="post"
        >
          <Box gap="medium">
            <Text>
              An email to reset your password will be sent to the following
              address:
            </Text>
            <FormField
              label="Email"
              htmlFor="resetEmail"
              name="resetEmail"
              validate={emailValidation}
            >
              <TextInput
                id="resetEmail"
                name="resetEmail"
                type="email"
                placeholder="your.email@company.com"
              />
            </FormField>
            <Button label="Send password reset" primary type="submit" />
          </Box>
        </Form>
      </Box>
    </>
  );
};

const SignIn = () => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  });
  const size = useContext(ResponsiveContext);
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [credentialError, setCredentialError] = React.useState(false);

  const onClose = () => {
    setShowForgotPassword(false);
  };

  const onForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const onSubmit = ({ value, touched }) => {
    if (password !== 'password') {
      setCredentialError(true);
    }
  };

  return (
    <Box gap="medium" width="medium">
      <Header
        direction="column"
        align="start"
        gap="xxsmall"
        pad={{ horizontal: 'xxsmall' }}
      >
        <Heading level={2} margin="none">
          Sign In
        </Heading>
        <Text>to Saving Gotchi</Text>
      </Header>
      <Box
        pad={{ horizontal: 'xxsmall' }}
      >
        <Form
          validate="blur"
          value={formValues}
          onChange={setFormValues}
          messages={{
            required: 'This is a required field.',
          }}
          onSubmit={({ value, touched }) => onSubmit({ value, touched })}
        >
          <FormField
            label="Email"
            name="email"
            htmlFor="email-sign-in"
            validate={emailValidation}
            required={{ indicator: false }}
          >
            <TextInput
              id="email-sign-in"
              name="email"
              placeholder="james@hpe.com"
              type="email"
            />
          </FormField>
          <FormField
            label="Password"
            htmlFor="password-sign-in"
            name="password"
            required={{ indicator: false }}
          >
            <TextInput
              id="password-sign-in"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
          </FormField>
          <FormField htmlFor="remember-me" name="rememberMe">
            <CheckBox id="remember-me" name="rememberMe" label="Remember me" />
          </FormField>
          {credentialError && (
            <Box
              animation="fadeIn"
              align="center"
              background="validation-critical"
              direction="row"
              gap="xsmall"
              margin={{ top: 'medium', bottom: 'medium' }}
              pad="small"
              round="4px"
            >
              <CircleAlert size="small" />
              <Text size="xsmall">Invalid credentials.</Text>
            </Box>
          )}
          <Box
            align={!['xsmall', 'small'].includes(size) ? 'start' : undefined}
            margin={{ top: 'medium', bottom: 'small' }}
          >
            <Button
              label="Sign In"
              icon={<Next />}
              reverse
              primary
              type="submit"
            />
          </Box>
        </Form>
        <Box align="start" margin={{ top: 'medium', bottom: 'small' }}>
          <Anchor label="Forgot password?" onClick={onForgotPassword} />
          {showForgotPassword && (
            <Layer modal onClickOutside={onClose} onEsc={onClose}>
              <ResetPassword
                closeLayer={onClose}
                email={formValues.email}
                updateForm={setFormValues}
              />
            </Layer>
          )}
        </Box>
        <Box align="start" margin={{ top: 'medium', bottom: 'small' }}>
        <NavLink
          to="/grid"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          For demonstration use this button to Sign In!
          <Box  background="black" border="2px">
          Sign In
          </Box>
        </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

ResetPassword.propTypes = {
  closeLayer: PropTypes.func,
  email: PropTypes.string,
};

export default SignIn;