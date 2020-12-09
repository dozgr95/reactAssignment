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
  const [searchValue, setSearchValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);

   React.useEffect(() => {
    if(searchValue) {
        let active = true;

        if(searchValue !== '') {
            setLoading(true);
            (async () => {
            const query = '?q='+searchValue+' in:user'+
                '&access_token=c07e5fe534142fb0de89581ee82bc0ad89587433&'
                //  +
                // 'per_page=100&'+
                // 'page=1'
            const response = await fetch('https://api.github.com/search/users'+query, {
                method: 'GET'
                // headersaccept: 'application/vnd.github.v3+json',
            });
            console.log(response)
            const accounts = await response.json();
            console.log(accounts)

            if (active) {
                setOptions(accounts.items) // array
                }
            })();
            setLoading(false);    
            return () => {
                active = false;
            };

        }
    }
  }, [searchValue]);

  const selectOptionAction = (event, value) => {
      if(value) {
         window.open('https://github.com/'+value.login, '_blank', 'noopener,noreferrer')
      }
  }

  const searchValueChanged = (event) => {
    if(event.target.value === '') {
        setOptions([])
    }
    console.log('value changed', event.target.value)
    setSearchValue(event.target.value)
  } 
  
  const keyPressed = (event) => {
    if(event.key == 'Enter' && searchValue){
        window.open('https://github.com/'+searchValue, '_blank', 'noopener,noreferrer')
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
          label="Github benutzer"
          variant="outlined"
          onChange={searchValueChanged}
          onKeyDown={keyPressed}
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
