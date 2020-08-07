export const validateEmail = (email: string): boolean => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,64}$/
  return regex.test(email)
}
