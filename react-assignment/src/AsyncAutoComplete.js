import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AsyncAutoComplete(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
    // const sample = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
    // await sleep(1e3); // For demo purposes.
    // const countries = await sample.json();
    // console.log(countries);

      const response =  {
            accounts:[
                {
                login: "someWan",
                id: 1
                },
                {
                login: "anotherWan",
                id: 2
                },
                {
                login: "dozgr95",
                id: 3
                },
            ]
        }
      // await fetch('https://api.github.com/search/users/');
      sleep(1);

      if (active) {
        setOptions(Object.keys(response.accounts).map((key) => response.accounts[key]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const selectOptionAction = (event, value) => {
      if(value) {
         window.open('https://github.com/'+value.login, '_blank', 'noopener,noreferrer')
      }
  }
    
  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.login === value.login}
      getOptionLabel={(option) => option.login}
      options={options}
      loading={loading}
      onChange={selectOptionAction}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
