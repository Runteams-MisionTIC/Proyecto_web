export const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`
}