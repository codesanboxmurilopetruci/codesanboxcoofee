import React, { useState, useContext, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
   
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const Register = () => {
    const classes = useStyles();


  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Entrar
          </Typography>
          <form className={classes.form} noValidate>
          
            <Grid container spacing={2}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </Grid>
            <Grid container spacing={2}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
           
              required
            />
            </Grid>
            
            <Grid container spacing={2}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"  />}
              label="Lembrar senha"
            />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              className={classes.submit}
            >
              Entrar
           
            </Button>
            <Grid container justify="flex-end">
              <Grid item xs>
                <Link href="/Reg" variant="body2">
                  Perdeu sua senha ?
                </Link>
              </Grid>
              <Grid item>
                
              <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Clique aqui
                  </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>



   );
  };


export default Register