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
    </form>
</template>

<style scoped>
    .input {
        padding-right: 1rem;
    }
</style>