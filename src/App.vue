<template>
    <div class="container-fluid h-100">
        <div class="row">
            <div class="col-xl-12">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

                    <router-link class="navbar-brand" to="/">Vue App</router-link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li
                                    v-for="link of links"
                                    :key="link.tittle"
                                    class="nav-item active"
                            >
                                <router-link class="nav-link" :to="link.url">{{link.tittle}}</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                links: [
                    {tittle: 'Login', url: '/login'},
                    {tittle: 'Registration', url: '/registration'},
                    {tittle: 'Orders', url: '/orders'},
                    {tittle: 'New ad', url: '/new'},
                    {tittle: 'My ads', url: '/list'},
                ]
            }
        }
    }
</script>

<style>
    html, body {
        height: 100%;
    }
</style>
