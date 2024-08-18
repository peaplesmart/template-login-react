export function passwordValidator(password) {
  if (!password) return "Silahakan isi kolom ini"
  if (password.length < 8) return 'Kata sandi harus berisi minimal 8 karakter.'
  return ''
}
