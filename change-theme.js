const changeTheme = document.getElementById('change-theme');
let darkMode = localStorage.getItem('darkMode')
const checkToggler = document.querySelector('#change-theme #checkbox')

const enableDarkMode = () => {
  document.body.classList.add('theme-dark')
  checkToggler.checked = true
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('theme-dark')
  checkToggler.checked = false
  localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
	enableDarkMode()
}

changeTheme.addEventListener('change', () => {
	darkMode = localStorage.getItem('darkMode')

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});