<template>
    <div class="container">
        <div class="list-group">
            <div
                    class="list-group-item list-group-item-action"
                    v-for="order of orders"
                    :key="order.id"
                    :class="{'active': order.done}"
            >
                <div class="row align-items-center">
                    <div @click="markDone(order)" class="col-xl-11">
                        <div>
                            Name: <strong>{{order.name}}</strong>
                        </div>
                        <div>
                            Phone: <strong>{{order.phone}}</strong>
                        </div>
                    </div>
                    <div class="col-xl-1">
                        <button class="btn btn-dark">Open</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orders: [
                    {
                        id: 1,
                        name: 'Stas',
                        phone: '380334455',
                        adId: '123',
                        done: false,
                    },
                    {
                        id: 2,
                        name: 'Stas',
                        phone: '380334455',
                        adId: '123',
                        done: false,
                    },
                    {
                        id: 3,
                        name: 'Stas',
                        phone: '380334455',
                        adId: '123',
                        done: false,
                    },
                    {
                        id: 4,
                        name: 'Stas',
                        phone: '380334455',
                        adId: '123',
                        done: false,
                    }
                ]
            }
        },
        methods: {
            markDone(order) {
                order.done = true;
            }
        }
    }
</script>
