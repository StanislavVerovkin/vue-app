<template>
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-xl-5">
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input
                                type="email"
                                class="form-control"
                                :class="{'is-invalid': $v.email.$error}"
                                id="email"
                                v-model.trim="$v.email.$model"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                class="form-control"
                                :class="{'is-invalid': $v.password.$error}"
                                id="password"
                                v-model.trim="$v.password.$model"
                        >
                    </div>
                    <button
                            :disabled="$v.$invalid"
                            @click="onSubmit"
                            type="submit"
                            class="btn btn-primary"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import {required, minLength} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        validations: {
            email: {
                required
            },
            password: {
                required,
                minLength: minLength(6)
            }
        },
        methods: {
            onSubmit() {
            }
        }
    }
</script>
