function logout() {
  localStorage.removeItem('token');
  window.location.replace('/');
}

export default logout;
