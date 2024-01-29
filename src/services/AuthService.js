export const login = async (email, password) => {
    try {
        const apiUrl = "http://localhost:8000/api/v1/users/login";
        const myHeaders = new Headers({
            "Content-Type": "application/json",
        });

        const requestBody = {
            email: email,
            password: password,
        };

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(requestBody),
            redirect: "follow",
        };

        const response = await fetch(apiUrl, requestOptions);
        const result = await response.json();

        // You can handle the result as needed
        console.log(result);

        return result;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export default login ;
