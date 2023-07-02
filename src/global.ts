
if (process.env.NODE_ENV === 'development') {
    console.log(window.location.pathname)
    if (window.location.pathname === '/') {
      window.location.assign('/demo');
    }
  }