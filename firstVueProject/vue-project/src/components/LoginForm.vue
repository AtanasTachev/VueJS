<script>
export default {
    data: () => ({
        
    }),
}
</script>

<template>
    <form action="POST">
        <fieldset>
            <label class="input" for="firstName">First Name</label>
            <input type="text" key="firstName" >
        </fieldset>
        <fieldset>
            <label class="input" for="lastName">Last Name</label>
            <input type="text" key="lastName" >
        </fieldset>
        <fieldset>
            <label class="input" for="email">Email</label>
            <input type="email" key="email" >
        </fieldset>
        <fieldset>
            <label class="input" for="password">Password</label>
            <input type="password" key="password" >
        </fieldset>
        <fieldset>
            <label class="input" for="repeatPassword">Repeat Password</label>
            <input type="password" key="repeatPassword" >
        </fieldset>
        <button class="loginBtn" type="submit">Login</button>

    </form>
</template>

<style scoped>
    .input {
        padding-right: 1rem;
    }
    .loginBtn{
        font-size: 1.25rem;
        background-color: greenyellow;
        text-align: center;
        border: 0.05rem;
        margin-top: 1rem;
        display: flex;
        border-radius: 0.25rem;
    }
    .loginBtn:hover{
        background-color: green;
        color: white;
    }
</style>