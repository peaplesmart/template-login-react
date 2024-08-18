export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Silakan isi kolom ini."
  if (!re.test(email)) return 'Silakan masukkan alamat email yang valid!'
  return ''
}